import { fireEvent, render } from '@testing-library/react-native'
import BigNumber from 'bignumber.js'
import React from 'react'
import { Provider } from 'react-redux'
import { navigate } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import SwapTransactionDetailsOld, { SwapTransactionDetails } from 'src/swap/SwapTransactionDetails'
import { QuoteResult } from 'src/swap/types'
import { createMockStore } from 'test/utils'
import {
  mockCeloTokenBalance,
  mockCeloTokenId,
  mockCusdTokenBalance,
  mockCusdTokenId,
  mockTokenBalances,
} from 'test/values'

describe('SwapTransactionDetailsOld', () => {
  const defaultProps = {
    quote: null,
    networkFeeInfoBottomSheetRef: { current: null },
    slippageInfoBottomSheetRef: { current: null },
    exchangeRateInfoBottomSheetRef: { current: null },
    appFeeInfoBottomSheetRef: { current: null },
    feeTokenId: 'someId',
    slippagePercentage: '0.5',
    fetchingSwapQuote: false,
  }
  it('should render the correct exchange rate and estimated value', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          fromToken={{
            ...mockTokenBalances[mockCusdTokenId],
            lastKnownPriceUsd: null,
            balance: BigNumber('10'),
            priceUsd: BigNumber('1'),
          }}
          toToken={mockCeloTokenBalance}
          exchangeRatePrice="0.5837"
          swapAmount={BigNumber('1')}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.exchangeRate')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/ExchangeRate')).toHaveTextContent(
      '1 cUSD ≈ 0.58370 CELO'
    )
    expect(getByTestId('SwapTransactionDetails/ExchangeRate/MoreInfo/Icon')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/ExchangeRate/MoreInfo')).not.toBeDisabled()
  })

  it('should render correctly without the fromToken and fees', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld {...defaultProps} />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.estimatedNetworkFee')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/EstimatedNetworkFee')).toHaveTextContent('-')
    expect(queryByTestId('SwapTransactionDetails/EstimatedNetworkFee/MoreInfo')).toBeTruthy()

    expect(getByText('swapScreen.transactionDetails.maxNetworkFee')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/MaxNetworkFee')).toHaveTextContent('-')
    expect(queryByTestId('SwapTransactionDetails/MaxNetworkFee/MoreInfo')).toBeTruthy()
  })

  it('should render correctly with fees', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCeloTokenBalance}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.estimatedNetworkFee')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/EstimatedNetworkFee')).toHaveTextContent(
      '~₱0.00033 (0.00005 CELO)'
    )
    expect(getByTestId('SwapTransactionDetails/EstimatedNetworkFee/MoreInfo/Icon')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/EstimatedNetworkFee/MoreInfo')).not.toBeDisabled()

    expect(getByText('swapScreen.transactionDetails.maxNetworkFee')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/MaxNetworkFee')).toHaveTextContent('0.0001 CELO')
    expect(getByTestId('SwapTransactionDetails/MaxNetworkFee/MoreInfo/Icon')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/MaxNetworkFee/MoreInfo')).not.toBeDisabled()
  })

  it('should render correctly with slippage info', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCeloTokenBalance}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.slippagePercentage')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/Slippage')).toHaveTextContent('0.5%')
    expect(getByTestId('SwapTransactionDetails/Slippage/MoreInfo/Icon')).toBeTruthy()
    expect(getByTestId('SwapTransactionDetails/Slippage/MoreInfo')).not.toBeDisabled()
  })

  it('should render correctly when app fee is >= 0 and token has USD price', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          appFee={{
            amount: new BigNumber(0.02),
            token: mockCeloTokenBalance,
            percentage: new BigNumber(7.7),
          }}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCeloTokenBalance}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.appFee')).toBeTruthy()
    // Content is a bit weird to read here because of the way we render translations in tests
    expect(getByTestId('SwapTransactionDetails/AppFee')).toHaveTextContent(
      'swapScreen.transactionDetails.appFeeValue, {"appFeePercentage":"7.7"}~₱0.130.02 CELO'
    )
  })

  it('should render correctly when app fee is >= 0 and token has no USD price', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          appFee={{
            amount: new BigNumber(0.02),
            token: { ...mockCeloTokenBalance, priceUsd: null },
            percentage: new BigNumber(7.7),
          }}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCeloTokenBalance}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.appFee')).toBeTruthy()
    // Content is a bit weird to read here because of the way we render translations in tests
    expect(getByTestId('SwapTransactionDetails/AppFee')).toHaveTextContent(
      'swapScreen.transactionDetails.appFeeValue, {"context":"withoutPriceUsd","appFeePercentage":"7.7"}0.02 CELO'
    )
  })

  it('should render correctly when app fee is 0', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          appFee={{
            amount: new BigNumber(0),
            token: mockCeloTokenBalance,
            percentage: new BigNumber(0),
          }}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCeloTokenBalance}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.appFee')).toBeTruthy()
    // Content is a bit weird to read here because of the way we render translations in tests
    expect(getByTestId('SwapTransactionDetails/AppFee')).toHaveTextContent(
      'swapScreen.transactionDetails.appFeeValue, {"context":"free","appFeePercentage":"0"}~₱0.000.00 CELO'
    )
  })

  it('should render correctly when app fee is undefined', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetailsOld
          {...defaultProps}
          maxNetworkFee={new BigNumber(0.0001)}
          estimatedNetworkFee={new BigNumber(0.00005)}
          appFee={undefined}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCeloTokenBalance}
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.appFee')).toBeTruthy()
    // Content is a bit weird to read here because of the way we render translations in tests
    expect(getByTestId('SwapTransactionDetails/AppFee')).toHaveTextContent(
      'swapScreen.transactionDetails.appFeeValue, {"context":"placeholder","appFeePercentage":"0"}'
    )
  })
})

describe('SwapTransactionDetails', () => {
  const defaultProps = {
    quote: null,
    estimatedNetworkFee: new BigNumber(0.00005),
    feeTokenId: mockCusdTokenId,
    fetchingSwapQuote: false,
  }

  it('should render null if there are no swap tokens selected', () => {
    const tree = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetails {...defaultProps} />
      </Provider>
    )

    expect(tree.toJSON()).toBeNull()
  })

  it('should render the loaders when fetching the swap quote', () => {
    const { getAllByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetails
          {...defaultProps}
          fetchingSwapQuote={true}
          fromToken={mockCusdTokenBalance}
          toToken={mockCeloTokenBalance}
          exchangeRatePrice="0.5837"
        />
      </Provider>
    )

    expect(getAllByTestId('SwapTransactionDetails/Loader')).toHaveLength(2)
  })

  it('should render the exchange rate, network fee, and cta', () => {
    const expectedExchangeRate = '0.58370' // 5 significant digits
    const expectedFeeInLocalCurrency = '0.00033' // estimatedNetworkFee * priceUsd * local currency to USD exchange rate (0.0005 * 0.5 * 1.33)
    const mockQuoteResult = {
      toTokenId: mockCeloTokenId,
      fromTokenId: mockCusdTokenId,
    }
    const { getByText, queryAllByTestId } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetails
          {...defaultProps}
          quote={mockQuoteResult as QuoteResult}
          feeTokenId={mockCeloTokenId}
          fromToken={{
            ...mockTokenBalances[mockCusdTokenId],
            lastKnownPriceUsd: null,
            balance: BigNumber('10'),
            priceUsd: BigNumber('1'),
          }}
          toToken={mockCeloTokenBalance}
          exchangeRatePrice="0.5837"
        />
      </Provider>
    )

    expect(
      getByText(
        `swapScreen.transactionDetails.approximateExchangeRate, {"fromTokenSymbol":"cUSD","toTokenSymbol":"CELO","exchangeRate":"${expectedExchangeRate}"}`
      )
    ).toBeTruthy()
    expect(
      getByText(
        `swapScreen.transactionDetails.approximateFees, {"localCurrencySymbol":"₱","feeAmountInLocalCurrency":"${expectedFeeInLocalCurrency}"}`
      )
    ).toBeTruthy()
    expect(queryAllByTestId('SwapTransactionDetails/Loader')).toHaveLength(0)

    fireEvent.press(getByText('swapScreen.transactionDetails.viewAllDetailsCta'))

    expect(navigate).toHaveBeenCalledWith(Screens.SwapDetailsScreen, {
      toTokenId: mockCeloTokenId,
      fromTokenId: mockCusdTokenId,
      quote: mockQuoteResult,
    })
  })

  it('should render the total swap fee', () => {
    const expectedFeeInLocalCurrency = '0.027' // sum of network fee, app fee, and cross-chain fee in usd * local currency to USD exchange rate
    const { getByText } = render(
      <Provider store={createMockStore()}>
        <SwapTransactionDetails
          {...defaultProps}
          feeTokenId={mockCeloTokenId}
          fromToken={mockCusdTokenBalance}
          toToken={mockCeloTokenBalance}
          exchangeRatePrice="0.5837"
          appFee={{
            amount: new BigNumber(0.02),
            token: mockCusdTokenBalance,
            percentage: new BigNumber(0.6),
          }}
          estimatedCrossChainFee={new BigNumber(0.1)}
        />
      </Provider>
    )

    expect(
      getByText(
        `swapScreen.transactionDetails.approximateFees, {"localCurrencySymbol":"₱","feeAmountInLocalCurrency":"${expectedFeeInLocalCurrency}"}`
      )
    ).toBeTruthy()
  })

  it.each`
    condition                    | props
    ${'network fee'}             | ${{ estimatedNetworkFee: undefined }}
    ${'network fee token price'} | ${{ feeTokenId: 'someTokenId' }}
    ${'app fee token price'}     | ${{ appFee: { amount: new BigNumber(0.02), token: { ...mockCeloTokenBalance, priceUsd: null }, percentage: new BigNumber(0.6) } }}
    ${'native token price'}      | ${{ estimatedCrossChainFee: new BigNumber(0.1) }}
  `(
    'should render an error if the fee cannot be calculated due to missing $condition',
    ({ props }) => {
      const { getByText } = render(
        <Provider
          store={createMockStore({
            tokens: {
              tokenBalances: {
                ...mockTokenBalances,
                [mockCeloTokenId]: {
                  ...mockCeloTokenBalance,
                  priceUsd: undefined,
                  balance: '10',
                },
              },
            },
          })}
        >
          <SwapTransactionDetails
            {...defaultProps}
            fromToken={mockCusdTokenBalance}
            toToken={mockCeloTokenBalance}
            exchangeRatePrice="0.5837"
            {...props}
          />
        </Provider>
      )

      expect(getByText('swapScreen.transactionDetails.couldNotApproximateFees')).toBeTruthy()
    }
  )

  it('should render an error if the local rate to USD exchange rate is missing', () => {
    const { getByText } = render(
      <Provider
        store={createMockStore({
          localCurrency: {
            usdToLocalRate: null,
          },
        })}
      >
        <SwapTransactionDetails
          {...defaultProps}
          fromToken={mockCusdTokenBalance}
          toToken={mockCeloTokenBalance}
          exchangeRatePrice="0.5837"
        />
      </Provider>
    )

    expect(getByText('swapScreen.transactionDetails.couldNotApproximateFees')).toBeTruthy()
  })
})
