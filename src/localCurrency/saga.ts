import BigNumber from 'bignumber.js'
import { Actions as AccountActions } from 'src/account/actions'
import { Actions as AppActions } from 'src/app/actions'
import {
  Actions,
  fetchCurrentRate,
  fetchCurrentRateFailure,
  fetchCurrentRateSuccess,
} from 'src/localCurrency/actions'
import { LocalCurrencyCode } from 'src/localCurrency/consts'
import { getLocalCurrencyCode } from 'src/localCurrency/selectors'
import Logger from 'src/utils/Logger'
import { fetchWithTimeout } from 'src/utils/fetchWithTimeout'
import { safely } from 'src/utils/safely'
import networkConfig from 'src/web3/networkConfig'
import { call, put, select, spawn, take, takeLatest } from 'typed-redux-saga'

const TAG = 'localCurrency/saga'

export async function fetchExchangeRate(localCurrencyCode: string): Promise<string> {
  if (localCurrencyCode === LocalCurrencyCode.USD) {
    // The exchange rate is returned against USD, so for USD it is always 1
    return '1'
  }

  const url = new URL(networkConfig.getExchangeRateUrl)
  url.searchParams.set('localCurrencyCode', localCurrencyCode)
  const response = await fetchWithTimeout(url.toString())

  if (!response.ok) {
    throw new Error(`Failed to fetch exchange rate: ${response.status} ${response.statusText}`)
  }

  const body = (await response.json()) as { rate?: string }

  if (body.rate === undefined || new BigNumber(body.rate).isNaN()) {
    throw new Error(`Invalid response data ${JSON.stringify(body)}`)
  }

  Logger.info(TAG, `Fetched exchange rate for ${localCurrencyCode}: ${body.rate}`)
  return body.rate
}

export function* fetchLocalCurrencyRateSaga() {
  try {
    const localCurrencyCode: LocalCurrencyCode | null = yield* select(getLocalCurrencyCode)
    if (!localCurrencyCode) {
      throw new Error("Can't fetch local currency rate without a currency code")
    }
    const usdToLocalRate = yield* call(fetchExchangeRate, localCurrencyCode)
    yield* put(fetchCurrentRateSuccess(localCurrencyCode, usdToLocalRate, Date.now()))
  } catch (error) {
    Logger.error(`${TAG}@fetchLocalCurrencyRateSaga`, 'Failed to fetch local currency rate', error)
    yield* put(fetchCurrentRateFailure())
  }
}

export function* watchFetchCurrentRate() {
  yield* takeLatest(Actions.FETCH_CURRENT_RATE, safely(fetchLocalCurrencyRateSaga))
}

export function* watchSelectPreferredCurrency() {
  yield* put(fetchCurrentRate())
  while (true) {
    yield* take([
      Actions.SELECT_PREFERRED_CURRENCY,
      AccountActions.SET_PHONE_NUMBER,
      AppActions.PHONE_NUMBER_VERIFICATION_COMPLETED,
    ])
    yield* put(fetchCurrentRate())
  }
}

export function* localCurrencySaga() {
  yield* spawn(watchFetchCurrentRate)
  yield* spawn(watchSelectPreferredCurrency)
}
