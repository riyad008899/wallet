import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { call } from 'redux-saga/effects'
import { getFeatureGate } from 'src/statsig'
import { NetworkId } from 'src/transactions/types'
import { estimateFeesPerGas } from 'src/viem/estimateFeesPerGas'
import { SupportedActions } from 'src/walletConnect/constants'
import { handleRequest } from 'src/walletConnect/request'
import { getViemWallet, getWallet } from 'src/web3/contracts'
import { unlockAccount } from 'src/web3/saga'
import { createMockStore } from 'test/utils'
import {
  mockCeloAddress,
  mockCeloTokenId,
  mockCeurAddress,
  mockCeurTokenId,
  mockCusdAddress,
  mockCusdTokenId,
  mockTypedData,
  mockViemWallet,
  mockWallet,
} from 'test/values'
import { formatTransaction } from 'viem'
import { getTransactionCount } from 'viem/actions'

jest.mock('src/statsig')
jest.mock('src/web3/networkConfig', () => {
  const originalModule = jest.requireActual('src/web3/networkConfig')
  return {
    ...originalModule,
    __esModule: true,
    default: {
      ...originalModule.default,
      defaultNetworkId: 'celo-alfajores',
    },
  }
})

const mockTransactionCount = jest.fn().mockResolvedValue(7)
const mockEstimateFeePerGas = jest.fn().mockResolvedValue({
  maxFeePerGas: BigInt(12345),
  maxPriorityFeePerGas: undefined,
})

const signTransactionRequest = {
  method: SupportedActions.eth_signTransaction,
  params: [{ from: '0xTEST', to: '0xTEST', data: '0x', nonce: 7, gas: '0x5208', value: '0x01' }],
}
const personalSignRequest = {
  method: SupportedActions.personal_sign,
  params: ['Some message', '0xdeadbeef'],
}
const signTypedDataRequest = {
  method: SupportedActions.eth_signTypedData,
  params: ['0xdeadbeef', JSON.stringify(mockTypedData)],
}
const signTypedDataV4Request = {
  method: SupportedActions.eth_signTypedData_v4,
  params: ['0xdeadbeef', JSON.stringify(mockTypedData)],
}

const state = createMockStore({
  web3: { account: '0xWALLET', mtwAddress: undefined },
  tokens: {
    tokenBalances: {
      [mockCusdTokenId]: {
        balance: '00',
        priceUsd: '1',
        symbol: 'cUSD',
        address: mockCusdAddress,
        tokenId: mockCusdTokenId,
        networkId: NetworkId['celo-alfajores'],
        isCoreToken: true,
        priceFetchedAt: Date.now(),
      },
      [mockCeurTokenId]: {
        balance: '0',
        priceUsd: '1.2',
        symbol: 'cEUR',
        address: mockCeurAddress,
        tokenId: mockCeurTokenId,
        networkId: NetworkId['celo-alfajores'],
        isCoreToken: true,
        priceFetchedAt: Date.now(),
      },
      [mockCeloTokenId]: {
        balance: '5',
        priceUsd: '3.5',
        symbol: 'CELO',
        address: mockCeloAddress,
        tokenId: mockCeloTokenId,
        networkId: NetworkId['celo-alfajores'],
        isCoreToken: true,
        priceFetchedAt: Date.now(),
      },
    },
  },
}).getState()

describe(handleRequest, () => {
  it('unlocks the wallet address when a MTW address is set', async () => {
    const state = createMockStore({ web3: { account: '0xWALLET', mtwAddress: '0xMTW' } }).getState()
    await expectSaga(handleRequest, signTransactionRequest)
      .provide([[call(getWallet), mockWallet]])
      .withState(state)
      .call(unlockAccount, '0xwallet')
      .run()
  })

  it('unlocks the wallet address when a MTW address is NOT set', async () => {
    const state = createMockStore({
      web3: { account: '0xWALLET', mtwAddress: undefined },
    }).getState()
    await expectSaga(handleRequest, signTransactionRequest)
      .provide([[call(getWallet), mockWallet]])
      .withState(state)
      .call(unlockAccount, '0xwallet')
      .run()
  })

  it('supports personal_sign', async () => {
    await expectSaga(handleRequest, personalSignRequest)
      .provide([[matchers.call.fn(getViemWallet), mockViemWallet]])
      .withState(state)
      .call([mockViemWallet, 'signMessage'], {
        message: { raw: 'Some message' },
      })
      .run()
  })

  it('supports eth_signTypedData', async () => {
    await expectSaga(handleRequest, signTypedDataRequest)
      .provide([[matchers.call.fn(getViemWallet), mockViemWallet]])
      .withState(state)
      .call([mockViemWallet, 'signTypedData'], mockTypedData)
      .run()
  })

  it('supports eth_signTypedData_v4', async () => {
    await expectSaga(handleRequest, signTypedDataV4Request)
      .provide([[matchers.call.fn(getViemWallet), mockViemWallet]])
      .withState(state)
      .call([mockViemWallet, 'signTypedData'], mockTypedData)
      .run()
  })

  describe('eth_signTransaction', () => {
    // TODO: keep only Viem branch after feeCurrecny estimation is ready
    describe('transaction normalization (viem)', () => {
      beforeAll(() => {
        jest.mocked(getFeatureGate).mockReturnValue(true)
      })

      it('ensures `gasLimit` value is moved to the `gas` parameter', async () => {
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC', gasLimit: '0x5208' }],
        })
          .provide([
            [matchers.call.fn(getViemWallet), mockViemWallet],
            [matchers.call.fn(getTransactionCount), mockTransactionCount],
            [matchers.call.fn(estimateFeesPerGas), mockEstimateFeePerGas],
          ])
          .withState(state)
          .call(formatTransaction, { from: '0xTEST', data: '0xABC', gas: '0x5208' })
          .run()
      })

      it('ensures `gasPrice` is stripped away before preparing transaction request', async () => {
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC', gasPrice: '0x5208' }],
        })
          .provide([
            [matchers.call.fn(getViemWallet), mockViemWallet],
            [matchers.call.fn(getTransactionCount), mockTransactionCount],
            [matchers.call.fn(estimateFeesPerGas), mockEstimateFeePerGas],
          ])
          .withState(state)
          .call(formatTransaction, { from: '0xTEST', data: '0xABC' })
          .run()
      })

      it('ensures normalization is skipped when __skip_normalization is set', async () => {
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [
            {
              from: '0xTEST',
              data: '0xABC',
              gasLimit: '0x5208',
              gasPrice: '0x5208',
              __skip_normalization: true,
            },
          ],
        })
          .provide([
            [matchers.call.fn(getViemWallet), mockViemWallet],
            [matchers.call.fn(getTransactionCount), mockTransactionCount],
            [matchers.call.fn(estimateFeesPerGas), mockEstimateFeePerGas],
          ])
          .withState(state)
          .call(formatTransaction, {
            from: '0xTEST',
            data: '0xABC',
            gasLimit: '0x5208',
            gasPrice: '0x5208',
          })
          .run()
      })
    })

    describe('transaction normalization (legacy)', () => {
      beforeAll(() => {
        jest.mocked(getFeatureGate).mockReturnValue(false)
      })

      it('ensures chainId, feeCurrency, gas, gasPrice and nonce are added if not set', async () => {
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC' }],
        })
          .provide([[call(getWallet), mockWallet]])
          .withState(state)
          .call(unlockAccount, '0xwallet')
          .call([mockWallet, 'signTransaction'], {
            from: '0xTEST',
            data: '0xABC',
            feeCurrency: undefined, // undefined to pay with CELO, since the balance is non zero
            gas: 1000000,
            gasPrice: '3',
            chainId: '0xaef3', // 44787 as a hex string
            nonce: 7,
          })
          .run()
      })

      it('ensures normalization is skipped when __skip_normalization is set', async () => {
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC', __skip_normalization: true }],
        })
          .provide([[call(getWallet), mockWallet]])
          .withState(state)
          .call(unlockAccount, '0xwallet')
          .call([mockWallet, 'signTransaction'], { from: '0xTEST', data: '0xABC' })
          .run()
      })

      it('ensures gas is padded and gasPrice recalculated when feeCurrency is not set (or was stripped) and the new feeCurrency is non-CELO', async () => {
        // This is because WalletConnect v1 utils strips away feeCurrency

        const state = createMockStore({
          web3: { account: '0xWALLET', mtwAddress: undefined },
          tokens: {
            tokenBalances: {
              [mockCusdTokenId]: {
                balance: '10',
                priceUsd: '1',
                symbol: 'cUSD',
                address: mockCusdAddress,
                tokenId: mockCusdTokenId,
                networkId: NetworkId['celo-alfajores'],
                isCoreToken: true,
                priceFetchedAt: Date.now(),
              },
              [mockCeurTokenId]: {
                balance: '0',
                priceUsd: '1.2',
                symbol: 'cEUR',
                address: mockCeurAddress,
                tokenId: mockCeurTokenId,
                networkId: NetworkId['celo-alfajores'],
                isCoreToken: true,
                priceFetchedAt: Date.now(),
              },
              [mockCeloTokenId]: {
                balance: '0',
                priceUsd: '3.5',
                symbol: 'CELO',
                address: mockCeloAddress,
                tokenId: mockCeloTokenId,
                networkId: NetworkId['celo-alfajores'],
                isCoreToken: true,
                priceFetchedAt: Date.now(),
              },
            },
          },
        }).getState()

        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC', gas: 1, gasPrice: 2, nonce: 3 }],
        })
          .provide([[call(getWallet), mockWallet]])
          .withState(state)
          .call(unlockAccount, '0xwallet')
          .call([mockWallet, 'signTransaction'], {
            from: '0xTEST',
            data: '0xABC',
            feeCurrency: mockCusdAddress,
            gas: 50001, // 1 + STATIC_GAS_PADDING
            gasPrice: '3',
            chainId: '0xaef3', // 44787 as a hex string
            nonce: 3,
          })
          .run()
      })

      it('ensures gas is NOT padded and gasPrice is recalculated when feeCurrency is not set (or was stripped) and the new feeCurrency is CELO', async () => {
        // This is because WalletConnect v1 utils strips away feeCurrency
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC', gas: 1, gasPrice: 2, nonce: 3 }],
        })
          .provide([[call(getWallet), mockWallet]])
          .withState(state)
          .call(unlockAccount, '0xwallet')
          .call([mockWallet, 'signTransaction'], {
            from: '0xTEST',
            data: '0xABC',
            feeCurrency: undefined, // undefined to pay with CELO, since the balance is non zero
            gas: 1,
            gasPrice: '3',
            chainId: '0xaef3', // 44787 as a hex string
            nonce: 3,
          })
          .run()
      })

      it('ensures chainId, feeCurrency, gas, gasPrice and nonce are kept when provided', async () => {
        const txParams = {
          from: '0xTEST',
          data: '0xABC',
          chainId: 45000,
          feeCurrency: mockCusdAddress,
          gas: 1,
          gasPrice: 2,
          nonce: 3,
        }
        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [txParams],
        })
          .provide([[call(getWallet), mockWallet]])
          .withState(state)
          .call(unlockAccount, '0xwallet')
          .call([mockWallet, 'signTransaction'], {
            from: '0xTEST',
            data: '0xABC',
            chainId: '0xafc8', // 45000 as a hex string
            feeCurrency: mockCusdAddress,
            gas: 1,
            gasPrice: 2,
            nonce: 3,
          })
          .run()
      })

      it('ensures feeCurrency is set to a token which has a balance, when not provided', async () => {
        const state = createMockStore({
          web3: { account: '0xWALLET', mtwAddress: undefined },
          tokens: {
            tokenBalances: {
              [mockCusdTokenId]: {
                balance: '0',
                priceUsd: '1',
                symbol: 'cUSD',
                address: mockCusdAddress,
                tokenId: mockCusdTokenId,
                networkId: NetworkId['celo-alfajores'],
                isCoreToken: true,
                priceFetchedAt: Date.now(),
              },
              [mockCeurTokenId]: {
                balance: '10',
                priceUsd: '1.2',
                symbol: 'cEUR',
                address: mockCeurAddress,
                tokenId: mockCeurTokenId,
                networkId: NetworkId['celo-alfajores'],
                isCoreToken: true,
                priceFetchedAt: Date.now(),
              },
              [mockCeloTokenId]: {
                balance: '0',
                priceUsd: '3.5',
                symbol: 'CELO',
                address: mockCeloAddress,
                tokenId: mockCeloTokenId,
                networkId: NetworkId['celo-alfajores'],
                isCoreToken: true,
                priceFetchedAt: Date.now(),
              },
            },
          },
        }).getState()

        await expectSaga(handleRequest, {
          method: SupportedActions.eth_signTransaction,
          params: [{ from: '0xTEST', data: '0xABC' }],
        })
          .provide([[call(getWallet), mockWallet]])
          .withState(state)
          .call(unlockAccount, '0xwallet')
          .call([mockWallet, 'signTransaction'], {
            from: '0xTEST',
            data: '0xABC',
            feeCurrency: mockCeurAddress,
            gas: 1000000,
            gasPrice: '3',
            chainId: '0xaef3', // 44787 as a hex string
            nonce: 7,
          })
          .run()
      })
    })
  })
})
