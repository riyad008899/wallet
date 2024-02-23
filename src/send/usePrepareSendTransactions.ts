import BigNumber from 'bignumber.js'
import { useAsyncCallback } from 'react-async-hook'
import erc20 from 'src/abis/IERC20'
import jumpstart from 'src/abis/IWalletJumpstart'
import { SendOrigin } from 'src/analytics/types'
import { getDynamicConfigParams } from 'src/statsig'
import { DynamicConfigs } from 'src/statsig/constants'
import { StatsigDynamicConfigs } from 'src/statsig/types'
import { tokenAmountInSmallestUnit } from 'src/tokens/saga'
import { TokenBalance, isNativeTokenBalance, tokenBalanceHasAddress } from 'src/tokens/slice'
import { tokenSupportsComments } from 'src/tokens/utils'
import Logger from 'src/utils/Logger'
import { publicClient } from 'src/viem'
import {
  TransactionRequest,
  prepareERC20TransferTransaction,
  prepareSendNativeAssetTransaction,
  prepareTransactions,
  prepareTransferWithCommentTransaction,
} from 'src/viem/prepareTransactions'
import { networkIdToNetwork } from 'src/web3/networkConfig'
import { Address, encodeFunctionData } from 'viem'

const TAG = 'src/send/usePrepareSendTransactions'

async function createBaseJumpstartTransactions(
  spendTokenAmount: BigNumber,
  spendToken: TokenBalance,
  walletAddress: string,
  publicKey: string
) {
  const { networkId, address } = spendToken
  const baseTransactions: TransactionRequest[] = []

  if (!address) {
    // this contract currently requires the address, so native tokens are not supported
    return baseTransactions
  }

  const jumpstartContractAddress = getDynamicConfigParams(
    DynamicConfigs[StatsigDynamicConfigs.WALLET_JUMPSTART_CONFIG]
  ).jumpstartContracts?.[networkId]?.contractAddress

  if (!jumpstartContractAddress) {
    // TODO check if we can prevent this by restricting the send tokens
    Logger.error(TAG, 'Jumpstart contract address is not provided in dynamic config')
    // todo throw error
    return baseTransactions
  }

  const spendAmount = BigInt(spendTokenAmount.toFixed(0))
  // If the sell token is ERC-20, we need to check the allowance and add an
  // approval transaction if necessary
  const approvedAllowanceForSpender = await publicClient[
    networkIdToNetwork[networkId]
  ].readContract({
    address: address as Address,
    abi: erc20.abi,
    functionName: 'allowance',
    args: [walletAddress as Address, jumpstartContractAddress as Address],
  })

  if (approvedAllowanceForSpender < spendAmount) {
    const approveTx: TransactionRequest = {
      from: walletAddress as Address,
      to: spendToken.address as Address,
      data: encodeFunctionData({
        abi: erc20.abi,
        functionName: 'approve',
        args: [jumpstartContractAddress as Address, spendAmount],
      }),
    }
    baseTransactions.push(approveTx)
  }

  const transferTx: TransactionRequest = {
    from: walletAddress as Address,
    to: jumpstartContractAddress as Address,
    value: BigInt(0),
    data: encodeFunctionData({
      abi: jumpstart.abi,
      functionName: 'depositERC20',
      args: [publicKey as Address, address as Address, spendAmount],
    }),
  }
  baseTransactions.push(transferTx)

  return baseTransactions
}

type PrepareSendTransactionsCallbackInput =
  | {
      sendOrigin: SendOrigin.Jumpstart
      publicKey: string
      amount: BigNumber
      token: TokenBalance
      walletAddress: string
      feeCurrencies: TokenBalance[]
    }
  | {
      sendOrigin: SendOrigin.AppSendFlow | SendOrigin.Bidali
      recipientAddress: string
      comment?: string
      amount: BigNumber
      token: TokenBalance
      walletAddress: string
      feeCurrencies: TokenBalance[]
    }

export async function prepareSendTransactionsCallback(input: PrepareSendTransactionsCallbackInput) {
  const { amount, token, walletAddress, feeCurrencies } = input
  if (amount.isLessThanOrEqualTo(0)) {
    return
  }

  if (input.sendOrigin === SendOrigin.Jumpstart) {
    const baseTransactions = await createBaseJumpstartTransactions(
      amount,
      token,
      walletAddress,
      input.publicKey
    )
    return prepareTransactions({
      feeCurrencies,
      spendToken: token,
      spendTokenAmount: amount,
      baseTransactions,
    })
  }

  const { recipientAddress, comment } = input
  const baseTransactionParams = {
    // not including sendToken yet because of typing. need to check whether token has address field or not first, required for erc-20 transfers
    fromWalletAddress: walletAddress,
    toWalletAddress: recipientAddress,
    amount: BigInt(tokenAmountInSmallestUnit(amount, token.decimals)),
    feeCurrencies,
  }
  if (tokenBalanceHasAddress(token)) {
    // NOTE: CELO will be sent as ERC-20. This makes analytics easier, but if gas prices increase later on and/or we
    //   gain analytics coverage for native CELO transfers, we could switch to sending CELO as native asset to save on gas
    const transactionParams = { ...baseTransactionParams, sendToken: token, comment }
    if (tokenSupportsComments(token)) {
      return prepareTransferWithCommentTransaction(transactionParams)
    } else {
      return prepareERC20TransferTransaction(transactionParams)
    }
  } else if (isNativeTokenBalance(token)) {
    return prepareSendNativeAssetTransaction({
      ...baseTransactionParams,
      sendToken: token,
    })
  } else {
    Logger.error(
      TAG,
      `Token does not have address AND is not native. token: ${JSON.stringify(token)}}`
    )
  }
}

/**
 * Hook to prepare transactions for sending crypto.
 */
export function usePrepareSendTransactions() {
  const prepareTransactions = useAsyncCallback(prepareSendTransactionsCallback, {
    onError: (error) => {
      Logger.error(TAG, `prepareTransactionsOutput: ${error}`)
    },
  })

  return {
    prepareTransactionsResult: prepareTransactions.result,
    refreshPreparedTransactions: prepareTransactions.execute,
    clearPreparedTransactions: prepareTransactions.reset,
    prepareTransactionError: prepareTransactions.error,
  }
}
