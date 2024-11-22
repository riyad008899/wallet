import { PincodeType, RecoveryPhraseInOnboardingStatus } from 'src/account/reducer'
import { MultichainBetaStatus } from 'src/app/actions'
import { getInitialRoute } from 'src/navigator/initialRoute'
import { Screens } from 'src/navigator/Screens'
import { getFeatureGate } from 'src/statsig'
import { ONBOARDING_FEATURES_ENABLED } from 'src/config'
import { ToggleableOnboardingFeatures } from 'src/onboarding/types'

jest.mock('src/statsig/index')
jest.mock('src/config', () => ({
  ...jest.requireActual('src/config'),
  ONBOARDING_FEATURES_ENABLED: { PhoneVerification: false, CloudBackup: false },
}))

describe('initialRoute', () => {
  const defaultArgs: Parameters<typeof getInitialRoute>[0] = {
    choseToRestoreAccount: false,
    language: 'en',
    acceptedTerms: true,
    pincodeType: PincodeType.CustomPin,
    account: '0x1234',
    hasSeenVerificationNux: true,
    recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.NotStarted,
    multichainBetaStatus: MultichainBetaStatus.OptedOut,
  }

  beforeEach(() => {
    jest.replaceProperty(
      ONBOARDING_FEATURES_ENABLED,
      ToggleableOnboardingFeatures.CloudBackup,
      false
    )
    jest.replaceProperty(
      ONBOARDING_FEATURES_ENABLED,
      ToggleableOnboardingFeatures.PhoneVerification,
      false
    )
    jest.mocked(getFeatureGate).mockReturnValue(false)
  })

  it('returns language screen if no language is set', () => {
    expect(getInitialRoute({ ...defaultArgs, language: null })).toEqual(Screens.Language)
  })

  it('returns welcome screen if not accepted terms', () => {
    expect(getInitialRoute({ ...defaultArgs, acceptedTerms: false })).toEqual(Screens.Welcome)
  })

  it('returns welcome screen if not pincode is unset', () => {
    expect(getInitialRoute({ ...defaultArgs, pincodeType: PincodeType.Unset })).toEqual(
      Screens.Welcome
    )
  })

  it('returns welcome screen if account is null', () => {
    expect(getInitialRoute({ ...defaultArgs, account: null })).toEqual(Screens.Welcome)
  })

  it('returns import wallet screen if account is null and choose to restore account', () => {
    expect(getInitialRoute({ ...defaultArgs, account: null, choseToRestoreAccount: true })).toEqual(
      Screens.ImportWallet
    )
  })

  it('returns import select screen if account is null and choose to restore account and CAB enabled', () => {
    jest.replaceProperty(
      ONBOARDING_FEATURES_ENABLED,
      ToggleableOnboardingFeatures.CloudBackup,
      true
    )
    expect(getInitialRoute({ ...defaultArgs, account: null, choseToRestoreAccount: true })).toEqual(
      Screens.ImportSelect
    )
  })
  it('returns protect wallet if recovery phrase in onboarding seen but not saved', () => {
    expect(
      getInitialRoute({
        ...defaultArgs,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.InProgress,
      })
    ).toEqual(Screens.ProtectWallet)
  })

  it('returns PN verification if not seen verification and verification is enabled', () => {
    jest.replaceProperty(
      ONBOARDING_FEATURES_ENABLED,
      ToggleableOnboardingFeatures.PhoneVerification,
      true
    )
    expect(getInitialRoute({ ...defaultArgs, hasSeenVerificationNux: false })).toEqual(
      Screens.VerificationStartScreen
    )
  })

  it('returns PN verification if not seen verification and saved recovery phrase and verification is enabled', () => {
    jest.replaceProperty(
      ONBOARDING_FEATURES_ENABLED,
      ToggleableOnboardingFeatures.PhoneVerification,
      true
    )
    expect(
      getInitialRoute({
        ...defaultArgs,
        hasSeenVerificationNux: false,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.Completed,
      })
    ).toEqual(Screens.VerificationStartScreen)
  })

  it('returns home if not seen verification and verification is disabled', () => {
    expect(getInitialRoute({ ...defaultArgs, hasSeenVerificationNux: false })).toEqual(
      Screens.TabNavigator
    )
  })

  it('returns home if not seen verification and saved recovery phrase and verification is disabled', () => {
    expect(
      getInitialRoute({
        ...defaultArgs,
        hasSeenVerificationNux: false,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.Completed,
      })
    ).toEqual(Screens.TabNavigator)
  })

  it('returns tab navigator if all onboarding complete', () => {
    expect(getInitialRoute(defaultArgs)).toEqual(Screens.TabNavigator)
  })

  it('returns tab navigator if all onboarding complete and saved recovery phrase', () => {
    expect(
      getInitialRoute({
        ...defaultArgs,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.Completed,
      })
    ).toEqual(Screens.TabNavigator)
  })

  it('returns tab navigator if all onboarding complete, multichain beta is not seen and feature gate is off', () => {
    expect(
      getInitialRoute({ ...defaultArgs, multichainBetaStatus: MultichainBetaStatus.NotSeen })
    ).toEqual(Screens.TabNavigator)
  })

  it('returns multichain beta if all onboarding complete, multichain beta is not seen and feature gate is on', () => {
    jest.mocked(getFeatureGate).mockReturnValue(true)
    expect(
      getInitialRoute({ ...defaultArgs, multichainBetaStatus: MultichainBetaStatus.NotSeen })
    ).toEqual(Screens.MultichainBeta)
  })

  it('returns tab navigator if all onboarding complete, multichain beta is opted out and feature gate is on', () => {
    expect(
      getInitialRoute({ ...defaultArgs, multichainBetaStatus: MultichainBetaStatus.OptedOut })
    ).toEqual(Screens.TabNavigator)
  })
})
