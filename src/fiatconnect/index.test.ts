import { FetchMock } from 'jest-fetch-mock'
import { Network } from '@fiatconnect/fiatconnect-types'
jest.mock('src/pincode/authentication')

import { CICOFlow } from 'src/fiatExchanges/utils'
import { LocalCurrencyCode } from 'src/localCurrency/consts'
import { CiCoCurrency } from 'src/utils/currencies'
import Logger from 'src/utils/Logger'
import {
  mockAccount,
  mockFiatConnectProviderInfo,
  mockFiatConnectQuotes,
  mockGetFiatConnectQuotesResponse,
} from 'test/values'
import {
  fetchFiatConnectQuotes,
  FetchQuotesInput,
  FiatConnectProviderInfo,
  getFiatConnectProviders,
  getFiatConnectQuotes,
  QuotesInput,
  loginWithFiatConnectProvider,
  getSigningFunction,
} from './index'
import { FiatConnectClient } from '@fiatconnect/fiatconnect-sdk'
import { KeychainWallet } from 'src/web3/KeychainWallet'
import { getPassword } from 'src/pincode/authentication'

jest.mock('src/utils/Logger', () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: {
    info: jest.fn(),
    error: jest.fn(),
  },
}))

jest.mock('src/web3/KeychainWallet', () => {
  return {
    KeychainWallet: () => {
      return jest.fn(() => {
        return {}
      })
    },
  }
})

jest.mock('@fiatconnect/fiatconnect-sdk', () => {
  return {
    FiatConnectClient: () => {
      return jest.fn(() => {
        return {}
      })
    },
  }
})

describe('FiatConnect helpers', () => {
  const mockFetch = fetch as FetchMock
  beforeEach(() => {
    mockFetch.resetMocks()
    jest.clearAllMocks()
  })
  describe('getFiatConnectProviders', () => {
    it('Gives list of providers on success', async () => {
      const fakeProviderInfo: FiatConnectProviderInfo = {
        id: 'fake-provider',
        baseUrl: 'https://fake-provider.valoraapp.com',
        providerName: 'fake provider name',
        imageUrl: 'https://fake-icon.valoraapp.com',
      }
      mockFetch.mockResponseOnce(JSON.stringify({ providers: [fakeProviderInfo] }), { status: 200 })
      const providers = await getFiatConnectProviders(mockAccount)
      expect(providers).toMatchObject([fakeProviderInfo])
    })
    it('Gives empty list and logs error on failure', async () => {
      mockFetch.mockResponseOnce(JSON.stringify({ providers: [] }), { status: 500 })
      const providers = await getFiatConnectProviders(mockAccount)
      expect(providers).toEqual([])
      expect(Logger.error).toHaveBeenCalled()
    })
  })

  describe('fetchFiatConnectQuotes', () => {
    const fetchQuotesInput: FetchQuotesInput = {
      fiatConnectCashInEnabled: false,
      fiatConnectCashOutEnabled: false,
      account: mockAccount,
      flow: CICOFlow.CashIn,
      localCurrency: LocalCurrencyCode.USD,
      digitalAsset: CiCoCurrency.CUSD,
      cryptoAmount: 100,
      country: 'US',
    }
    it('returns an empty array if fiatConnectCashInEnabled is false with cash in', async () => {
      const quotes = await fetchFiatConnectQuotes(fetchQuotesInput)
      expect(quotes).toHaveLength(0)
    })
    it('returns an empty array if fiatConnectCashOutEnabled is false with cash out', async () => {
      const quotes = await fetchFiatConnectQuotes({ ...fetchQuotesInput, flow: CICOFlow.CashOut })
      expect(quotes).toHaveLength(0)
    })
  })

  describe('getFiatConnectQuotes', () => {
    const getQuotesInput: QuotesInput = {
      flow: CICOFlow.CashIn,
      localCurrency: LocalCurrencyCode.USD,
      digitalAsset: CiCoCurrency.CUSD,
      cryptoAmount: 100,
      country: 'US',
      fiatConnectProviders: mockFiatConnectProviderInfo,
    }
    it('returns an empty array if fiatType is not supported', async () => {
      const quotes = await getFiatConnectQuotes({
        ...getQuotesInput,
        localCurrency: LocalCurrencyCode.CAD,
      })
      expect(quotes).toHaveLength(0)
    })
    it('returns an empty array if fetch fails', async () => {
      mockFetch.mockResponseOnce(JSON.stringify({ quotes: [] }), { status: 500 })
      const quotes = await getFiatConnectQuotes(getQuotesInput)
      expect(quotes).toEqual([])
      expect(Logger.error).toHaveBeenCalled()
    })
    it('returns quotes', async () => {
      mockFetch.mockResponseOnce(JSON.stringify({ quotes: mockGetFiatConnectQuotesResponse }), {
        status: 200,
      })
      const quotes = await getFiatConnectQuotes(getQuotesInput)
      expect(quotes).toEqual([mockFiatConnectQuotes[1], mockFiatConnectQuotes[0]])
      expect(Logger.error).not.toHaveBeenCalled()
    })
  })
  describe('getSigningFunction', () => {
    const wallet = new KeychainWallet({
      address: 'some address',
      createdAt: new Date(),
    })
    beforeEach(() => {
      wallet.getAccounts = jest.fn().mockReturnValue(['fakeAccount'])
      wallet.isAccountUnlocked = jest.fn().mockReturnValue(true)
      wallet.signPersonalMessage = jest.fn().mockResolvedValue('some signed message')
      wallet.unlockAccount = jest.fn().mockResolvedValue(undefined)
    })
    it('returns a signing function that signs a message', async () => {
      const signingFunction = getSigningFunction(wallet)
      const signedMessage = await signingFunction('test')
      expect(wallet.signPersonalMessage).toHaveBeenCalled()
      expect(wallet.unlockAccount).not.toHaveBeenCalled()
      expect(signedMessage).toEqual('some signed message')
    })
    it('returns a signing function that attempts to unlock accout if locked', async () => {
      wallet.isAccountUnlocked = jest.fn().mockReturnValue(false)
      const signingFunction = getSigningFunction(wallet)
      const signedMessage = await signingFunction('test')
      expect(wallet.signPersonalMessage).toHaveBeenCalled()
      expect(wallet.unlockAccount).toHaveBeenCalled()
      expect(getPassword).toHaveBeenCalled()
      expect(signedMessage).toEqual('some signed message')
    })
  })
  describe('loginWithFiatConnectProvider', () => {
    const wallet = new KeychainWallet({
      address: 'some address',
      createdAt: new Date(),
    })
    const fiatConnectClient = new FiatConnectClient(
      {
        baseUrl: 'some url',
        network: Network.Alfajores,
        accountAddress: 'some address',
      },
      (message: string): Promise<string> => {
        return Promise.resolve(message)
      }
    )

    beforeEach(() => {
      wallet.getAccounts = jest.fn().mockReturnValue(['fakeAccount'])
      wallet.isAccountUnlocked = jest.fn().mockReturnValue(true)
      wallet.unlockAccount = jest.fn().mockResolvedValue(undefined)

      fiatConnectClient.isLoggedIn = jest.fn().mockReturnValue(true)
      fiatConnectClient.login = jest.fn().mockResolvedValue({ isOk: true, value: 'success' })
    })
    it('Does not attempt to login if already logged in', async () => {
      await expect(loginWithFiatConnectProvider(wallet, fiatConnectClient)).resolves.toBeUndefined()
      expect(fiatConnectClient.login).not.toHaveBeenCalled()
    })
    it('Forces login attempt if already logged in', async () => {
      await expect(
        loginWithFiatConnectProvider(wallet, fiatConnectClient, true)
      ).resolves.toBeUndefined()
      expect(fiatConnectClient.login).toHaveBeenCalled()
    })
    it('Attempts to login and prompts PIN when account is locked', async () => {
      wallet.isAccountUnlocked = jest.fn().mockReturnValue(false)
      fiatConnectClient.isLoggedIn = jest.fn().mockReturnValue(false)
      await expect(loginWithFiatConnectProvider(wallet, fiatConnectClient)).resolves.toBeUndefined()
      expect(wallet.unlockAccount).toHaveBeenCalled()
      expect(getPassword).toHaveBeenCalled()
      expect(fiatConnectClient.login).toHaveBeenCalled()
    })
    it('Attempts to login without prompting for PIN when account is unlocked', async () => {
      wallet.isAccountUnlocked = jest.fn().mockReturnValue(true)
      fiatConnectClient.isLoggedIn = jest.fn().mockReturnValue(false)
      await expect(loginWithFiatConnectProvider(wallet, fiatConnectClient)).resolves.toBeUndefined()
      expect(wallet.unlockAccount).not.toHaveBeenCalled()
      expect(getPassword).not.toHaveBeenCalled()
      expect(fiatConnectClient.login).toHaveBeenCalled()
    })
    it('Throws an error when login fails', async () => {
      wallet.isAccountUnlocked = jest.fn().mockReturnValue(true)
      fiatConnectClient.isLoggedIn = jest.fn().mockReturnValue(false)
      fiatConnectClient.login = jest.fn().mockResolvedValue({
        isOk: false,
        error: new Error('some error'),
      })
      await expect(loginWithFiatConnectProvider(wallet, fiatConnectClient)).rejects.toThrow()
    })
  })
})
