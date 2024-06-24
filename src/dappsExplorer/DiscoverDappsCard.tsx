import React, { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { RefreshControl, SectionList, SectionListProps, StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DappExplorerEvents } from 'src/analytics/Events'
import ValoraAnalytics from 'src/analytics/ValoraAnalytics'
import {
  dappsListLoadingSelector,
  mostPopularDappsSelector,
  favoriteDappsSelector,
} from 'src/dapps/selectors'
import { fetchDappsList } from 'src/dapps/slice'
import { ActiveDapp, Dapp, DappSection } from 'src/dapps/types'
import DappCard from 'src/dappsExplorer/DappCard'
import useOpenDapp from 'src/dappsExplorer/useOpenDapp'
import { currentLanguageSelector } from 'src/i18n/selectors'
import { Screens } from 'src/navigator/Screens'
import { useDispatch, useSelector } from 'src/redux/hooks'
import { Colors } from 'src/styles/colors'
import fontStyles, { typeScale } from 'src/styles/fonts'
import { Spacing } from 'src/styles/styles'
import TextButton from 'src/components/TextButton'
import { navigate } from 'src/navigator/NavigationService'

const AnimatedSectionList =
  Animated.createAnimatedComponent<SectionListProps<Dapp, SectionData>>(SectionList)

interface SectionData {
  data: Dapp[]
  sectionName: string
  dappSection: DappSection
  testID: string
}

const MAX_DAPPS = 5

function DiscoverDappsCard() {
  const { t } = useTranslation()

  const insets = useSafeAreaInsets()

  const sectionListRef = useRef<SectionList>(null)

  const language = useSelector(currentLanguageSelector)
  const dispatch = useDispatch()
  const loading = useSelector(dappsListLoadingSelector)
  const favoriteDapps = useSelector(favoriteDappsSelector)
  const mostPopularDapps = useSelector(mostPopularDappsSelector)

  const { onSelectDapp } = useOpenDapp()

  useEffect(() => {
    dispatch(fetchDappsList())
    ValoraAnalytics.track(DappExplorerEvents.dapp_screen_open)
  }, [])

  const onPressDapp = (dapp: ActiveDapp, index: number) => {
    onSelectDapp(dapp, {
      position: 1 + index,
      fromScreen: Screens.TabDiscover,
    })
  }

  const sections: SectionData[] = useMemo(() => {
    const favoriteDappIds = favoriteDapps.map((dapp) => dapp.id)
    let mostPopularSection: SectionData[] = []
    if (favoriteDapps.length <= 2) {
      mostPopularSection = [
        {
          data: mostPopularDapps
            .filter((dapp) => !favoriteDappIds.includes(dapp.id))
            .slice(0, MAX_DAPPS - favoriteDapps.length),
          sectionName: t('dappsScreen.mostPopularDapps').toLocaleUpperCase(language ?? 'en-US'),
          dappSection: DappSection.MostPopular,
          testID: 'DiscoverDappsCard/MostPopularSection',
        },
      ]
    }
    const favoritesSection =
      favoriteDapps.length > 0
        ? [
            {
              data: favoriteDapps.slice(0, MAX_DAPPS),
              sectionName: t('dappsScreen.favoriteDapps').toLocaleUpperCase(language ?? 'en-US'),
              dappSection: DappSection.FavoritesDappScreen,
              testID: 'DiscoverDappsCard/FavoritesSection',
            },
          ]
        : []

    return [...favoritesSection, ...mostPopularSection]
  }, [favoriteDapps, mostPopularDapps])

  const onPressExploreAll = () => {
    ValoraAnalytics.track(DappExplorerEvents.dapp_explore_all)
    navigate(Screens.DappScreen)
  }

  if (!sections.length) return null

  return (
    <View testID="DiscoverDappsCard" style={styles.safeAreaContainer}>
      <AnimatedSectionList
        refreshControl={
          <RefreshControl
            tintColor={Colors.primary}
            colors={[Colors.primary]}
            style={styles.refreshControl}
            refreshing={loading}
            onRefresh={() => dispatch(fetchDappsList())}
          />
        }
        // TODO: resolve type error
        // @ts-expect-error
        ref={sectionListRef}
        scrollEnabled={false}
        ListHeaderComponent={<Text style={styles.title}>{t('dappsScreen.exploreDapps')}</Text>}
        ListFooterComponent={
          <TextButton style={styles.footer} onPress={onPressExploreAll}>
            {t('dappsScreen.exploreAll')}
          </TextButton>
        }
        contentContainerStyle={[
          styles.sectionListContentContainer,
          { paddingBottom: Math.max(insets.bottom, Spacing.Regular16) },
        ]}
        sections={sections}
        renderItem={({ item: dapp, index, section }) => {
          return (
            <DappCard
              dapp={dapp}
              onPressDapp={() => onPressDapp({ ...dapp, openedFrom: section.dappSection }, index)}
              disableFavorite={true}
              testID={`${section.testID}/DappCard`}
            />
          )
        }}
        renderSectionHeader={({ section: { sectionName, testID } }) => {
          return (
            <Text testID={`${testID}/Title`} style={styles.sectionTitle}>
              {sectionName}
            </Text>
          )
        }}
        keyExtractor={(dapp) => dapp.id}
        stickySectionHeadersEnabled={false}
        testID="DAppsExplorerScreen/DiscoverDappsCard"
        ListFooterComponentStyle={styles.listFooterComponent}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    padding: Spacing.Regular16,
    paddingBottom: 0,
    gap: Spacing.Smallest8,
    borderColor: Colors.gray2,
    borderWidth: 1,
    borderRadius: Spacing.Smallest8,
  },
  sectionListContentContainer: {
    padding: Spacing.Regular16,
    flexGrow: 1,
  },
  refreshControl: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    ...fontStyles.label,
    paddingTop: Spacing.Small12,
    color: Colors.gray4,
  },
  listFooterComponent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Spacing.Regular16,
  },
  footer: {
    ...typeScale.labelSemiBoldXSmall,
    flex: 1,
    color: Colors.primary,
  },
  title: {
    ...typeScale.titleMedium,
    color: Colors.black,
    marginBottom: Spacing.Large32,
  },
})

export default DiscoverDappsCard
