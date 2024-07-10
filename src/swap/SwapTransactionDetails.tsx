import BigNumber from 'bignumber.js'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { SwapEvents } from 'src/analytics/Events'
import { SwapShowInfoType } from 'src/analytics/Properties'
import ValoraAnalytics from 'src/analytics/ValoraAnalytics'
import { BottomSheetRefType } from 'src/components/BottomSheet'
import { formatValueToDisplay } from 'src/components/TokenDisplay'
import Touchable from 'src/components/Touchable'
import InfoIcon from 'src/icons/InfoIcon'
import { getLocalCurrencySymbol, usdToLocalCurrencyRateSelector } from 'src/localCurrency/selectors'
import { useSelector } from 'src/redux/hooks'
import colors from 'src/styles/colors'
import { typeScale } from 'src/styles/fonts'
import { Spacing } from 'src/styles/styles'
import { SwapFeeAmount } from 'src/swap/types'
import { TokenBalance } from 'src/tokens/slice'

interface Props {
  exchangeRateInfoBottomSheetRef: React.RefObject<BottomSheetRefType>
  feeInfoBottomSheetRef: React.RefObject<BottomSheetRefType>
  slippageInfoBottomSheetRef: React.RefObject<BottomSheetRefType>
  estimatedDurationBottomSheetRef: React.RefObject<BottomSheetRefType>
  slippagePercentage: string
  fromToken?: TokenBalance
  toToken?: TokenBalance
  exchangeRatePrice?: string
  swapAmount?: BigNumber
  fetchingSwapQuote: boolean
  estimatedDurationInSeconds?: number
  appFee?: SwapFeeAmount
  crossChainFee?: SwapFeeAmount
  networkFee?: SwapFeeAmount
}

function getFormattedFees({
  usdToLocalCurrencyRate,
  localCurrencySymbol,
  feeComponents,
  errorFallback,
}: {
  usdToLocalCurrencyRate: string | null
  localCurrencySymbol: string | null
  feeComponents: (SwapFeeAmount | undefined)[]
  errorFallback: string
}) {
  let estimatedFeeInLocalCurrency = new BigNumber(0)
  const estimatedFeeInTokenUnits: string[] = []

  for (const feeComponent of feeComponents) {
    if (feeComponent) {
      if (!feeComponent.token) {
        // if any fee component is missing token info, we cannot display the
        // token symbol or fiat value. In this case it's better to return an
        // error, rather than showing a total fee that is cheaper due to missing
        // components.
        return errorFallback
      }

      if (usdToLocalCurrencyRate && localCurrencySymbol && feeComponent.token.priceUsd) {
        estimatedFeeInLocalCurrency = estimatedFeeInLocalCurrency.plus(
          feeComponent.amount
            .multipliedBy(feeComponent.token.priceUsd)
            .multipliedBy(usdToLocalCurrencyRate)
        )
      } else {
        estimatedFeeInTokenUnits.push(
          `${formatValueToDisplay(feeComponent.amount)} ${feeComponent.token.symbol}`
        )
      }
    }
  }

  const fiatFeeString = estimatedFeeInLocalCurrency.gt(0)
    ? `${localCurrencySymbol}${formatValueToDisplay(estimatedFeeInLocalCurrency)}`
    : ''
  const tokenFeeString = estimatedFeeInTokenUnits.join(' + ')
  return `${fiatFeeString}${fiatFeeString && tokenFeeString ? ' + ' : ''}${tokenFeeString}`
}

function LabelWithInfo({
  label,
  onPress,
  testID,
}: {
  label: string
  onPress: () => void
  testID: string
}) {
  return (
    <Touchable style={styles.touchableRow} onPress={onPress} testID={testID}>
      <>
        <Text style={styles.label}>{label}</Text>
        <InfoIcon size={14} color={colors.gray4} testID={`${testID}/Icon`} />
      </>
    </Touchable>
  )
}

function ValueWithLoading({ value, isLoading }: { value: React.ReactNode; isLoading: boolean }) {
  return (
    <View style={styles.valueContainer}>
      <Text style={[styles.value, { opacity: isLoading ? 0 : 1 }]}>{value}</Text>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <SkeletonPlaceholder
            borderRadius={100}
            backgroundColor={colors.gray2}
            highlightColor={colors.white}
            testID="SwapTransactionDetails/ExchangeRate/Loader"
          >
            <View style={styles.loader} />
          </SkeletonPlaceholder>
        </View>
      )}
    </View>
  )
}

export function SwapTransactionDetails({
  feeInfoBottomSheetRef,
  slippageInfoBottomSheetRef,
  estimatedDurationBottomSheetRef,
  slippagePercentage,
  fromToken,
  toToken,
  exchangeRatePrice,
  exchangeRateInfoBottomSheetRef,
  fetchingSwapQuote,
  appFee,
  estimatedDurationInSeconds,
  crossChainFee,
  networkFee,
}: Props) {
  const { t } = useTranslation()
  const usdToLocalCurrencyRate = useSelector(usdToLocalCurrencyRateSelector)
  const localCurrencySymbol = useSelector(getLocalCurrencySymbol)
  const formattedFeesString = getFormattedFees({
    usdToLocalCurrencyRate,
    localCurrencySymbol,
    feeComponents: [appFee, crossChainFee, networkFee],
    errorFallback: t('swapScreen.transactionDetails.feesCalculationError'),
  })

  const placeholder = '-'
  return (
    <View style={styles.container} testID="SwapTransactionDetails">
      <View style={styles.row} testID="SwapTransactionDetails/ExchangeRate">
        <LabelWithInfo
          onPress={() => {
            ValoraAnalytics.track(SwapEvents.swap_show_info, {
              type: SwapShowInfoType.EXCHANGE_RATE,
            })
            exchangeRateInfoBottomSheetRef.current?.snapToIndex(0)
          }}
          label={t('swapScreen.transactionDetails.exchangeRate')}
          testID="SwapTransactionDetails/ExchangeRate/MoreInfo"
        />
        <ValueWithLoading
          isLoading={fetchingSwapQuote}
          value={
            fromToken && toToken && exchangeRatePrice
              ? `1 ${fromToken.symbol} ≈ ${new BigNumber(exchangeRatePrice).toFormat(5, BigNumber.ROUND_DOWN)} ${
                  toToken.symbol
                }`
              : placeholder
          }
        />
      </View>
      <View style={styles.row}>
        <LabelWithInfo
          onPress={() => {
            ValoraAnalytics.track(SwapEvents.swap_show_info, {
              type: SwapShowInfoType.FEES,
            })
            feeInfoBottomSheetRef.current?.snapToIndex(0)
          }}
          label={t('swapScreen.transactionDetails.fees')}
          testID="SwapTransactionDetails/Fees/MoreInfo"
        />
        <ValueWithLoading
          isLoading={fetchingSwapQuote}
          value={formattedFeesString ? formattedFeesString : placeholder}
        />
      </View>
      {!!estimatedDurationInSeconds && (
        <View style={styles.row} testID="SwapTransactionDetails/EstimatedDuration">
          <LabelWithInfo
            onPress={() => {
              ValoraAnalytics.track(SwapEvents.swap_show_info, {
                type: SwapShowInfoType.ESTIMATED_DURATION,
              })
              estimatedDurationBottomSheetRef.current?.snapToIndex(0)
            }}
            label={t('swapScreen.transactionDetails.estimatedTransactionTime')}
            testID="SwapTransactionDetails/EstimatedDuration/MoreInfo"
          />
          <ValueWithLoading
            isLoading={fetchingSwapQuote}
            value={t('swapScreen.transactionDetails.estimatedTransactionTimeInMinutes', {
              minutes: Math.ceil(estimatedDurationInSeconds / 60),
            })}
          />
        </View>
      )}

      <View style={styles.row} testID="SwapTransactionDetails/Slippage">
        <LabelWithInfo
          onPress={() => {
            ValoraAnalytics.track(SwapEvents.swap_show_info, {
              type: SwapShowInfoType.SLIPPAGE,
            })
            slippageInfoBottomSheetRef.current?.snapToIndex(0)
          }}
          label={t('swapScreen.transactionDetails.slippagePercentage')}
          testID="SwapTransactionDetails/Slippage/MoreInfo"
        />
        <Text style={styles.value}>{`${slippagePercentage}%`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.Regular16,
    borderWidth: 1,
    borderColor: colors.gray2,
    borderRadius: 12,
    gap: Spacing.Regular16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.Small12,
  },
  touchableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  value: {
    ...typeScale.bodySmall,
    color: colors.black,
    textAlign: 'right',
  },
  label: {
    ...typeScale.bodySmall,
    color: colors.gray4,
    marginRight: Spacing.Tiny4,
  },
  loaderContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  loader: {
    height: '100%',
    width: '100%',
  },
})

export default SwapTransactionDetails
