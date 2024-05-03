import aavePool from 'src/abis/AavePool'
import { getAavePoolInfo } from 'src/earn/poolInfo'
import { Network } from 'src/transactions/types'
import { publicClient } from 'src/viem'
import networkConfig from 'src/web3/networkConfig'

describe('poolInfo', () => {
  it('fetches poolInfo from contract', async () => {
    jest.spyOn(publicClient[Network.Arbitrum], 'readContract').mockResolvedValue({
      currentLiquidityRate: BigInt(1e27 * 0.036),
    })

    const result = await getAavePoolInfo('0x1234')

    expect(result).toEqual({ apy: 0.0366558430938988 })
    expect(publicClient[Network.Arbitrum].readContract).toHaveBeenCalledWith({
      abi: aavePool,
      address: networkConfig.arbAaveContractAddress,
      functionName: 'getReserveData',
      args: ['0x1234'],
    })
  })
})
