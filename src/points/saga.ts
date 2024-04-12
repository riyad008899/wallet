import { nextPageUrlSelector } from 'src/points/selectors'
import {
  PointsConfig,
  getHistoryError,
  getHistoryStarted,
  getHistorySucceeded,
  getPointsConfigError,
  getPointsConfigStarted,
  getPointsConfigSucceeded,
} from 'src/points/slice'
import { GetHistoryResponse, isPointsActivity } from 'src/points/types'
import Logger from 'src/utils/Logger'
import { fetchWithTimeout } from 'src/utils/fetchWithTimeout'
import { safely } from 'src/utils/safely'
import networkConfig from 'src/web3/networkConfig'
import { walletAddressSelector } from 'src/web3/selectors'
import { call, put, select, spawn, takeLeading } from 'typed-redux-saga'

const TAG = 'Points/saga'

export async function fetchHistory(
  address: string,
  url?: string | null
): Promise<GetHistoryResponse> {
  const response = await fetchWithTimeout(
    url ?? `${networkConfig.getPointsHistoryUrl}?` + new URLSearchParams({ address }),
    {
      method: 'GET',
    }
  )
  if (response.ok) {
    return response.json() as Promise<GetHistoryResponse>
  } else {
    throw new Error(await response.text())
  }
}

export function* getHistory({ payload: params }: ReturnType<typeof getHistoryStarted>) {
  const walletAddress = yield* select(walletAddressSelector)
  if (!walletAddress) {
    Logger.error(TAG, 'No wallet address found when fetching points history')
    yield* put(getHistoryError())
    return
  }

  const url = params.fromPage ? yield* select(nextPageUrlSelector) : undefined

  try {
    const history = yield* call(fetchHistory, walletAddress, url)
    yield* put(
      getHistorySucceeded({
        appendHistory: params.fromPage,
        newPointsHistory: history.data,
        nextPageUrl: history.hasNextPage ? history.nextPageUrl : null,
      })
    )
  } catch (e) {
    Logger.error(TAG, 'Error fetching points history', e)
    yield* put(getHistoryError())
  }
}

export function* getPointsConfig() {
  yield* put(getPointsConfigStarted())

  try {
    const response = yield* call(fetchWithTimeout, networkConfig.getPointsConfigUrl, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch points config: ${response.status} ${response.statusText}`)
    }
    const { config }: { config: PointsConfig } = yield* call([response, 'json'])

    // remove any activities that are not supported by app and have no points value
    const supportedActivities: PointsConfig = {
      activitiesById: {},
    }
    Object.entries(config.activitiesById).forEach(([activityId, activityMetadata]) => {
      if (isPointsActivity(activityId) && activityMetadata.points > 0) {
        supportedActivities.activitiesById[activityId] = activityMetadata
      }
    })
    if (Object.keys(supportedActivities.activitiesById).length === 0) {
      throw new Error('No supported activities found in points config')
    }

    yield* put(getPointsConfigSucceeded(supportedActivities))
  } catch (e) {
    Logger.error(TAG, 'Error fetching points config', e)
    yield* put(getPointsConfigError())
  }
}

function* watchGetHistory() {
  yield* takeLeading(getHistoryStarted.type, safely(getHistory))
}

export function* pointsSaga() {
  yield* spawn(watchGetHistory)
  yield* spawn(getPointsConfig)
}
