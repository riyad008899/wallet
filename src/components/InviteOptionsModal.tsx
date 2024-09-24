import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Share } from 'react-native'
import AppAnalytics from 'src/analytics/AppAnalytics'
import { InviteEvents } from 'src/analytics/Events'
import i18n from 'src/i18n'
import InviteModal from 'src/invite/InviteModal'
import { useShareUrl } from 'src/invite/hooks'
import { Recipient, getDisplayName } from 'src/recipients/recipient'
import { useSelector } from 'src/redux/hooks'
import { inviteRewardsActiveSelector, inviteRewardsTypeSelector } from 'src/send/selectors'
import { InviteRewardsType } from 'src/send/types'
import { getDynamicConfigParams } from 'src/statsig'
import { DynamicConfigs } from 'src/statsig/constants'
import { StatsigDynamicConfigs } from 'src/statsig/types'
import getPhoneHash from 'src/utils/getPhoneHash'

interface Props {
  recipient: Recipient
  onClose(): void
}

const InviteOptionsModal = ({ recipient, onClose }: Props) => {
  const { t } = useTranslation()
  const link = useShareUrl()
  const inviteRewardsActive = useSelector(inviteRewardsActiveSelector)
  const inviteRewardsType = useSelector(inviteRewardsTypeSelector)
  const { links } = getDynamicConfigParams(DynamicConfigs[StatsigDynamicConfigs.APP_CONFIG])

  const handleShareInvite = async () => {
    if (link) {
      await Share.share({ message })
      AppAnalytics.track(InviteEvents.invite_with_share, {
        phoneNumberHash: recipient.e164PhoneNumber ? getPhoneHash(recipient.e164PhoneNumber) : null,
      })
    }
  }

  const handleClose = () => {
    AppAnalytics.track(InviteEvents.invite_with_share_dismiss)
    onClose()
  }

  /**
   * As of now, TS type of i18next doesn't include "defaultVariables" (e.g. "appName") into the
   * interpolated type so every translation that will use any values from "defaultVariables" will
   * be required to provide them explicitly.
   */

  //@ts-expect-error
  let title = i18n.t('inviteModal.title', { contactName: getDisplayName(recipient, t) })
  let descriptionI18nKey = 'inviteModal.body'
  //@ts-expect-error
  let message = t('inviteModal.shareMessage', { link })
  let helpLink = ''

  if (inviteRewardsActive) {
    switch (inviteRewardsType) {
      case InviteRewardsType.NFT:
        //@ts-expect-error
        title = t('inviteModal.rewardsActive.title', { contactName: getDisplayName(recipient, t) })
        descriptionI18nKey = 'inviteModal.rewardsActive.body'
        //@ts-expect-error
        message = t('inviteWithRewards', { link })
        helpLink = links.inviteRewardsNftsLearnMore
        break
      case InviteRewardsType.CUSD:
        //@ts-expect-error
        title = t('inviteModal.rewardsActiveCUSD.title', {
          contactName: getDisplayName(recipient, t),
        })
        descriptionI18nKey = 'inviteModal.rewardsActiveCUSD.body'
        //@ts-expect-error
        message = t('inviteWithRewardsCUSD', { link })
        helpLink = links.inviteRewardsStableTokenLearnMore
        break
    }
  }

  return (
    <InviteModal
      title={title}
      descriptionI18nKey={descriptionI18nKey}
      contactName={getDisplayName(recipient, t)}
      buttonLabel={t('inviteModal.sendInviteButtonLabel')}
      disabled={!link}
      helpLink={helpLink}
      onClose={handleClose}
      onShareInvite={handleShareInvite}
    />
  )
}

export default InviteOptionsModal
