import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links'
import { WEB_LINK } from 'src/brandingConfig'
import {
  APP_STORE_ID as appStoreId,
  DYNAMIC_LINK_DOMAIN_URI_PREFIX as baseURI,
  APP_BUNDLE_ID as bundleId,
} from 'src/config'
import { NetworkId } from 'src/transactions/types'

const commonDynamicLinkParams: Omit<FirebaseDynamicLinksTypes.DynamicLinkParameters, 'link'> = {
  domainUriPrefix: baseURI,
  ios: {
    appStoreId,
    bundleId,
  },
  android: {
    packageName: bundleId,
  },
}

export async function createInviteLink(address: string) {
  return dynamicLinks().buildShortLink({
    ...commonDynamicLinkParams,
    link: `${WEB_LINK}share/${address}`,
  })
}

export async function createJumpstartLink(privateKey: string, networkId: NetworkId) {
  return dynamicLinks().buildLink({
    ...commonDynamicLinkParams,
    link: `${WEB_LINK}jumpstart/${privateKey}/${networkId}`,
  })
}
