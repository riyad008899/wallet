interface Resources {
  translation: {
    invite: 'Invite'
    celoRewards: 'Celo Rewards'
    languageSettings: 'Language'
    localCurrencySetting: 'Currency'
    licenses: 'Licenses'
    removeAccountTitle: 'Reset {{appName}}'
    removeAccountDetails: 'Resetting will remove your account from this device. Your funds will remain in the account, but will only be accessible with your Recovery Phrase'
    deleteAccountTitle: 'Delete {{appName}}'
    deleteAccountDetails: 'Deleting your account will remove it from {{appName}}. Your funds will remain in the account, but will only be accessible with your Recovery Phrase'
    deleteAccountWarning: {
      title: 'Are you sure?'
      description: 'Deleting your account from {{appName}} also removes any linked phone number. Your funds will remain in the account, but will only be accessible with your Recovery Phrase.'
      buttonLabel: 'Continue'
      buttonLabelRevokingPhoneNumber: 'Unlinking phone number...'
    }
    legal: 'Legal'
    appPreferences: 'App Preferences'
    preferences: 'Preferences'
    security: 'Security'
    securityPrivacy: 'Security & Privacy'
    changePin: 'Change PIN'
    pinChanged: 'PIN changed'
    pinChangeFailed: 'Changing the PIN failed'
    requirePinOnAppOpen: 'Require PIN on App Open'
    connectedApplications: 'Connected Dapps'
    analytics: 'Analytics'
    shareAnalytics: 'Share Analytics'
    hapticFeedback: 'Haptic Feedback'
    shareAnalytics_detail: 'We collect anonymized data about how you use {{appName}} to help improve the application for everyone.'
    dataSaver: 'Data Saver'
    enableDataSaver: 'Enable Data Saver'
    dataSaverDetail: 'Data Saver mode allows you to communicate with the the network through a trusted node. You can always change this mode in app settings.'
    keylessBackupSetupTitle: 'Create Login'
    keylessBackupSettingsTitle: 'Email & Phone Backup'
    keylessBackupSettingsDeleteError: 'Your backup was not able to be deleted, please wait & try again later.'
    setup: 'Set Up'
    restartModalSwitchOff: {
      header: 'Restart To Switch Off Data Saver'
      body: 'To switch Data Saver on and off repeatedly, you will need to restart the app and return to this screen.'
      restart: 'Restart to Switch'
    }
    revokePhoneNumber: {
      title: 'Unlink Phone Number'
      bottomSheetTitle: 'Unlink Phone Number'
      description: 'Unlinking will remove the phone number linked to your wallet. You can add a new phone number later.'
      confirmButton: 'Unlink now'
      revokeSuccess: 'Your phone number has been unlinked'
      revokeError: 'Could not unlink phone number, please try again later.'
      addNewNumberButton: 'Add phone number'
    }
    promptFornoModal: {
      header: 'Switch Connection Mode?'
      body: 'We’ve noticed you’re having some trouble connecting. We recommend enabling Data Saver mode to allow you to keep using {{appName}} with intermittent connection.'
      switchToDataSaver: 'Switch To Data Saver'
    }
    accountKeyModal: {
      header: 'Without your Recovery Phrase you will lose access to your funds forever'
      body1: "In order to reset {{appName}}, you will need to confirm you've written your Recovery Phrase."
      body2: 'Nobody, not even {{appName}}, can recover your account without your Phrase.'
    }
    promptConfirmRemovalModal: {
      header: 'Are you sure you want to proceed?'
      body: "You are about to erase your wallet from this device. This step is final and cannot be reversed. There is no way to recover your Recovery Phrase if you haven't written it down."
      resetNow: 'Continue'
    }
    protectWallet: {
      title: 'Protect Your Wallet'
      subtitle: 'Protect your wallet'
      body: 'If your phone is lost or stolen, your 12 word recovery phrase is the only way you can access your funds.'
      recoveryPhrase: {
        title: 'Use Recovery Phrase'
        subtitle: 'Write down your recovery phrase'
      }
    }
    recoveryPhrase: {
      title: 'Your recovery phrase'
      titleV1_90: 'Your Recovery Phrase'
      body: 'Write these 12 words down somewhere safe, where it cannot be stolen or damaged.'
      bodyV1_90: 'If you lose your recovery phrase, you will lose access to all funds held in {{appName}}.'
      continue: "I've saved it"
      copy: 'Copy to clipboard'
      mnemonicCopied: 'Recovery phrase copied to clipboard'
      bottomSheet: {
        title: 'How to save a recovery phrase'
        writeDownPhrase: 'Writing down your recovery phrase with a pen, and storing it in a safe place is one of the most secure ways to protect your wallet.'
        phraseLocation: "An ideal place might be where you store other important documents & materials for safekeeping, that is not easily stolen and easy to retrieve. It's up to you!"
      }
    }
    walletSecurityPrimer: {
      title: 'Keep your wallet safe'
      description: 'Only you can access your wallet. If your phone is lost or stolen, {{appName}} cannot recover it for you.\n\nYou’ll need to set up a method to keep your wallet safe and protect your funds.'
    }
    keylessBackupIntro: {
      emailAddress: 'Email Address'
      phoneNumber: 'Phone Number'
      setup: {
        title: 'Set Up Wallet Backup'
        description: "You'll use the following to set up your email & phone number backup"
        useRecoveryPhrase: 'Use a recovery phrase instead'
        reminder: '<0>Remember</0>, this information is the only way to access your wallet if your device is lost or stolen. {{appName}} does not store your email or phone number. Keep it safe!'
      }
      restore: {
        description: 'Make sure you have the following available to restore your wallet.'
        reminder: '<0>Remember</0>, you need access to the same email & phone number you used when you backed up'
      }
    }
    signInWithEmail: {
      title: 'Sign in with email'
      subtitle: 'Sign in with your email to set it up as a backup. You will be prompted to sign in again if you ever lose your wallet.'
      subtitleRestore: 'Sign in with the email you used to set up your wallet backup.'
      google: 'Sign in with Google'
      apple: 'Sign in with Apple'
      signInAnotherWay: 'Sign in another way'
      bottomSheet: {
        title: 'Save your recovery phrase to create a wallet'
        description: 'We’re going to be supporting other email providers soon, but in the meanwhile you’ll have to save your recovery phrase to finish creating a wallet.'
        continue: 'Continue'
        skip: 'Skip (not recommended)'
      }
    }
    keylessBackupPhoneInput: {
      setup: {
        title: 'Next, add your phone number'
        subtitle: 'You’ll need to use this phone number to restore if you ever lose your wallet.\n\nWe’ll send you a code to verify that this number is yours.'
      }
      restore: {
        title: 'Verify your phone number'
        subtitle: 'Enter the phone number you previously used to set up backup.\n\nWe’ll send you a code to verify that this number is yours.'
      }
    }
    keylessBackupStatus: {
      setup: {
        inProgress: {
          title: 'Backup in progress...'
        }
        completed: {
          title: 'Backup complete'
          body: 'You are now able to recover your wallet with your email address and phone number.'
        }
        failed: {
          title: 'Backup unavailable'
          body: 'You can set up wallet backup later or protect your account now by saving your recovery phrase.'
          later: "I'll set up backup later"
          manual: 'Save recovery phrase'
          skip: 'Skip (not recommended)'
        }
      }
      restore: {
        inProgress: {
          title: 'Restoring your wallet'
        }
        completed: {
          title: 'Your wallet has been restored!'
          bodyZeroBalance: 'You can add funds to your wallet once you are finished setting up.'
          bodyBalance: 'You have a balance of <0></0>'
        }
        failed: {
          title: 'Your wallet was not restored'
          body: 'There was a technical issue in trying to restore your wallet. Please contact support for more information.'
          tryAgain: 'Try Again'
          createNewWallet: 'Create new wallet'
          help: 'Help'
        }
        notFound: {
          title: 'Wallet not found'
          body: 'To restore your wallet, use the <0>same email address & phone number</0> you used when you set up.\n\nYou can also restore your wallet with your recovery phrase.'
          tryAgain: 'Try Again'
          createNewWallet: 'Create new wallet'
        }
      }
    }
    testFaqLink: '{{appName}} FAQ'
    termsOfServiceLink: 'Terms of Service'
    privacyPolicy: 'Privacy Policy'
    editProfile: 'Edit Profile'
    profileName: 'Profile Name'
    profile: 'Profile'
    confirmNumber: 'Connect Phone Number'
    cancel: 'Cancel'
    changeProfilePhoto: 'Change Profile Photo'
    name: 'Name'
    Name: 'Name'
    Email: 'Email'
    editName: 'Edit Name'
    submit: 'Submit'
    selectLanguage: 'Select Language'
    selectCurrency: 'Select Currency'
    continue: 'Continue'
    yourName: 'Your Name'
    version: 'Version {{appVersion}}'
    appVersion: 'Version'
    addressCopied: 'Address copied to clipboard'
    support: 'Support'
    contact: 'Contact'
    faq: 'Frequently Asked Questions'
    raiseLimit: 'Raise Account Send Limit'
    forum: 'Forum'
    contactText: 'Can’t find what you’re looking for?'
    contactMessagePlaceholder: 'Please type your message here...'
    attachLogs: 'Attach logs'
    supportLegalCheckbox: 'By submitting, I agree to share the above information and any attached application log data with {{appName}} Support.'
    contactSuccess: 'Your issue has been successfully reported! Expect an email response soon!'
    namePictureSaved: 'Your name and picture were saved successfully.'
    nameSaved: 'Your name was saved successfully.'
    addPhoto: 'Add Photo'
    chooseFromLibrary: 'Choose from Library'
    takePhoto: 'Take Photo'
    removePhoto: 'Remove Photo'
    applicationCompleted: 'Completed'
    applicationCompletedDescription: 'Your application was accepted. You are now able to send an unlimited amount daily.'
    raiseLimitBegin: 'Begin Identity Verification'
    storeRecoveryTitle: 'We need you to setup your account again'
    storeRecoveryBody: 'There’s been an error. We’re aware of the issue and working to fix it. In the meantime, you will need to go through the setup process again.'
    storeRecoveryButton: 'Restore Account'
    havingTrouble: 'Having Trouble?'
    shakeForSupport: 'This menu appears when you shake your device.'
    contactSupport: 'Contact Support'
    tapToCopy: 'Tap to Copy'
    headerTitle: 'Recovery Phrase'
    introBackUpPhrase: 'Back Up Recovery Phrase'
    introCompleteQuiz: 'Complete our backup quiz to verify that your wallet can be recovered.\n\nIf you wrote it down incorrectly, you won’t be able to access your wallet if anything happens to your device.'
    postSetupTitle: 'Your Recovery Phrase'
    postSetupBody: 'If you lose your Recovery Phrase, you will lose access to all of your assets on {{appName}}. Nobody, not even {{appName}}, will be able to help you recover your account without your Recovery Phrase. Store it in a safe place and do not share it.'
    postSetupCTA: 'Learn about your Recovery Phrase'
    failedFetchMnemonic: 'Failed to fetch your Recovery Phrase'
    backupAndRecovery: 'Backup and Recovery'
    writeDownKey: 'Please write down your Phrase'
    writeDownKeyExperimental: 'Please write down your phrase.'
    completeEducation: 'I Understand'
    yourAccountKey: 'Your Recovery Phrase'
    backupKeyNotification2: 'Keep your funds safe. Back up your Recovery Phrase now.'
    keylessBackupCTA: 'Back up now'
    keylessBackupNotification: 'Set up your email & phone number to back up your seed phrase'
    backupKeyCTA: 'Finish Backup Now'
    backupKeySummary: 'Find a private place and write down your Recovery Phrase. Please store it somewhere safe. Do not save it in your phone.'
    backupKeyWarning: 'If you lose your recovery phrase, you will lose access to all funds held in {{appName}}.'
    copied: 'Phrase copied to clipboard'
    moreInfo: 'More Info'
    savedConfirmation: 'Yes, I have written down my Phrase.'
    backupQuizWordCount: "What's the <0>{{ordinal}}</0> word of your Recovery Phrase?"
    backupQuizWordCountV1_83: "What's the <0>{{wordNumber}}</0> word of your Recovery Phrase?"
    importBackupFailed: 'Importing Wallet Failed'
    backupQuizFailed: 'The Recovery Phrase you entered is incorrect. Please try again.'
    invalidBackupPhrase: 'Recovery Phrase is not valid'
    invalidWordsInBackupPhrase: 'Some words in the Recovery Phrase are not valid: {{ invalidWords }}'
    backupComplete: {
      '0': 'Success!'
      '1': 'Next, you can set up Safeguards.'
      '2': 'You’re all set!'
      header: 'Backup Complete'
    }
    cancelDialog: {
      title: 'Finish setting up your Recovery Phrase'
      body: 'Your Recovery Phrase is extremely important. Without a Phrase, you can lose access to your wallet forever.\nYou will be blocked from sending any transactions until you finish setting up your Recovery Phrase.'
      action: 'Complete Now'
      secondary: 'Set Up Later'
    }
    backupPhrasePlaceholder: 'horse leopard dog monkey shark tiger lemur whale squid wolf squirrel mouse lion elephant cat shrimp bear penguin deer turtle fox zebra goat giraffe'
    guide: [
      {
        title: 'Your Recovery Phrase is a special kind of password'
        text: 'Your Recovery Phrase is the one and only way to access your account.'
      },
      {
        title: 'Without your Recovery Phrase, you can lose access forever'
        text: 'If you lose your phone, you must have your Recovery Phrase to get your account back. Nobody, not even {{appName}}, will be able to recover your funds without it.'
      },
      {
        title: 'Write it down'
        text: 'Write down your Recovery Phrase and store it in a safe place. Do not save it in your phone.'
      },
      {
        title: 'Keep your Phrase private'
        text: 'Anyone with your Phrase will have access to your account and all of its funds. Don’t share it with others.'
      },
    ]
    consumerIncentivesTitle: 'Supercharge is ending'
    consumerIncentivesSummary: "But more rewards are headed your way. Until May 28, get {{percent}}% annual rewards on your highest stablecoin balance (cUSD, cEUR, or cREAL). Here's how it works:"
    earnWeekly: {
      header: 'Connect your phone number'
      text: "Tap Connect Number if you haven't connected it yet."
    }
    noMinCommitment: {
      header: 'Add a minimum balance'
      earningText: 'Receive rewards on 10-1000 cUSD, 10-1000 cEUR, or 50-6000 cREAL.'
      connectText: 'Just have a balance of at least {{minBalance}} {{currency}} and connect your phone number to start getting rewarded.'
    }
    saveMoreEarnMore: {
      header: 'Set up your Recovery Phrase'
      text: 'This will ensure your rewards are safe and in your control.'
    }
    conclusion: 'It’s that simple. Supercharge your crypto today!'
    superchargeTitle: 'Supercharge is ending'
    superchargeDescription: "But more rewards are headed your way. Until May 28, get {{apy}}% annual rewards on your highest {{token}} balance. Here's how it works:"
    superchargeConnectNumber: 'Connect your phone number'
    superchargeReconnectNumber: 'Reconnect your phone number\n<0>We have launched an improved Supercharge experience. Reconnect your phone number to keep earning rewards on your {{token}}.</0>'
    superchargeMinimumBalance: 'Add a minimum balance of {{amount}} {{token}}'
    superchargeDisclaimer: 'This will not affect your balance or previous earnings.'
    superchargeDisclaimerMaxRewards: 'This will not affect your balance or previous earnings.'
    superchargeDisclaimerDayLimit: 'This will not affect your balance or previous earnings. <0>Learn more</0>'
    superchargeTokenDetailsDialog: {
      title: 'Which assets can I Supercharge?'
      body: 'You’ll get rewarded weekly on your Celo stablecoin with the highest value (cEUR, cUSD, cREAL).'
      dismiss: 'Dismiss'
    }
    superchargingTitle: 'App update required'
    superchargingDescription: 'Update the {{appName}} app to continue receiving your weekly Supercharge rewards.'
    superchargingTitleV1_54: 'Supercharge is ending'
    superchargingDescriptionV1_54: 'Weekly rewards will be available to claim until Tuesday, May 28, at 23:59 UTC. Beginning May 29, you will nor longer be able to claim Supercharge rewards.'
    superchargeRewardsAvailable: 'You have {{amount}} {{token}} available to claim!'
    superchargeRewardsAvailableMultipleTokens: 'You have {{amounts}} available to claim!'
    superchargeClaimText: 'Claim your rewards until Tuesday, May 28, at 23:59 UTC. Beginning May 29, you will no longer be able to claim Supercharge rewards.'
    superchargeClaimButton: 'Claim Rewards'
    superchargeFetchRewardsFailed: 'Error while fetching pending Supercharge rewards. Please try again later.'
    superchargeClaimSuccess: 'Your Supercharge rewards have been added to your Total Balance.'
    superchargeClaimFailure: 'There was an issue claiming your Supercharge rewards.'
    superchargeNotificationBody: 'Your Supercharge rewards are here! Claim them now.'
    superchargeNotificationStart: 'Claim rewards'
    superchargingNotificationBody: "You're getting 25% rewards with Supercharge ⚡"
    superchargingNotificationBodyV1_33: "You're getting {{apy}}% rewards with Supercharge ⚡"
    superchargingNotificationStart: 'Learn more'
    startSuperchargingNotificationBody: 'Get rewarded with crypto weekly. Start Supercharging!'
    startSuperchargingNotificationStart: 'Get rewards'
    cashIn: 'Add {{currency}}'
    connectNumber: 'Connect number'
    connectToWallet: 'Connect to {{dappName}}'
    confirmTransaction: 'Confirm transaction'
    allow: 'Allow'
    address: 'Wallet Address'
    supportedNetwork: 'Supported Network: {{network}}'
    supportedNetworks: 'Supported Networks: {{networks}}'
    and: 'and'
    phoneNumber: 'Phone Number'
    transaction: {
      operation: 'Operation'
      data: 'Data'
      signTX: 'Sign transaction'
      details: 'Show details'
    }
    shareInfo: 'You must connect your wallet to approve transactions in this Dapp. Once connected, it will have access to your wallet address.'
    connectWalletInfoDappkit: 'You must connect your wallet to approve transactions in this Dapp. Once connected, it will have access to your wallet address and phone number.'
    data: 'Data'
    firebaseDisabled: 'Firebase is disabled, notification and log uploading wont work'
    learnMore: 'Learn More'
    equalToAmount: 'Equal to <1></1>'
    whatIsGold: '{{appName}} allows you to buy and sell CELO'
    manageCelo: 'Manage Celo Dollars'
    exchangeRate: 'Exchange Rate'
    exchangeRateValue: '<0></0> : 1 {{takerTokenCode}}'
    history: 'History'
    exchange: 'Exchange'
    buy: 'Buy'
    sell: 'Sell'
    withdrawCelo: 'Withdraw CELO'
    buyGold: 'Buy CELO'
    sellGold: 'Sell CELO'
    exchangeAmount: 'Amount ({{tokenName}})'
    switchTo: 'Switch to {{tokenName}}'
    subtotalAmount: 'Subtotal @ <1></1>'
    inputSubtotal: 'Subtotal @ <2></2>'
    inputSubtotal_gold: '$t(celoGold) @ <2></2>'
    buyGoldAmount: 'Buy <0></0> $t(gold)'
    sellGoldAmount: 'Sell <0></0> $t(gold)'
    includeExchangeFee: '*includes exchange fee'
    available: 'Available'
    newBalance: 'New Balance'
    reviewExchange: 'Review Exchange'
    fee: 'Fee'
    securityFee: 'Network Fee'
    exchangeFee: 'Exchange Fee'
    edit: 'Edit'
    notEnoughDollars: 'Not enough Celo Dollars to make exchange'
    notEnoughGold: 'Not enough CELO to make exchange'
    pending: 'Pending'
    loadingExchangeRate: 'Loading Exchange Rate...'
    errorRefreshingRate: 'Could not refresh exchange rate'
    exchangeRateChange: 'Exchange rate has changed, please retry'
    feeExchangeEducation: 'When exchanging between assets, a small fee goes towards keeping the value of Celo stablecoins tied to the asset they track. \n\nVisit the FAQ to learn more.'
    goldPrice: 'CELO Price'
    yourGoldBalance: 'Your CELO Balance'
    goldAmount: 'CELO Amount'
    purchasedGold: 'Purchased CELO'
    soldGold: 'Sold CELO'
    exchangeRateInfo: 'CELO prices are approximate'
    rateInfoTitle: 'CELO prices are approximate'
    rateInfoBody: 'Your amount could change depending on market conditions. Your final amount will be no more than 1% different from the estimate shown.'
    accountAddressLabel: 'Account Address'
    celoAmountLabel: 'Amount (CELO)'
    maxSymbol: 'Max'
    withdrawCeloReview: 'Review'
    withdrawCeloTo: 'Withdraw to'
    withdrawCeloAmount: 'Amount (CELO)'
    withdrawScanQrTitle: 'Scan'
    tokenBalance: '{{token}} Balance'
    addFunds: 'Add Funds'
    addFundsHeaderWithCurrency: 'Add {{token}}'
    addFundsSubtitle: 'Fund your {{appName}} account'
    exchanges: 'Exchanges'
    noExchanges: 'There are no exchanges available for {{digitalAsset}} in your region.'
    buySellOnExchanges: 'Buy/Sell on Exchanges'
    cashOut: 'Withdraw Funds'
    cashOutSubtitle: 'Spend on gift cards and other purchases or send funds to a crypto exchange'
    cashOutComingSoon: 'Cash Out (Coming Soon)'
    spend: 'Spend'
    spendSubtitle: 'Use your balance with supporting merchants'
    amountCelo: 'Amount (CELO)'
    onlyCeloDollars: 'cUSD only'
    onlyCelo: 'CELO only'
    celoDollar: 'Celo Dollar'
    celoEuro: 'Celo Euro'
    celoReal: 'Celo Real'
    celoDollars: 'Celo Dollars'
    ether: 'Ether'
    tapToCopyCeloDollarsAddress: 'Tap to copy your {{appName}} CUSD address'
    disclaimerFiat: '{{currency}} values are estimates.'
    dollarsNotYetEnabledNote: 'Celo Dollars are not yet available on any providers. To get Celo Dollars, purchase CELO and exchange it for Celo Dollars in the CELO tab.'
    selectDigitalCurrency: 'Select an asset'
    selectPaymentMethod: 'Select method:'
    payWithBank: 'Bank account'
    payWithCard: 'Debit card'
    payWithExchange: 'Cryptocurrency exchange'
    selectCashOutMethod: 'Select method:'
    receiveOnAddress: 'Wallet address'
    receiveWithBidali: 'Gift Cards and Mobile Top Up'
    fundingEducationDialog: {
      title: 'Funding your {{appName}}'
      body: 'To fund your {{appName}} wallet, purchase your preferred asset from one of the 3rd party providers available in your location. For more information please visit <0>{{link}}</0>'
      dismiss: 'OK'
    }
    cashOutEducationDialog: {
      title: 'Withdraw from {{appName}}'
      body: 'To withdraw your {{appName}} balance, sell the desired asset with one of the 3rd party providers available in your location. For more information please visit <0>{{link}}</0>'
      dismiss: 'OK'
    }
    explanationModal: {
      title: 'About Providers'
      body: 'Providers allow you to add or withdraw funds from your account. They determine their own rates and restrictions depending on various factors. Please visit the provider’s website for specific help.'
    }
    invalidAmountDialog: {
      minAmount: 'Our providers do not support totals smaller than {{usdLimit}}{{localLimit}}. Please enter a larger amount.'
      maxAmount: 'Our providers do not support totals larger than {{usdLimit}}{{localLimit}}. Please enter a smaller amount.'
      dismiss: 'OK'
    }
    providerFeesDialog: {
      title: 'Provider Fees'
      body1: 'Provider fees are set by each provider individually and include an exchange fee and liquidity fee, among others. To learn more please visit '
      body2: "{{providerName}}'s website"
    }
    providerFeeDiscountDialog: {
      title: 'Fee Discount'
      body: 'As a promotion, fees are temporarily subsidized to celebrate the launch of {{appName}}!'
    }
    pleaseSelectProvider: 'Please select a provider below. These links connect to a third party service.'
    otherFundingOptions: 'For more ways to add and withdraw funds, visit <0>How to fund your account</0>'
    youCanTransferIn: "You can use a third party exchange to send {{digitalAsset}} to your {{appName}} account. You'll need your Account Address for this."
    youCanTransferOut: 'You can withdraw your funds by sending them to a third party exchange that supports {{digitalAsset}}.'
    useBalanceWithMerchants: 'Use your balance with supporting merchants'
    findMerchants: 'Find local merchants near you'
    celoDeposit: 'CELO Purchase'
    cUsdDeposit: 'cUSD Purchase'
    cEurDeposit: 'cEUR Purchase'
    providerUnavailable: 'Not currently available'
    pricePer: 'Price per {{coin}}'
    feeDiscount: 'Fee Discount'
    continueToProvider: 'Continue to {{provider}}'
    cicoSuccess: {
      title: 'Order submitted!'
      bodyWithProvider: '{{provider}} is processing your order. You should receive your funds within a couple of days.'
      bodyWithoutProvider: 'The service provider is processing your order. You should receive your funds within a couple of days.'
    }
    restrictedRegion: 'Limited support in region'
    unsupportedLocation: '{{appName}} is not supported in your location'
    unsupportedPaymentMethod: 'Paying with a {{paymentMethod}} is not supported in your region'
    noProviders: 'There are no providers available for {{digitalAsset}} in your region.'
    noPaymentMethods: 'There are no payment methods available for {{digitalAsset}} in your region.'
    switchCurrency: 'Switch Currency'
    accept: 'Accept'
    at: 'at'
    yourClockIsBroke: 'Your phone date and time is inaccurate'
    adjustYourClock: 'Set the correct time or adjust your clock to read time automatically.'
    adjustDate: 'Adjust Date'
    connect: 'Connect'
    save: 'Save'
    scan: 'Scan'
    next: 'Next'
    skip: 'Skip'
    copy: 'Copy'
    goBack: 'Go Back'
    reset: 'Reset'
    done: 'Done'
    tip: 'Tip: '
    warning: 'Warning '
    downloadRewards: 'Download Celo Rewards'
    wallet: 'Wallet'
    send: 'Send'
    search: 'Search'
    namePhoneAddress: 'Name, phone, or address'
    payments: 'Payments'
    activity: 'Activity'
    earnRewards: 'Earn Rewards'
    notEnoughStableError: 'Not enough {{token}} to make exchange'
    notEnoughGoldError: 'Not enough CELO to make exchange'
    exchangeFailed: 'Exchange failed, please retry'
    transactionFailed: 'Transaction failed, please retry'
    paste: 'Paste'
    choose: 'Choose'
    receivedPayment: 'Received Payment'
    receivedNft: 'Received NFT'
    sentNft: 'Sent NFT'
    getStarted: 'Get Started'
    manageCeloDollars: 'Manage Celo Dollars'
    sendCeloDollars: 'Send Celo Dollars'
    startEarning: 'Start Earning'
    backToWallet: 'Back to Wallet'
    exchangeForGold: 'Exchange for CELO'
    missingFullName: 'Name cannot be empty'
    invalidPhone: 'Invalid phone number'
    needMoreFundsToSend: 'You should have {{currencySymbol}}{{amountNeeded}} to make this transaction. Please add funds or try sending less.'
    invalidAmount: 'Invalid amount'
    invalidCode: 'Invalid Code'
    confirm: 'Confirm'
    readCodesAuto: 'Read Codes Automatically'
    enterManually: 'Enter Manually'
    incorrectPin: 'Incorrect PIN'
    pinInputCanceled: 'The PIN is necessary. Please try again.'
    setPinFailed: 'Failed to set PIN'
    optIn: 'Opt In'
    inviteFriends: 'Invite Friends'
    account: 'Account'
    invalidAccount: 'Invalid Account'
    delete: 'Delete'
    remind: 'Remind'
    pay: 'Pay'
    decline: 'Decline'
    to: 'To'
    for: 'For'
    reclaim: 'Reclaim'
    claimed: 'Claimed'
    celoGold: 'CELO'
    celoEuros: 'Celo Euros'
    balanceAvailable: '<0></0> available'
    subtotal: 'Subtotal'
    total: 'Total'
    totalInDollars: 'Celo Dollars @ <0></0>'
    totalInEuros: 'Celo Euros @ <0></0>'
    totalInCelo: 'Celo @ <0></0>'
    totalInToken: '<0></0> @ <1></1>'
    tokenExchanteRate: '{{symbol}} @ <0></0>'
    tokenExchangeRateApprox: '1 {{symbol}} ≈ <0></0>'
    oops: 'Oops!'
    somethingWrong: 'Something went wrong.'
    verifyFailed: 'Failed to connect'
    restartApp: 'Restart App'
    quitApp: 'Quit'
    loading: 'Loading…'
    importContactsFailed: 'Failed to import contacts'
    sendPaymentFailed: 'Failure sending payment'
    paymentRequestFailed: 'Payment Request did not send'
    reclaimingEscrowedPaymentFailed: 'Payment could not be reclaimed'
    connectingToCelo: 'Connecting…'
    poorConnection: {
      '0': 'Bad Connection'
      '1': 'some features disabled'
    }
    networkConnectionFailed: 'Could not connect with the network, please check your data connection'
    firebaseFailed: 'Internet connection is weak. Account information cannot be updated until connection is restored.'
    gasPriceUpdateFailed: 'Could not update fee'
    appUpdateAvailable: 'App Update Available'
    appIsOutdated: 'Your current version is out of date, please update to the latest version'
    update: 'Update'
    qrFailedNoAddress: 'QR code read failed. Reason: wallet address not found.'
    qrFailedInvalidAddress: 'QR code read failed. Reason: wallet address invalid.'
    qrFailedInvalidRecipient: 'QR code does not belong to the selected recipient'
    qrFailedNoPhoneNumber: "QR code is not associated with your contact's phone number"
    corruptedChainDeleted: 'Corrupted chain data has been deleted, please restart the app'
    contractKitInitFailed: 'Failed to initialize the contract kit, please try restarting the app or emailing support.'
    web3FailedToSync: 'Failing to sync, check your network connection'
    errorDuringSync: 'Error occurred during sync, please try again later'
    accountUnlockFailed: 'Unable to unlock your account'
    calculateFeeFailed: 'Could not calculate fee'
    failedToSwitchSyncModes: 'Failed to switch sync modes'
    gold: 'CELO'
    localCurrencyTitle: 'Select Currency'
    or: 'or'
    accepted: 'Accepted'
    processing: 'Processing'
    unknown: 'Unknown'
    emptyList: 'Empty list'
    timeframes: {
      '30d': '30 days'
    }
    message: 'Message'
    addressLookupFailure: 'Failed to look up phone number address'
    ordinals: [
      'zeroth',
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seventh',
      'eighth',
      'ninth',
      'tenth',
      'eleventh',
      'twelfth',
      'thirteenth',
      'fourteenth',
      'fifteenth',
      'sixteenth',
      'seventeenth',
      'eighteenth',
      'nineteenth',
      'twentieth',
      'twenty-first',
      'twenty-second',
      'twenty-third',
      'twenty-fourth',
      'twenty-fifth',
      'twenty-sixth',
      'twenty-seventh',
      'twenty-eighth',
      'twenty-ninth',
      'thirtieth',
    ]
    addressValidationError: 'Incorrect wallet address'
    addressValidationNoMatch: 'Incorrect wallet address'
    addressValidationFullPoorlyFormatted: 'Wallet addresses begin with "0x" and are 42 characters long'
    addressValidationPartialPoorlyFormatted: 'Wallet addresses begin with "0x" and are 42 characters long'
    addressValidationFullOwnAddress: 'This is your wallet address, please enter your contact’s wallet address.'
    addressValidationPartialOwnAddress: 'This is your wallet address, please enter your contact’s wallet address.'
    providerRateFetchFailed: 'Could not fetch provider rate. You can continue without a prefilled rate.'
    helpFindAccount: 'Help your contact find their Account Address'
    close: 'Close'
    home: 'Home'
    accountKey: 'Recovery Phrase'
    walletSecurity: 'Wallet Security'
    addAndWithdraw: 'Add & Withdraw'
    settings: 'Settings'
    help: 'Help'
    dismiss: 'Dismiss'
    review: 'Review'
    insufficientBalance: 'Your balance is too low to make this transaction'
    insufficientBalanceStable: 'You do not have enough cUSD or cEUR to complete this transaction'
    amount: 'Amount'
    currentBalance: 'Current Balance (cUSD)'
    restore: 'Restore'
    commentUnavailable: 'Comment Unavailable'
    accountClearFailed: 'There was an error while removing your Recovery Phrase. You might have to reinstall the app to restore all functionality.'
    withdraw: 'Withdraw'
    countryNotAvailable: '{{appName}} is not available in your country'
    fetchFailed: 'Server connection failed'
    pictureLoadFailed: 'There was an error while loading your picture'
    simplexPurchaseFetchFailed: 'Failed to retreive a quote from Simplex. Please try again later'
    providerFetchFailed: 'Could not connect to service. Please contact support'
    ok: 'OK'
    cashOutLimitExceeded: 'You cannot cash out more than your balance of {{balance}} {{currency}}'
    appDescription: 'A mobile payments wallet that works worldwide'
    earn: 'Earn'
    free: 'Free'
    notNow: 'Not Now'
    goldEducationSteps: [
      {
        title: 'What is CELO?'
        text: 'CELO is a digital currency that keeps the Celo Dollar (cUSD) stable.'
      },
      {
        title: 'CELO’s price changes'
        text: "If more people use the Celo Dollar, the value of CELO increases. Unlike CELO, the Celo Dollar doesn't change in value. "
      },
      {
        title: 'Shape the Celo Network'
        text: 'By holding CELO, you have the ability to vote for changes and features you’d like to see on the Celo Network.'
      },
      {
        title: 'Please buy and sell responsibly'
        text: '{{appName}} allows you to buy and sell CELO. CELO presents a risk of financial loss, please exercise caution.'
      },
    ]
    inviteWithWhatsapp: 'Invite with WhatsApp'
    inviteWithSMS: 'Invite with SMS'
    whySendFees: 'This fee covers costs for the new user to connect their phone number'
    whyReceiveFees: 'You were sent some crypto to confirm your account'
    inviteSent: 'Invite Sent'
    accountSetupFailed: 'Failed to create your wallet'
    accountSetupFailedDescription: 'Please delete {{appName}} from your device and try again. If you continue to have issues please reach out to support.'
    closeApp: 'Close app'
    transferDollarsToAccount: 'Funds transferred to your account!'
    inviteAnyone: 'Send easily to your friends by adding your contacts'
    inviteReceived: 'Invite Received'
    escrowPaymentNotificationTitle: "Invite to {{mobile}} can't be claimed"
    sendAndInvite: 'Send & Invite'
    inviteRewardsBanner: {
      title: 'Invite friends and collect NFTs'
      body: 'Once they set up their {{appName}} wallet and connect their number, you’ll each get an exclusive NFT.'
    }
    inviteRewardsBannerCUSD: {
      title: 'Invite friends and get up to 12 cUSD'
      body: 'Once they connect their number and add funds to {{appName}}, you’ll both receive 0.50 cUSD.'
    }
    inviteWithUrl: {
      title: 'Invite a Friend'
      body: 'Connect and share value with your friends and family on {{appName}}.'
      button: 'Share Invite'
      error: 'There was an issue creating a sharable link'
      share: 'Hey! Sign up to {{appName}} wallet. I use it to grow my savings in USD and crypto, and you can set it up in seconds with just a phone number. Make sure to sign up with my referral link here: {{shareUrl}}.'
      help: 'To collect this reward, the invitee must download through the referral link, connect their phone number, add funds and keep them in their {{appName}} wallet for 7 days. <0>View all terms</0>'
      rewardsActive: {
        title: 'Invite friends and collect NFTs'
        body: 'Invite your friends and family to download {{appName}} and each of you will get an exclusive NFT'
      }
      rewardsActiveCUSD: {
        title: 'GET UP TO 12 cUSD for inviting your friends to {{appName}}!'
        body: 'Get 0.50 cUSD for every friend you invite to {{appName}}. Once they connect their number, add funds, and hold them for 7 days, you’ll both get 0.50 cUSD. Hurry, funds are limited! (Limit 25 friends).'
      }
    }
    getReward: 'Get ${{reward}}'
    welcomeCelo: 'Welcome to {{appName}}'
    chooseCountryCode: 'Country Code'
    chooseCountry: 'Country'
    joinText: '{{appName}} helps you to send, receive, and save value on the blockchain.'
    terms: {
      title: 'Terms and Conditions'
      heading1: 'Data and Privacy'
      heading2: 'Digital Assets and {{appName}}'
      info: 'In order to use our services, please read and accept our <0>User Agreement and Terms</0> by clicking the accept button below.'
      privacy: "By joining this network, you give us permission to collect anonymous information about your use of the app. Additionally, if you connect your phone number, a hashed copy of it will be stored. If you grant {{appName}} access to your contact list, {{appName}} will import each contact's name, phone number and profile picture to allow users to connect through the {{appName}} app. To learn how we collect and use this information please review our <0>Privacy Policy</0>."
      goldDisclaimer: 'When you create an "account" with {{appName}} you are creating a digital wallet to which only you hold the keys. No other person or entity, including {{appName}}, can recover your key, change or undo transactions, or recover lost funds. Be aware that digital assets are part of a new asset class and present a risk of financial loss. Carefully consider your financial circumstances and tolerance for financial risk before purchasing any digital asset.'
      goldDisclaimerWithPoints: 'When you create an "account" with {{appName}} you are creating a digital wallet to which only you hold the keys. No other person or entity, including {{appName}}, can recover your key, change or undo transactions, or recover lost funds. {{appName}} grants tokenized loyalty rewards ("Points") to Users for engaging in certain in-app activities. Points are on-chain, non-transferable, and non-redeemable collectibles. No guarantees are made about Points availability or value. Be aware that digital assets are part of a new asset class and present a risk of financial loss. Carefully consider your financial circumstances and tolerance for financial risk before purchasing any digital asset.'
    }
    termsColloquial: {
      title: 'Let’s start by creating your wallet'
      privacyHeading: 'Your Info & Privacy:'
      privacy1: 'We gather usage data which helps us improve the app and security. The type of information we collect, how we use it and your rights related to that information can all be seen in our <0>Privacy Policy</0>.'
      privacy2: 'If you decide to link your phone number, we will store an encrypted copy of it.'
      privacy3: 'If you decide to connect your contacts, we use their names, numbers, and profile pictures to make it easier to find them.'
      walletHeading: 'Your Digital Wallet with {{appName}}:'
      wallet1: 'You’re about to create a digital wallet. Only you have the key to your wallet. We cannot recover your key or your assets if you lose your key. We also cannot reverse actions taken through {{appName}} on blockchains.'
      wallet2: 'Digital assets, the assets with which you will interact with {{appName}}, come with unique risks. By using {{appName}}, you accept these risks and take responsibility for them. Please consider your finances and risk tolerance before making choices.'
      fullTerms: 'Read our full <0>Terms & Conditions</0>'
    }
    fullNameOrPsuedonym: 'Full name or pseudonym'
    namePlaceholder: 'ex. name'
    nameAndPicGuideCopyTitle: 'What’s your name?'
    nameAndPicGuideCopyContent: 'We’d like to know what to call you.'
    important: 'Important'
    confirmPin: {
      title: 'Enter PIN'
    }
    goToSystemSecuritySettingsActionLabel: 'Go to security'
    enableSystemScreenLockFailedMessage: 'Failed to enable screen lock'
    initKeystoreFailureMessage: 'Failed to init keystore'
    pinLostForeverMessage: 'You removed the screen lock, the PIN is lost'
    importContactsPermission: {
      '0': 'Connecting your address book makes it easy to send and request payments with your friends. Otherwise, you’ll have to enter their info individually.'
      '1': 'Don’t worry—connecting does not send invites to your contacts.'
      title: 'Import Contacts'
      enable: 'Enable Contact Access'
      loading: 'Finding friends on {{appName}}...'
    }
    getVerified: 'Connect Phone Number'
    notReadyForCode: 'Not yet ready for code entry'
    errorRequestCode: 'Failed to request codes.'
    errorRedeemingCode: 'Failed to redeem code.'
    pleaseRetry: 'Please try connecting again.'
    retryVerification: 'Retry connection'
    education: {
      header: 'Connect Your Phone'
      body1: 'Next, please connect your phone number.'
      body2: 'Connecting your phone makes it easier to send and receive with friends. You can also skip this step and return to it later.'
      learnMore: 'Learn more about phone connection'
      start: 'Connect Phone Number'
      skip: 'Skip For Now'
    }
    verificationLoading: {
      confirming: 'Connecting phone number…'
      pleaseKeepAppOpen: "Please don't leave this screen or you'll have to restart"
      learnMore: 'Learn more'
      card1: "To make sure your phone number is really yours, we're sending you three messages."
      card2: 'Once your number is connected, you can send and receive funds easily to your phone number.'
      card3: 'Connecting your number also allows you to see which of your friends are on {{appName}}.'
      card4: 'We require three SMS messages to securely connect your phone number.'
    }
    skipModal: {
      header: 'Are you sure?'
      body1: 'Connecting your number gives you more ways to send payments and allows you to collect Supercharge rewards.'
    }
    failModal: {
      header: 'Confirmation Error'
      body1: 'An issue has occurred while connecting your phone number.'
      body2: 'You can skip connecting for now and try again later.'
      body1InsufficientBalance: 'Your current balance is not high enough to complete the connection process.'
      body2InsufficientBalance: 'Please try again when you have added funds to your wallet.'
      body1SaltQuotaExceeded: 'Your phone number lookup quota is used up'
      body2SaltQuotaExceeded: 'Please try again when you have purchased more lookups'
      enterCodesBody: 'If you already received three codes via SMS, you can still enter them.'
      enterCodesButton: 'Enter Codes'
    }
    retryWithFornoModal: {
      header: 'Retry Connection with Data Saver?'
      body1: 'An issue has occurred while connecting your phone number. We recommend trying again with Data Saver mode enabled.'
      body2: 'Data Saver mode allows you to communicate with the network more consistently using a trusted connection.'
      retryButton: 'Retry with Data Saver'
    }
    congratsVerified: 'Congratulations, your phone number is now connected!'
    notification: {
      body: 'Connect your number to claim funds and connect to friends'
      cta: 'Connect Now'
    }
    quotaLookup: {
      title: 'Lookup quota exceeded'
      body1: 'To keep your phone number safe and private, {{appName}} limits how many phone numbers users can lookup.'
      body2: 'You can purchase more lookups for a small fee.'
      cta: 'Purchase lookups (2)'
    }
    onboardingEducation: {
      step1: 'If you can text, you can crypto. Starting now, your phone is your crypto wallet.'
      step2: 'With {{appName}}, it’s easy to access and easy to grow your crypto.'
      step3: 'All you need is a mobile phone to send, spend and explore.'
      payment: 'Make payments globally with near zero fees'
      impact: 'Support climate and social change initiatives'
      spend: 'Use your crypto to shop your favorite brands'
    }
    enableBiometry: {
      title: 'Secure your wallet'
      description: '{{biometryType}} secures your wallet and makes it easier to use {{appName}}'
      cta: 'Turn on {{biometryType}}'
      guideTitle: 'Want to add {{biometryType}}?'
      guideDescription: '{{biometryType}} makes it easier, quicker, and more secure to connect your wallet to dapps & sign transactions.'
    }
    biometryType: {
      FaceID: 'Face ID'
      TouchID: 'Touch ID'
      OpticID: 'Optic ID'
      Fingerprint: 'Fingerprint recognition'
      Face: 'Face recognition'
      Iris: 'Iris recognition'
    }
    useBiometryType: 'Use {{biometryType}}'
    unlockWithBiometryPrompt: 'Authenticate to unlock {{appName}}'
    welcome: {
      title: 'Step into the future of crypto with {{appName}}'
      titleGuided: 'Welcome to {{appName}}!\nLet’s create your crypto wallet.'
      createAccount: 'Create new account'
      restoreAccount: 'Restore my account'
      createNewWallet: 'Create new wallet'
      restoreWallet: 'Restore wallet'
      hasWallet: 'I already have a wallet'
      hasWalletV1_88: 'I have a wallet'
      header: "Welcome to {{appName}}! Let's create your crypto wallet."
      getStarted: 'Get Started'
      agreeToTerms: 'By creating a wallet you agree to our <0>Terms and Conditions</0>'
    }
    accessContacts: {
      disclosure: {
        title: 'Import Contacts'
        body: "{{appName}} would like to import your contacts. By tapping below, I allow access to my contacts' phone numbers, names and photos for purposes of connecting with them through {{appName}}"
      }
    }
    createAccount: 'Create Account'
    createProfile: 'Create Profile'
    restoreAccount: 'Restore My Account'
    registrationSteps: 'Step {{step}} of {{totalSteps}}'
    selectCountryCode: 'Select Country Code'
    pincodeSet: {
      createNew: 'Create a New PIN'
      verify: 'Enter your PIN again to confirm'
      changePIN: 'Change PIN'
      pinsDontMatch: "The PINs didn't match"
      invalidPin: 'Please use a stronger PIN'
      onboardingTitle: 'Choose a 6 digit PIN'
      onboardingConfirm: 'Enter your PIN again'
      onboardingSubtitle: 'Your PIN will secure your wallet'
      pin: 'PIN'
    }
    inviteCode: {
      title: 'Invite Code'
      body: 'Did you receive a payment or invite? If so, please copy and paste the Invite Code below.'
      label: 'Invite Code'
      codePlaceholder: 'Enter invite code'
      noCode: 'Don’t have an Invite Code'
      nodeCodeInviteLink: 'Don’t have an invite code? Request one at <0>celo.org/developers/wallet</0> or <1>continue without</1>'
      loadingHeader: 'Creating account...'
      loadingBody: 'This can take up to 90 seconds'
    }
    verificationEducation: {
      title: 'Phone Number'
      header: 'Connect your phone number'
      body: 'To make sure your number is really yours, you’ll receive three SMS messages that will cost about 0.05 cUSD each.\n\nConnection takes about three minutes.'
      feelessBody: 'You will receive three messages to help securely connect your phone number. Connection takes about three minutes.'
      start: 'Start'
      resume: 'Resume'
      doINeedToConfirm: 'Do I need to connect?'
      skipForNow: 'Skip for now'
      bodyInsufficientBalance: 'Your current balance is not high enough to complete the confirmation process.\n\nPlease try again when you have added funds to your wallet.'
      bodyAlreadyVerified: 'Your number is already connected!'
    }
    verificationSkipDialog: {
      title: 'Are you sure?'
      body: 'Connecting allows you to send and receive funds to any phone number.\n\nAccounts that are not connected can only send payments using wallet addresses or QR codes.'
      cancel: 'Go Back'
      confirm: 'Skip for now'
    }
    verificationPrematureRevealMessage: 'Please wait one minute before resending'
    verificationLearnMoreDialog: {
      title: 'Phone Numbers and {{appName}}'
      body: 'Connecting allows you to send and receive funds with your phone number.\n\n<0>Can I do this later?</0>\n\nYes, but wallets that aren’t connected can only send payments with QR codes or Account Addresses.\n\n<1>Secure and Private</1>\n\n{{appName}} uses state of the art cryptography to keep your phone number private.'
      dismiss: 'Dismiss'
    }
    phoneVerificationScreen: {
      screenTitle: 'Phone Number'
      title: 'Connect your phone number to {{appName}}'
      description: 'This links your wallet address to your phone number so sending crypto is easy'
      startButtonLabel: 'Connect'
      learnMore: {
        buttonLabel: 'Do I need to connect?'
        title: 'Do I need to connect?'
        body: 'Connecting your phone number will allow you to send money to friends in your address book and other phone numbers. \n \n If you choose to skip this step you won’t be able to access your contacts and you will only be able to send money via QR code or wallet address.'
      }
      skip: {
        title: 'Are you sure?'
        body: 'Connecting allows you to send and receive funds from your phone number.'
        cancel: 'Go Back'
        confirm: 'Skip for now'
      }
    }
    phoneVerificationInput: {
      title: 'Enter the code'
      description: 'We sent a code to {{phoneNumber}}, please enter it below.'
      help: 'Help'
      codeInputPlaceholder: '123456'
      helpDialog: {
        title: 'Help'
        body: 'We sent an SMS to your phone number. Please check your text messages to find the 6 digit code. \n \n If you’re having trouble receiving messages, you can skip this step for now and try again later.'
        bodyCloudBackupOnboarding: 'We sent an SMS to your phone number. Please check your text messages to find the 6 digit code. \n \n If you’re having trouble receiving messages, we recommend backing up with a Recovery Phrase. You can try signing in with your email and phone later.'
        skip: 'Skip'
        dismiss: 'Go back'
        useRecoveryPhrase: 'Use Recovery Phrase'
      }
      verificationFailure: 'Oops! Something went wrong, please try again later.'
      resendButtonNotYetAvailable: 'Resend available in {{secondsRemaining}} second(s)'
      resendButton: 'Didn’t receive code?'
    }
    importExistingKey: {
      keyPlaceholder: 'horse leopard dog monkey ...'
      header: 'Restore wallet'
      title: 'Enter your recovery phrase'
      description: 'Use the 12 or 24-word phrase that you saved when you set up your wallet to restore.'
      descriptionV1_90: 'Your Recovery Phrase is a 12 or 24-word phrase that you wrote down and saved when you set up your wallet. Please enter it here to restore your wallet.'
      emptyWalletDialog: {
        description: 'This wallet doesn’t have any funds. Would you still like to use it?'
        action: 'Use Wallet'
        title: 'Balance\n<0></0>'
      }
    }
    importSelect: {
      title: 'Restore Your Wallet'
      description: 'If you set up a backup to protect your wallet, choose an option below.'
      emailAndPhone: {
        title: 'From email & phone backup'
        description: 'Restore your wallet with the phone number & email you set up previously'
      }
      recoveryPhrase: {
        title: 'From recovery phrase'
        description: 'Enter your 12 word recovery phrase to regain access to {{appName}}'
      }
    }
    verificationInput: {
      title: 'Confirm'
      body: 'We sent you three messages (SMS). Please copy and paste them below.'
      body_ios: 'We sent you three messages (SMS). Please tap the link in each message to fill the codes below or copy and paste them manually.'
      body_short: 'We sent three codes to {{phoneNumber}}, please enter them below.'
      codeLabel1: 'First Code'
      codeLabel2: 'Second Code'
      codeLabel3: 'Third Code'
      codePlaceholder1: 'Copy the first message'
      codePlaceholder1_ios: 'Tap or copy the first message'
      codePlaceholder2: 'Copy the second message'
      codePlaceholder2_ios: 'Tap or copy the second message'
      codePlaceholder3: 'Copy the third message'
      codePlaceholder3_ios: 'Tap or copy the third message'
      codePlaceholderWithCodeInClipboard: 'Great! Paste it here'
      resendMessages: 'Resend last message'
      resendMessages_plural: 'Resend {{count}} messages'
      resendMessages_all: 'Resend all messages'
    }
    verificationInputHelpDialog: {
      title: 'Help'
      bodySection1: {
        title: 'Received all three messages?'
        content: 'If your messages contain a link, simply tap the links to confirm.\n\nIf there are no links, please copy and paste the messages into the fields. You’re welcome to paste the entire message.'
      }
      bodySection2: {
        title: 'Missing some or all messages?'
        defaultContent: 'If you’re having trouble receiving messages, you can skip this step for now and try again later. Sometimes it can take a few minutes for messages to arrive.'
        content: '$t(verificationInputHelpDialog.bodySection2.defaultContent)'
        content_countdown: '$t(verificationInputHelpDialog.bodySection2.defaultContent) The skip option below will be available in {{count}} second.'
        content_countdown_plural: '$t(verificationInputHelpDialog.bodySection2.defaultContent) The skip option below will be available in {{count}} seconds.'
      }
      body: '<0>$t(verificationInputHelpDialog.bodySection1.title)</0>\n\n$t(verificationInputHelpDialog.bodySection1.content)\n\n<1>$t(verificationInputHelpDialog.bodySection2.title)</1>\n\n$t(verificationInputHelpDialog.bodySection2.content)'
      skip: 'Skip for now'
      back: 'Go Back'
    }
    success: {
      message: "You're all set!"
    }
    verificationUnavailable: "Phone number connection is currently unavailable. Please enter your phone number and we will notify you when it is possible to connect again.\n\nIn the meantime, you can continue to use {{appName}} with QR codes or Account Addresses. Don't worry, payments sent to your phone number will be waiting for you until you connect it to your account."
    requests: 'Requests'
    empty: 'You have no Payment Requests'
    celoDollarBalance: 'Celo Dollar Balance'
    requestDeclined: 'Request Declined'
    requestPaid: 'Request Paid'
    paymentRequestUpdateFailed: 'Cannot update payment request'
    incomingPaymentRequestNotificationTitle: '{{name}} requested'
    outgoingPaymentRequestNotificationTitle: 'Waiting for {{name}}'
    requesting: 'Requesting'
    request: 'Request'
    requestToken: 'Request {{token}}'
    requestSent: 'Request Sent'
    from: 'from'
    verificationMessage: 'You paid a fee to connect your account. Welcome to {{appName}}!'
    receivedAmountFromCelo: 'You received this amount from the Faucet!'
    dollarsSent: 'Dollars Sent'
    withdrawToken: 'Withdraw {{token}}'
    sendToken: 'Send {{token}}'
    payment: 'Payment'
    sendOrRequest: 'Send or Request'
    recent: 'Recent'
    contacts: 'Contacts'
    characterLimitExceeded: '{{max}} Character Limit Exceeded'
    payRequest: 'Pay Request'
    sendTo: 'Send to'
    celoDollarAmount: '<0></0> Celo Dollar'
    celoDollarAmount_plural: '<0></0> Celo Dollars'
    addDescription: 'Add description'
    sentTo: 'Sent To'
    withdrawnTo: 'Withdrawn to'
    receivedFrom: 'Received From'
    commentLabel: 'Message'
    amountSent: 'Amount Sent'
    amountReceived: 'Amount Received'
    amountCeloWithdrawn: 'Amount (CELO)'
    feeEducation: 'Blockchains collect a transaction fee to keep networks supported and running smoothly.'
    reviewPayment: 'Review Payment'
    requestPayment: 'Request Payment'
    max: 'MAX'
    inviteSendTo: 'Invite & send to'
    keepMoneySafe: "We'll keep these funds safe until your friend creates a {{appName}} account"
    searchFriends: "Try entering a phone number if you are unable to find who you're looking for"
    inviteVerifyPayment: 'Invite & Confirm Payment'
    noResultsFor: 'No results for'
    noContacts: 'No contacts'
    searchForSomeone: 'Search for someone using their name, phone number, or address'
    sentPayment: 'Sent Payment'
    sentEscrowPayment: 'Sent Escrow Payment'
    mobileNumber: 'Mobile #'
    sendToMobileNumber: 'Send to Phone Number'
    requestFromMobileNumber: 'Request From Phone Number'
    sendToAddress: 'Send to Address'
    walletAddress: 'Wallet Address'
    inviteWithoutPayment: 'Hi! I’ve been using {{appName}} to send crypto worldwide. It’s easy to try and I want to invite you to check it out with this link: {{link}}'
    inviteWithEscrowedPayment: 'Hi! I’ve been using {{appName}} to send crypto worldwide. I just sent you {{amount}} {{token}}. Please download the {{appName}} App and redeem your {{token}} using this link: {{link}}'
    inviteWithRewards: "Hi! 👋 I'm using {{appName}} as my crypto wallet. It's super quick to download the app and connect your phone number - plus, we both get a special edition NFT as a reward. 💫 \n\nUse this link to download: {{link}}"
    inviteWithRewardsCUSD: 'Hey! Right now we can both get a free $0.50 reward if you sign up, connect your number, and fund your {{appName}} wallet. I use it to grow my savings in USD and crypto, and you can set it up in seconds with just a phone number. Make sure to sign up with my referral link here: \n\n{{link}} \n\n Hurry, the referral promotion ends soon.'
    loadingContacts: 'Finding your contacts'
    myCode: 'My Code'
    scanCode: 'Scan'
    scanQRCode: 'Scan QR Code'
    enterQRCode: 'Enter QR Code'
    writeStorageNeededForQrDownload: 'Storage write permission is needed for downloading the QR code'
    cameraScanInfo: 'Center code in the box above'
    cameraNotAuthorizedTitle: 'Enable Camera'
    cameraNotAuthorizedDescription: 'Please enable the Camera in your phone’s Settings. You’ll need it to scan QR codes.'
    cameraSettings: 'Settings'
    toSentOrRequestPayment: 'to send or request payment'
    reminderSent: 'Reminder Sent'
    reclaimPayment: 'Reclaim Payment'
    totalRefunded: 'Total Refunded'
    loadingVerificationStatus: 'Checking if recipient is connected…'
    askForContactsPermissionAction: 'Get my Contacts'
    newAccountBalance: 'New account balance: '
    estimatingFee: 'Estimating fee '
    estimatedFee: 'Estimated fee: '
    selectBalance: 'Select Balance'
    stableBalance: '{{token}} Balance'
    selectToken: 'Select Asset'
    verificationCta: {
      header: 'Send crypto like a text!'
      body: 'Link your phone number to your wallet address so you can send & receive payments with friends.'
      cta: 'Link Phone number'
    }
    importContactsCta: {
      header: 'Enable Contacts'
      body: 'Enable Contacts in your phone’s Settings to easily send and request payments.'
      cta: 'Settings'
    }
    contactSyncProgress: {
      header: 'Syncing Contacts'
      progress: '{{current}} of {{total}}'
      importing: 'Importing...'
    }
    confirmAccount: {
      header: '{{displayName}} has multiple wallets.'
      headerNoDisplayName: 'This phone number has multiple wallets.'
      button: 'Confirm Wallet Address'
    }
    secureSendExplanation: {
      body1: 'There are multiple wallets associated with {{e164PhoneNumber}}. In order to confirm that you have the right account, please scan their QR code or enter their wallet address.'
      body2: 'You must scan their QR code or confirm their Account Address before transacting.'
    }
    confirmAccountNumber: {
      title: 'Confirm Wallet Address'
      bodyPartial: "Please ask {{displayName}} for the last four digits of their wallet address. It's safest to do this in person or by phone call."
      bodyPartialNoDisplayName: "Please ask your contact for the last four digits of their wallet address. It's safest to do this in person or by phone call."
      body1Full: 'Please ask {{displayName}} for their Wallet Address.'
      body1FullNoDisplayName: 'Please ask your contact for their Wallet Address.'
      body2Full: 'The safest way to do this is in person. For security, please do not use text messaging (SMS).'
      help: 'Where can I find a Wallet Address?'
      submit: 'Submit'
    }
    accountInputHeaderPartial: 'Last 4 Digits'
    accountInputHeaderFull: 'Account Address'
    helpModal: {
      header: 'Locating a wallet address'
      body1: 'Your wallet address is located in the menu. Open the menu by tapping the menu icon in the top left corner.'
      body2: 'Your wallet address is near the bottom of the menu.'
      body3: 'Wallet addresses begin with "0x" and are 42 characters long'
    }
    transferAddressChanged: 'This contact changed their Account Address since the transaction. This payment was sent to:'
    addressConfirmed: 'Account Address confirmed'
    sending: 'Sending'
    feeActual: 'Fees'
    feeEstimate: 'Estimated Fees'
    encryption: {
      warningLabel: 'This comment will not be encrypted'
      warningModalHeader: 'About Encryption'
      warningModalBody: 'Encryption ensures your comments are kept private. {{appName}} uses encryption on transaction comments when both the sender and receiver have this feature set up. Set up will normally occur automatically once a user sends their first transaction.'
      feeLabel: 'One-Time Encryption Fee'
      feeModalHeader: 'One-Time Encryption Fee'
      feeModalBody: 'Encryption helps keep your sensitive data private. A small one-time fee is added to your first transaction to setup encryption. This ensures your comments will be sent securely and privately.'
    }
    sendToAddressWarning: {
      title: 'Sending to an address'
      body: 'Please make sure this address supports the asset you are trying to send. Your funds may not be recoverable if this address is invalid. Send a test payment first to make sure this is the correct address.'
      toggle: 'Always remind me'
    }
    loadingFromScan: 'Scanning'
    loadingFromDeeplink: 'Connecting'
    action: {
      asking: 'This application is asking to perform the following action'
      askingV1_35: '{{dappName}} is asking to perform the following:'
      operation: 'Operation'
      data: 'Data'
      sign: 'Sign a data payload'
      signTransaction: 'Sign a transaction'
      sendTransaction: 'Send a transaction'
      decrypt: 'Decrypt a data payload'
      accounts: 'Read your {{appName}} Account Address'
      details: 'View transaction data'
      computeSharedSecret: 'Generate Secrets'
      emptyMessage: 'Empty message'
    }
    walletConnectRequest: {
      transactionDataLabel: 'Transaction data'
      readAccount: '{{dappName}} would like to read your {{appName}} wallet address.'
      signPayloadTitle: 'Verify wallet'
      signPayload: '{{dappName}} would like to verify ownership of your wallet.'
      signTransactionTitle: 'Sign transaction'
      signTransaction: '{{dappName}} would like to sign a transaction.'
      signDappTransaction: '{{dappName}} would like to sign a transaction on the {{networkName}} network.'
      signDappTransactionUnsupportedNetwork: '{{dappName}} would like to sign a transaction on an unsupported network.'
      signDappTransactionUnknownNetwork: '{{dappName}} would like to sign a transaction on an unsupported network.'
      sendTransactionTitle: 'Send transaction'
      sendTransaction: '{{dappName}} would like to send a transaction.'
      sendDappTransaction: '{{dappName}} would like to send a transaction on the {{networkName}} network.'
      sendDappTransactionUnsupportedNetwork: '{{dappName}} would like to send a transaction on an unsupported network.'
      sendDappTransactionUnknownNetwork: '{{dappName}} would like to send a transaction on an unsupported network.'
      decryptPayloadTitle: 'Decrypt with wallet'
      decryptPayload: '{{dappName}} would like to decrypt a data payload.'
      computeSharedSecret: '{{dappName}} would like to generate secrets.'
      transactionDataCopied: 'Transaction data copied'
      estimatedNetworkFee: 'Estimated {{networkName}} Network Fee'
      networksList: 'Networks'
      connectWalletAction: 'Connect wallet'
      signTransactionAction: 'Sign'
      sendTransactionAction: 'Send'
      unsupportedChain: {
        title: 'Unsupported chain'
        description: '{{dappName}} is requesting this action on a chain not supported by {{appName}}. Please make sure Celo is the active chain on the dapp side.'
        descriptionV1_74_one: '{{dappName}} is requesting this action on a chain not supported by {{appName}}. Please make sure {{supportedNetworkNames}} is the active chain on the dapp side.'
        descriptionV1_74_other: '{{dappName}} is requesting this action on a chain not supported by {{appName}}. Please make sure the active chain on the dapp is one of the following: {{supportedNetworkNames}}.'
      }
      notEnoughBalanceForGas: {
        title: 'Insufficient gas token balance'
        description: "You don't have enough {{feeCurrencies}} to cover gas fees. Please add {{feeCurrencies}} to your wallet to complete this transaction."
      }
      failedToPrepareTransaction: {
        title: 'Failed to prepare transaction'
        description: 'An error occurred while preparing the transaction. See the underlying error for more details.\n\n"{{errorMessage}}"'
      }
      session: {
        failUnsupportedNamespace: {
          title: 'Unsupported chain'
          description: '{{dappName}} would like to connect with a chain not supported by {{appName}}. Please make sure Celo is selected on the dapp side.'
          descriptionV1_74_one: '{{dappName}} would like to connect with a chain not supported by {{appName}}. Please make sure {{supportedNetworkNames}} is selected on the dapp side.'
          descriptionV1_74_other: '{{dappName}} would like to connect with a chain not supported by {{appName}}. Please make sure one of the following is selected on the dapp side: {{supportedNetworkNames}}.'
        }
        warnUnsupportedChains: {
          title: 'Unsupported chain'
          description: '{{dappName}} did not specify Celo as a supported chain. Some features may not work as expected.'
          descriptionV1_74_one: '{{dappName}} did not specify {{supportedNetworkNames}} as a supported chain. Some features may not work as expected.'
          descriptionV1_74_other: '{{dappName}} did not specify any of the following as supported chains: {{supportedNetworkNames}}. Some features may not work as expected.'
        }
        warnSomeUnsupportedMethods: {
          title: 'Unsupported methods'
          description: '{{dappName}} specified some methods that are not supported by {{appName}}. Some features may not work as expected.'
        }
        warnSomeUnsupportedEvents: {
          title: 'Unsupported events'
          description: '{{dappName}} specified some events that are not supported by {{appName}}. Some features may not work as expected.'
        }
      }
    }
    sessionInfo: 'This application may ask to perform the following actions:'
    description: {
      sign: 'Sign Payloads'
      signTransaction: 'Send funds'
      sendTransaction: 'Send funds'
      accounts: 'Read Address'
      decrypt: 'Decrypt Data'
      computeSharedSecret: 'Generate a secret'
    }
    tapToDisconnect: 'Tap to Disconnect'
    sessionsTitle: 'Connected Dapps'
    sessionsSubTitle: 'The following dapps are connected to {{appName}}. You can connect to more dapps by scanning their QR code.'
    disconnect: 'Disconnect'
    disconnectTitle: 'Disconnect {{dappName}}?'
    disconnectBody: 'Are you sure you want to disconnect from {{dappName}}?'
    connectionSuccess: 'Success! Please go back to {{dappName}} to continue'
    inAppConnectionSuccess: 'Connection to {{dappName}} was successful!'
    timeoutTitle: 'Time out!'
    timeoutSubtitle: 'Your connection timed out. Please check your internet connection & try again'
    goBackButton: 'Go Back'
    v2Unsupported: 'This QR code is not supported'
    incomingPaymentRequests: 'Requests from Others'
    incomingPaymentRequestsSummaryTitle: '{{count}} incomplete requests'
    incomingPaymentRequestsSummaryDetails_exactly2Items: '<0></0> and <1></1> are waiting for you'
    incomingPaymentRequestsSummaryDetails_exactly3Items: '<0></0>, <1></1> and one other are waiting for you'
    incomingPaymentRequestsSummaryDetails_moreThan3Items: '<0></0>, <1></1> and others are waiting for you'
    outgoingPaymentRequests: 'Awaiting Payments'
    outgoingPaymentRequestsSummaryTitle: 'Waiting for {{count}} Payments'
    outgoingPaymentRequestsSummaryDetails_exactly2Items: "You're waiting for payments from <0></0> and <1></1>"
    outgoingPaymentRequestsSummaryDetails_exactly3Items: "You're waiting for payments from <0></0>, <1></1> and one other"
    outgoingPaymentRequestsSummaryDetails_moreThan3Items: "You're waiting for payments from <0></0>, <1></1> and others"
    notifications: 'Notifications'
    sent: 'Sent'
    received: 'Received'
    viewAll: 'View All'
    noNotificationsPlaceholder: "You're all caught up!"
    thanksForVerifying: 'Thanks for connecting'
    goldIsWhereYouSave: 'CELO is where you can save Celo Dollars you have'
    dinner: 'Dinner'
    bikeParts: 'Bike Parts'
    groceryRun: 'Grocery run'
    transactionsAreLoading: 'Transactions are loading!'
    pleaseHoldOn: 'Please hold on'
    welcomeToCeloPayments: 'Welcome to {{appName}}'
    letsGetStartedByFirstTransaction: 'Let’s get started by sending your first transaction'
    sendMoney: 'Send Crypto'
    verificationFee: 'Confirmation Fee'
    networkFee: 'Network Fee'
    networkFeeExplanation: {
      '0': "Each week, a very small fee (less than 0.01%) of every user's Celo Dollar Balance is used to keep the Celo Dollar's value stable. To learn more about Celo fees, visit the "
      '1': 'FAQ'
    }
    confirmingTransaction: 'Confirming…'
    confirmingExchange: 'Confirming…'
    paymentFailed: 'Payment Failed'
    loadingActivity: 'Loading your activity feed'
    errorLoadingActivity: {
      '0': 'Unable to load your feed'
      '1': 'Please try again later'
    }
    noTransactionActivity: 'Your activity will appear here'
    noExchangeActivity: 'Your activity will appear here'
    maybeLater: 'Maybe Later'
    balanceNeedUpdating: 'Balance needs updating'
    refreshBalances: 'Refresh Balances'
    escrowedPaymentReminder: 'Pending Invites'
    escrowedPaymentReminderSummaryTitle: '{{count}} Pending Invites'
    escrowedPaymentReminderSummaryDetails_exactly2Items: '<0></0> and <1></1> won’t be able to claim their invites'
    escrowedPaymentReminderSummaryDetails_exactly3Items: '<0></0>, <1></1> and one other won’t be able to claim their invites'
    escrowedPaymentReminderSummaryDetails_moreThan3Items: '<0></0>, <1></1> and others won’t be able to claim their invites'
    escrowedPaymentReminderSmsNoData: "A friendly reminder that you haven't yet redeemed your {{currency}} with {{appName}}! Download the mobile app to get started!"
    testnetAlert: {
      '0': '{{testnet}}'
      '1': "A friendly reminder you're using the {{testnet}} network build - the balances are not real"
    }
    dollarBalance: '<0></0> $t(celoDollars)'
    feedItemAddress: '{{address}}'
    feedItemDepositInfo: '{{comment}}'
    feedItemDepositInfo_noComment: 'Deposit Received'
    feedItemDepositTitle: 'Deposit'
    feedItemFcTransferMobileMoney: 'Mobile Money Transfer'
    feedItemFcTransferBankAccount: 'Bank Account Transfer'
    feedItemFcTransferWithdraw: 'Withdraw {{crypto}}'
    feedItemExchangeTitle: 'CELO'
    feedItemExchangeInfo_boughtGold: 'Bought <0></0> CELO'
    feedItemExchangeInfo_soldGold: 'Sold <0></0> CELO'
    feedItemBoughtCeloTitle: 'Purchased CELO'
    feedItemSoldCeloTitle: 'Sold CELO'
    feedItemExchangeCeloInfo: '{{amount}} @ {{price}}'
    feedItemVerificationFeeTitle: 'Celo'
    feedItemVerificationFeeInfo: '$t(verificationFee)'
    feedItemNetworkFeeTitle: 'Celo'
    feedItemNetworkFeeInfo: 'Network Fee'
    feedItemVerificationRewardTitle: 'Celo'
    feedItemVerificationRewardInfo: 'Confirmer Reward'
    feedItemFailedTransaction: 'Failed Transaction'
    feedItemFaucetTitle: 'Celo'
    feedItemFaucetInfo: '{{faucet}} Faucet'
    feedItemFaucetInfo_noTestnet: 'Faucet'
    feedItemInviteSentTitle: 'Celo'
    feedItemInviteSentInfo: 'Invited {{nameOrNumber}}'
    feedItemInviteSentInfo_noInviteeDetails: '$t(inviteSent)'
    feedItemInviteReceivedTitle: 'Celo'
    feedItemInviteReceivedInfo: '$t(inviteReceived)'
    feedItemSentTitle: '{{displayName}}'
    feedItemSentInfo: '{{comment}}'
    feedItemSentInfo_noComment: 'Payment Sent'
    feedItemCeloRewardReceivedTitle: 'Earned CELO'
    feedItemRewardReceivedTitle: 'Supercharge'
    feedItemRewardReceivedInfo: 'Weekly Rewards'
    feedItemInviteRewardReceivedTitle: '{{appName}}'
    feedItemInviteRewardReceivedInfo: 'Reward Received'
    feedItemReceivedTitle: '{{displayName}}'
    feedItemReceivedInfo: '{{comment}}'
    feedItemReceivedInfo_noComment: 'Payment Received'
    feedItemEscrowSentTitle: '{{nameOrNumber}}'
    feedItemEscrowSentTitle_noReceiverDetails: 'Unknown'
    feedItemEscrowSentInfo: '{{comment}}'
    feedItemEscrowSentInfo_noComment: 'Invite Sent'
    feedItemEscrowReceivedTitle: '{{nameOrNumber}}'
    feedItemEscrowReceivedTitle_noSenderDetails: 'Unknown'
    feedItemEscrowReceivedInfo: '{{comment}}'
    feedItemEscrowReceivedInfo_noComment: 'Escrow Payment Received'
    feedItemGenericTitle: '{{nameOrNumber}}'
    feedItemGenericTitle_noRecipientDetails: 'Unknown'
    feedItemGoldSold: 'Sold'
    feedItemGoldPurchased: 'Purchased'
    feedItemGoldWithdrawal: 'Withdrawal to {{displayName}}'
    feedItemGoldReceived: 'Received from {{displayName}}'
    feedItemSwapPath: '{{token1}} to {{token2}}'
    feedItemJumpstartTitle: 'Live Link'
    feedItemJumpstartSentSubtitle: 'Invitation'
    feedItemJumpstartReceivedSubtitle: 'Funds received'
    transactionHeaderVerificationFee: 'Confirmation'
    transactionHeaderNetworkFee: 'Network'
    transactionHeaderFaucet: 'Faucet'
    transactionHeaderInviteSent: '$t(inviteSent)'
    transactionHeaderInviteReceived: '$t(inviteReceived)'
    transactionHeaderSent: 'Payment Sent'
    transactionHeaderWithdrewCelo: 'CELO Withdrawal'
    transactionHeaderEscrowSent: 'Escrow Payment Sent'
    transactionHeaderReceived: 'Payment Received'
    transactionHeaderCeloDeposit: 'Deposit Received'
    transactionHeaderCeloReward: 'Reward Received'
    transactionHeaderEscrowReceived: 'Escrow Payment Received'
    transactionHeaderNftReceived: 'NFT Received'
    transactionHeaderNftSent: 'NFT Sent'
    feedSectionHeaderRecent: 'Recent'
    cashInBottomSheet: {
      title: 'Add funds to start using {{appName}}!'
      subtitle: 'Your account is currently empty'
      addFunds: 'Add Funds'
      titleRamp: 'Add {{currency}} to start using {{appName}}'
      subtitleRamp: 'Add funds with low fees through one of our trusted external providers.'
    }
    balances: 'Assets'
    totalBalanceWithLocalCurrencySymbol: '{{localCurrencySymbol}}{{totalBalance}} Total'
    totalValue: 'Total Balance'
    viewBalances: 'View Assets'
    totalAssets: 'My assets'
    totalAssetsInfo: 'Includes estimated total of wallet assets and dapp positions'
    assetsSegmentedControl: {
      walletAssets: 'Wallet assets'
      dappPositions: 'Dapp positions'
    }
    open: 'Open'
    nftViewer: 'NFT Viewer'
    whatTotalValue: {
      title: 'What does Total Balance mean?'
      body: 'Your Total Balance is an approximate sum of all your {{appName}} assets. Your Total Balance will change as prices fluctuate. It is updated every 10 minutes.\nSome assets may not be shown in the Total Balance because the price is unavailable at the time of calculation.'
      dismiss: 'Dismiss'
    }
    supportExportLogsStart: 'Exporting logs...'
    supportExportLogsFailed: 'Failed to export logs: {{error}}'
    supportEmailSubject: '{{appName}} support for {{user}}'
    personaAccountEndpointFail: 'Identity verification is not currently available. Please try again later'
    getBankAccountsFail: 'Unable to retrieve your linked bank accounts. Please try again later'
    deleteBankAccountFail: 'Unable to delete your linked bank account. Please try again later'
    linkBankAccountScreen: {
      tryAgain: 'Try Again'
      verifying: {
        title: 'Verifying your Identity'
      }
      completed: {
        title: 'Verification complete'
        description: 'We successfully verified your identity. Please continue to finish linking your bank account.'
        descriptionStep2NotEnabled: "We successfully verified your identity. We'll let you know when you can finish linking your bank account."
        descriptionRegionNotSupported: "We successfully verified your identity. Your region is not currently supported. We'll let you know when you can finish linking your bank account."
      }
      failed: {
        title: 'Verification denied'
        description: 'We were unable to verify your identity. Please try again or contact support to continue.'
        contactSupportPrefill: 'My identity verification was denied'
      }
      pending: {
        title: 'Review in progress'
        description: 'Your information has been received and is being reviewed.'
      }
      begin: {
        label: 'Step 1'
        title: 'Verify your Identity'
        description: 'Adding crypto with a bank account is easy. This step will take about 5 minutes.'
        cta: 'Begin'
      }
      stepTwo: {
        label: 'Step 2'
        disabledTitle: 'Link a bank account'
        disabledDescription: "Bank account support coming soon! We'll let you know when you can connect your bank account to {{appName}}."
        disabledCta: 'Coming Soon!'
        title: 'Enter Bank Details'
        description: "You're almost done! Enter bank details to link your account to {{appName}}."
        cta: 'Link Bank Account'
        error: {
          title: 'Unable to link bank account.'
          description: 'Please try to link your bank account again, or contact support.'
          contactSupportPrefill: 'I was unable to link my bank account to {{appName}}'
        }
      }
    }
    bankAccountsScreen: {
      header: 'Linked Bank Accounts'
      add: 'Add new bank account'
      delete: 'Delete'
    }
    syncingBankAccount: 'Syncing bank account...'
    keepAppOpen: 'Please keep the app open!'
    linkBankAccountSettingsTitle: 'Linked Bank Accounts'
    linkBankAccountSettingsValue: 'Get Access'
    linkBankAccountSettingsValue2: 'Add New'
    connectPhoneNumber: {
      title: 'Connect phone number to continue'
      body: 'Your phone number needs to be connected to verify your identity and link your bank account.'
      buttonText: 'Connect'
    }
    outOfSyncBanner: {
      title: 'Error fetching tokens.'
      message: 'Your balances may not be up to date.'
      button: 'Refresh'
    }
    dappsScreen: {
      title: 'Dapps'
      titleDiscover: 'Discover'
      exploreDapps: 'Explore Dapps'
      exploreAll: 'Explore All'
      message: 'Explore ways to use your assets'
      errorMessage: 'There was an error loading dapps'
      featuredDapp: 'Featured'
      allDapps: 'All'
      favoriteDapps: 'My Favorites'
      mostPopularDapps: 'Most Popular'
      favoriteDappsAndAll: 'My Favorites & All'
      searchPlaceHolder: 'Search dapps'
      noFavorites: {
        title: 'No favorites added'
        description: 'Keep track of your most-used Dapps by tapping the star icon to add it as a favorite'
      }
      favoritedDappToast: {
        message: 'Added as a favorite'
        labelCTA: 'View Favorites'
        messageWithDappName: '{{dappName}} added as a favorite'
      }
      emptyResults: {
        message: '<0>{{filter}}</0> filter applied'
        removeFilter: 'Remove filter'
        searchMessage: 'No matching results found for <0>"{{searchTerm}}"</0>'
      }
    }
    dappRankings: {
      title: 'Dapp rankings'
      description: 'Discover the most favorited dapps by others in the {{appName}} community'
    }
    dappShortcuts: {
      rewards: {
        title: 'Your rewards'
        description: 'Claim available rewards from open dapp positions'
      }
      claimRewardsScreen: {
        title: 'Your rewards'
        description: 'Now you can claim rewards from open dapp positions directly in {{appName}}!'
        claimButton: 'Claim'
        claimedLabel: 'Claimed'
        rewardLabel: 'Available reward'
        claimSuccess: 'Success! You claimed a reward'
        confirmingReward: 'CONFIRMING'
      }
      claimRewardFailure: 'There was an error claiming your reward, please try again later'
    }
    dappsScreenHelpDialog: {
      title: 'What are dapps?'
      message: 'Dapps (decentralized apps) provide new ways to use your crypto, earn rewards, and explore Web3.\n\nConnect {{appName}} to a dapp to get started.'
      dismiss: 'Dismiss'
    }
    dappsScreenBottomSheet: {
      title: '{{dappName}} is an external application'
      message: 'You are about to open an application not operated by {{appName}}.\n\n{{appName}} makes no representations about this application. Use at your own risk.'
      button: 'Go to {{dappName}}'
    }
    dappsScreenInfoSheet: {
      title: 'What is a dapp?'
      description: 'A dapp (or decentralized application) is an app that is built and run on top of a blockchain network. This means that no single company or organization manages or stores your data.\n\nDapps vary by the services they offer. Examples of these services include decentralized exchanges, lending, borrowing, swapping, storing NFTs.'
      buttonLabel: 'Tell me more'
    }
    dappsDisclaimerAllDapps: '{{appName}} is not affiliated with these dapps and makes no representations or claims in using them. Please acknowledge the risk before using a dapp by reviewing the user agreement or privacy policy.'
    dappsDisclaimerSingleDapp: "{{appName}} is not affiliated with this dapp and makes no representations in using it. Always review a dapp's user agreement or privacy policy."
    dappsDisclaimerUnlistedDapp: "This dapp is not listed in {{appName}}. {{appName}} is not affiliated with this dapp and makes no representations in using it. Always review a dapp's user agreement or privacy policy."
    recentlyUsedDapps: 'Recently Used Dapps'
    favoritedDapps: 'Favorited Dapps'
    allDapps: 'All Dapps'
    rewards: 'Rewards'
    supercharge: 'Supercharge'
    others: 'Others'
    nomSpaceRecipient: 'Nomspace: {{name}}'
    lastDay: 'Last 24 hrs'
    noMoreTransactions: 'There are no more transactions'
    selectProviderScreen: {
      somePaymentsUnavailable: 'Purchases are powered by our partner providers. Some payment methods are unavailable in your region.'
      disclaimerWithSomePaymentsUnavailable: 'Payments are powered by network partners. Fees may vary. Some payment methods are unavailable in your region. <0>Learn more.</0>'
      disclaimer: 'Payments are powered by network partners. Fees may vary. <0>Learn more.</0>'
      learnMore: 'Learn more.'
      whyMissingPayments: "Why don't I see more payment methods?"
      dismiss: 'Dismiss'
      missingPaymentsExplained: "Not all payment methods are available in every country.\n\nAvailability depends on each provider's geographical coverage."
      cryptoExchange: 'Cryptocurrency Exchange'
      feesVary: 'Fees Vary'
      viewExchanges: 'View Exchanges'
      depositFrom: 'Deposit from'
      cryptoExchangeOrWallet: 'Crypto Exchange or Wallet'
      card: 'Credit / Debit Card'
      bank: 'Bank Account'
      mobileMoney: 'Mobile Money'
      airtime: 'Airtime'
      minFee: 'Min Fee'
      numProviders: '{{count}} Providers'
      fee: 'Fee'
      idRequired: 'ID Required'
      mobileCarrierRequirement: '{{carrier}} Required'
      numDays: '1-3 Days'
      oneHour: 'Less Than 1 Hour'
      xHours: 'Less Than {{upperBound}} Hours'
      xToYHours: '{{lowerBound}}-{{upperBound}} Hours'
      xDays: 'Less Than {{upperBound}} Days'
      xToYDays: '{{lowerBound}}-{{upperBound}} Days'
      bestRate: 'Best Rate'
      header: 'Select Payment Method'
      newLabel: 'NEW'
      newDialog: {
        title: 'New ways to transfer funds'
        body: 'We are releasing new ways to transfer funds to and from bank accounts, directly from the {{appName}} app.\n\nIf you are seeing this, it means you are able to access this feature in your region.'
        dismiss: 'Dismiss'
      }
      cashIn: {
        amountSpentInfo: "You'll pay <0></0> including fees"
      }
      cashOut: {
        amountSpentInfo: "You'll withdraw <0></0> including fees"
      }
      receiveAmount: 'Receive <0></0>'
    }
    fiatConnectLinkAccountScreen: {
      bankAccount: {
        header: 'Set up Bank Account'
        bodyTitle: 'Set Up Bank Account'
        description: 'Enter Bank Account details to transfer funds. These services will be provided to you by <0>{{providerName}}</0>.\n\nBy clicking continue, you agree to their <1>Terms and Conditions</1> and <2>Privacy Policy</2>'
      }
      mobileMoney: {
        header: 'Set up Mobile Money'
        bodyTitle: 'Set Up Mobile Money'
        description: 'Enter mobile money details to transfer funds. These services will be provided to you by <0>{{providerName}}</0>.\n\nBy clicking continue, you agree to their <1>Terms and Conditions</1> and <2>Privacy Policy</2>'
      }
      continue: 'Continue'
    }
    fiatConnectKycLandingScreen: {
      stepOne: 'Step 1'
      stepTwo: 'Step 2'
      title: 'Verify your Identity'
      description: 'This step will take about 5 minutes.'
      disclaimer: 'You acknowledge and agree that your Personal Data will be provided to us and shared with third-parties for verification purposes as stated in the <0>Privacy Policy</0>'
      button: 'Set up ID Verification'
    }
    fiatConnectKycStatusScreen: {
      contactSupportPrefill: "I'm having trouble verifying my identity with {{appName}}."
      contactSupport: 'Contact Support'
      pending: {
        title: 'Your ID verification is in review.'
        description: 'After the review is complete, you can return to the Add & Withdraw page to complete your transaction.'
        close: 'Close'
      }
      denied: {
        switch: 'Switch withdraw method'
        retryable: {
          title: 'ID verification was not accepted.'
          description: 'Please verify again or try a different way to withdraw funds.'
          tryAgain: 'Verify again'
        }
        final: {
          title: 'Verification denied.'
          description: 'Please try a different way to withdraw funds, or contact support.'
        }
      }
      expired: {
        title: 'ID verification expired.'
        description: 'Please verify again or try a different way to withdraw funds.'
        tryAgain: 'Verify again'
        switch: 'Switch withdraw method'
      }
      tryAgainFailed: 'There was an error clearing KYC information. Please try again'
    }
    fiatConnectReviewScreen: {
      transactionDetails: 'Transaction Details'
      paymentMethodVia: 'Connected via {{providerName}}'
      receiveAmount: 'You will receive'
      bankFeeDisclaimer: 'Your bank may charge additional fees for your transfer.'
      mobileMoneyFeeDisclaimer: 'Your mobile money operator may charge additional fees for your transfer.'
      cashIn: {
        header: 'Review Add Funds'
        button: 'Add Funds'
        transactionDetailsAmount: 'Total Deposit'
        transactionDetailsAmountConverted: 'Amount Deposited'
        paymentMethodHeader: 'Deposit From'
      }
      cashOut: {
        header: 'Review'
        button: 'Withdraw Funds'
        transactionDetailsAmount: 'Total Withdraw'
        transactionDetailsAmountConverted: 'Amount Withdrawn'
        paymentMethodHeader: 'Withdraw To'
      }
      failedRefetch: {
        title: 'Connection lost!'
        description: 'We were not able to establish a connection between your accounts.\n\nThis may be due to a poor internet connection or server issue. Please try to reconnect.'
        tryAgain: 'Try Again'
      }
      quoteExpiredDialog: {
        title: 'Review amounts & fees'
        body: 'Crypto amounts & fees can change due to fluctuations in the crypto market.\n\nPlease review your final amount & fees before submitting'
        continue: 'Continue'
      }
    }
    fiatConnectStatusScreen: {
      tryAgain: 'Try Again'
      stillProcessing: "We're still processing your transaction. Please wait."
      cashOut: {
        cancel: 'Cancel Withdrawal'
        contactSupportPrefill: "I'm having trouble withdrawing my funds."
      }
      cashIn: {
        cancel: 'Cancel Add Funds'
        contactSupportPrefill: "I'm having trouble adding funds to my {{appName}} wallet."
      }
      success: {
        header: 'Success'
        title: 'Your funds are on their way!'
        description: 'Your transaction request has been sent & your funds will arrive in {{duration}}.'
        descriptionWithin1Hour: 'Your transaction request has been sent & your funds will arrive within 1 hour.'
        descriptionWithinXHours: 'Your transaction request has been sent & your funds will arrive within {{upperBound}} hours.'
        descriptionInXtoYHours: 'Your transaction request has been sent & your funds will arrive in {{lowerBound}}-{{upperBound}} hours.'
        descriptionWithinXDays: 'Your transaction request has been sent & your funds will arrive within {{upperBound}} days.'
        descriptionXtoYDays: 'Your transaction request has been sent & your funds will arrive in {{lowerBound}}-{{upperBound}} days.'
        baseDescription: 'Your transaction request has been sent.'
        txDetails: 'View on CeloExplorer'
        viewOnCeloScan: 'View on CeloScan'
        continue: 'Continue'
      }
      requestNotCompleted: {
        title: 'Your request could not be completed.'
        description: 'Your funds were not able to be transferred. Please try again or contact our support team for help.'
      }
      txProcessing: {
        title: 'Your transaction is still processing.'
        description: 'This might be due to poor internet connection. Check the block explorer for updates.'
      }
    }
    fiatExchangeFlow: {
      cashIn: {
        fiatExchangeTitle: 'Add Funds'
        fiatExchangeSubtitle: 'Fund your {{appName}} account from a bank, card or exchange.'
        selectCurrencyTitle: 'Add Funds'
        exchangeAmountTitle: 'Add {{currency}}'
        selectProviderHeader: 'Select Payment Method'
        depositExchangeTitle: 'Deposit Crypto'
      }
      cashOut: {
        fiatExchangeTitle: 'Withdraw Funds'
        fiatExchangeSubtitle: 'Get funds out of {{appName}} and into a bank account, card, crypto exchange or to mobile money.'
        selectCurrencyTitle: 'Withdraw Funds'
        exchangeAmountTitle: 'Withdraw {{currency}}'
        selectProviderHeader: 'Select Withdraw Method'
        withdrawExchangeTitle: 'Withdraw Crypto'
      }
      spend: {
        fiatExchangeTitle: 'Spend Funds'
        fiatExchangeSubtitle: 'Spend on gift cards and other purchases.'
        selectCurrencyTitle: 'Spend Funds'
      }
      exchange: {
        informational: 'To prevent loss of funds, use this address on exchanges or assets compatible with the following networks: <0>{{networks}}</0>'
        copyAddress: 'Copy Address'
        informationText: 'Only use exchanges or assets <0>compatible with networks supported by {{appName}}</0> to prevent loss of funds'
        bottomSheetTitle: 'What exchanges can I use to deposit funds?'
        bottomSheetInfo: 'Double check that you are sending assets that are compatible with the the networks supported by {{appName}}.'
      }
    }
    fiatDetailsScreen: {
      headerBankAccount: 'Enter Bank Information'
      headerMobileMoney: 'Enter Mobile Details'
      headerSubTitle: 'Powered by {{provider}}'
      selectedPaymentOption: 'Selected payment option'
      addFiatAccountSuccess: 'Your account has been connected to {{provider}}.'
      addFiatAccountResourceExist: 'You have already connected this account to {{provider}}.'
      addFiatAccountFailed: 'Your account was not connected to {{provider}}, please try again or contact support.'
      selectItem: 'Select an option...'
      selectDone: 'Done'
      submitAndContinue: 'Submit & Continue'
    }
    fiatAccountSchema: {
      institutionName: {
        label: 'Bank Name'
        placeholderText: 'Enter Bank Name'
      }
      accountNumber: {
        label: 'Account Number'
        placeholderText: 'Enter Account Number'
        errorMessageDigitLength: 'Account number must be {{length}} digits'
        errorMessageDigit: 'Account number must contain only digits'
        notExactMatch: 'Account number doesn\'t match "{{expected}}"'
      }
      mobileMoney: {
        operator: {
          label: 'Network'
          placeholderText: 'Enter Mobile Network Operator'
        }
        mobile: {
          label: 'Phone Number'
          placeholderText: '+234123234566'
          errorMessage: 'Invalid Phone Number format'
        }
        mobileDialog: {
          title: 'Phone Number'
          body: 'Use the phone number registered with your mobile money provider. This might not be the same as your {{appName}} phone number.\n\nPhone numbers must include country code displayed next to the phone number.'
          dismiss: 'Dismiss'
        }
      }
      ibanNumber: {
        label: 'IBAN'
        placeholderText: 'Enter IBAN Number'
        errorMessage: 'Invalid IBAN'
      }
      ifsc: {
        label: 'IFSC'
        placeholderText: 'Enter IFSC'
        errorMessage: 'Invalid IFSC'
      }
      pix: {
        keyType: {
          label: 'PIX Key Type'
        }
        key: {
          placeholderText: 'Enter PIX key'
          errorMessage: 'Invalid PIX key'
        }
      }
    }
    webView: {
      openExternal: 'Open in External Browser'
    }
    dappNotListed: 'This dapp is not listed in {{appName}}. Dapps are third party applications. Use at your own risk.'
    swapScreen: {
      title: 'Swap'
      review: 'Review'
      confirmSwap: 'Confirm Swap'
      swapFrom: 'FROM'
      swapTo: 'TO'
      insufficientFunds: 'Insufficient {{token}} balance. Try a smaller amount or choose a different asset.'
      fetchSwapQuoteFailed: "Sorry for the delay! It's taking longer than usual to get the best exchange rate. Please try again in a few minutes."
      disclaimer: 'Best rate determined by decentralized sources. <0>Learn more</0>'
      swapFromTokenSelection: 'SWAP FROM'
      swapToTokenSelection: 'SWAP TO'
      tokenUsdValueUnknown: '-'
      unsupportedSwapTokens: "The selected tokens aren't supported by our swap providers."
      selectTokenLabel: 'Select token'
      tokenBottomSheetTitle: 'Select Token'
      onNetwork: 'on {{networkName}}'
      crossChainNotification: 'Swapping tokens between different networks'
      crossChainFeeWarning: {
        title: 'You need more {{tokenSymbol}}'
        body: 'You need more {{tokenSymbol}} on {{networkName}} to pay for cross-chain swap fees. Add {{tokenAmount}} more {{tokenSymbol}} to continue.'
      }
      insufficientBalanceWarning: {
        title: 'You need more {{tokenSymbol}}'
        body: 'Insufficient {{tokenSymbol}} balance. Try a smaller amount or choose a different asset.'
      }
      unsupportedTokensWarning: {
        title: 'Incompatible Selection'
        body: 'The tokens selected cannot be swapped for each other. Please choose another token that is compatible with your selection.'
      }
      decreaseSwapAmountForGasWarning: {
        title: 'You need more {{feeTokenSymbol}} for gas'
        body: 'Add {{feeTokenSymbol}} to cover your gas fees or adjust the amount you are swapping'
        cta: 'Swap smaller amount'
      }
      switchedToNetworkWarning: {
        title: 'You switched to the {{networkName}} network'
        body_swapFrom: 'Select a token to swap from on the {{networkName}} network to continue.'
        body_swapTo: 'Select a token to swap to on the {{networkName}} network to continue.'
      }
      maxSwapAmountWarning: {
        title: 'Swapping the MAX amount'
        titleV1_74: 'Swapping the MAX amount'
        body: 'Make sure you have CELO in your wallet to cover gas fees for future transactions'
        bodyV1_74: 'Make sure you have {{tokenSymbol}} in your wallet to cover gas fees for future transactions'
        learnMore: 'Learn more'
      }
      priceImpactWarning: {
        title: 'Before you swap'
        body: 'Swapping these assets may result in an unfavorable exchange rate. If you lower the amount, you may get a better rate.'
      }
      noUsdPriceWarning: {
        title: '{{localCurrency}} price unavailable'
        description: "We do not have a {{localCurrency}} price for {{tokenSymbol}}, which might mean that it's not widely traded. {{appName}} is not responsible for any losses incurred if you choose to proceed."
        ctaConfirm: 'I understand'
        ctaDismiss: 'Cancel'
      }
      missingSwapImpactWarning: {
        title: 'Before you swap'
        body: "We can't estimate the value of this swap. {{appName}} is not responsible if you choose to proceed."
      }
      confirmSwapFailedWarning: {
        title: 'Something went wrong'
        body: 'The network speed is slow or there is an unknown error. Please try again later'
      }
      estimatedExchangeRate: 'Estimated rate ≈ <0>0.00</0>'
      needDecreaseSwapAmountForGas: {
        title: 'Insufficient {{tokenSymbol}} balance'
        description: "You don't have enough {{tokenSymbol}} to cover gas fees. Would you like to swap a smaller amount?"
        confirmDecreaseButton: 'Swap smaller amount'
      }
      notEnoughBalanceForGas: {
        title: 'Insufficient gas token balance'
        description: "You don't have enough {{feeCurrencies}} to cover gas fees. Please add {{feeCurrencies}} to your wallet to complete this swap."
        dismissButton: 'Dismiss'
      }
      transactionDetails: {
        estimatedNetworkFee: 'Estimated Network Fee'
        maxNetworkFee: 'Max Network Fee'
        networkFee: '{{networkName}} Network Fee'
        networkFeeNoNetwork: 'Network Fee'
        swapFee: '{{appName}} Fee'
        swapFeeWaived: 'Free'
        appFee: '{{appName}} Fee'
        appFeeValue: '<0></0> <1>(<0></0>)</1>'
        appFeeValue_withoutPriceUsd: '<0></0>'
        appFeeValue_free: 'Free'
        appFeeValue_placeholder: '-'
        appFeeInfo: '{{appName}} Fee\n\nThe {{appName}} fee of {{appFeePercentage}}% is designed to enhance your experience by ensuring fast, reliable, and secure swaps.'
        appFeeInfo_free: '{{appName}} Fee\n\nThis swap is free of charge.'
        appFeeInfo_placeholder: '{{appName}} Fee\n\nThe fee is calculated based on the quote you receive.'
        appFeeInfoDismissButton: 'Got it'
        slippagePercentage: 'Slippage Tolerance'
        networkFeeInfo: 'You are swapping on the {{networkName}} Network.\n\nThis estimated network fee is required to conduct a transaction on the {{networkName}} Network. This fee secures your transaction and goes towards keeping the network operational.'
        networkFeeInfoV1_76: 'You are swapping on the {{networkName}} Network.\n\nA network fee is required to conduct a transaction on the {{networkName}} Network. This fee secures your transaction and is paid to network validators.\n\nSince network conditions determine the exact amount, the listed estimate is what we expect the actual fee to be. The fee will not exceed the max fee amount.'
        slippageToleranceInfo: 'Slippage tolerance\n\nYour swap will execute within the slippage tolerance percentage. If the price changes more than the slippage tolerance, {{appName}} protects you by preventing the trade from executing.'
        slippageToleranceInfoV1_90: 'Your swap will execute within the slippage tolerance percentage. If the price changes more than the slippage tolerance, {{appName}} protects you by preventing the trade from executing.'
        networkFeeInfoDismissButton: 'Got it'
        exchangeRate: 'Exchange Rate'
        exchangeRateInfo: "Exchange Rate\n\nWe've found the best exchange rate for you. Your trade will be completed at a price within {{slippagePercentage}}% of the estimate or the transaction will be cancelled and funds returned to your wallet."
        exchangeRateInfoV1_90: "We've found the best exchange rate for you. Your trade will be completed at a price within {{slippagePercentage}}% of the estimate or the transaction will be cancelled and funds returned to your wallet."
        exchangeRateInfo_withAppFee: "Exchange Rate\n\nWe've found the best exchange rate for you. Your trade will be completed at a price within {{slippagePercentage}}% of the estimate or the transaction will be cancelled & funds returned to your wallet.\n\nThe estimated rate includes a {{appName}} fee of {{appFeePercentage}}%."
        exchangeRateInfoDismissButton: 'Got it'
        estimatedValue: 'Estimated Value'
        estimatedTransactionTime: 'Estimated Transaction Time'
        estimatedTransactionTimeInMinutes: '≈ {{minutes}} min'
        estimatedTransactionTimeInfo: 'The time to complete the transaction is determined by the provider.\n\nIf you are swapping between different chains, the transaction could take a bit longer to complete.'
        infoDismissButton: 'Got it'
        fees: 'Fees'
        feesCalculationError: 'Unable to calculate fees'
        estimatedCrossChainFee: 'Estimated cross-chain fees'
        maxCrossChainFee: 'Max cross-chain fees'
        feesBreakdown: 'Breakdown'
        feeAmount: '≈ {{localCurrencySymbol}}{{feeAmountInLocalCurrency}} ({{tokenAmount}} {{tokenSymbol}})'
        feeAmount_noFiatPrice: '{{tokenAmount}} {{tokenSymbol}}'
        feesMoreInfoLabel: 'More information'
        feesInfo_sameChain: 'The network fee is required by the network to process the transaction.'
        feesInfo_crossChain: 'The network fee is required by the network to process the transaction. The cross-chain fee is charged by the cross-chain provider.'
        feesInfo_sameChainWithAppFee: 'The network fee is required by the network to process the transaction. The {{appName}} fee of {{appFeePercentage}}% is charged for your use of our product.'
        feesInfo_crossChainWithAppFee: 'The network fee is required by the network to process the transaction. The cross-chain fee is charged by the cross-chain provider. The {{appName}} fee of {{appFeePercentage}}% is charged for your use of our product.'
      }
      fundYourWalletBottomSheet: {
        title: 'Fund your wallet'
        description: 'Before you can swap tokens you will need to fund your wallet by buying crypto or transferring tokens.'
        addFundsButton: 'Add Funds'
      }
    }
    swapTransactionDetailPage: {
      swapFrom: 'Swap from'
      swapTo: 'Swap to'
      rate: 'Rate'
      network: 'Network'
      networkValue: '{{fromNetwork}} → {{toNetwork}}'
      estimatedFee: 'Est Network Fee'
      networkFee: 'Network Fee'
      viewOnExplorer: 'View on CeloExplorer'
    }
    swapReviewScreen: {
      title: 'Review Swap'
      complete: 'Complete Swap'
      swapFrom: 'Swap From'
      swapTo: 'Swap To'
      transactionDetails: 'Transaction Details'
      estimatedGas: 'Estimated Gas'
      swapSubmitError: 'Sorry, we were unable to complete your swap. Please try again or contact support.'
      swapFee: '{{appName}} Fee'
      swapFeeTitle: 'What is the {{appName}} Fee?'
      swapFeeBody: 'The {{appName}} fee is the fee that you pay to swap tokens on {{appName}}. \n\n The fee is {{swapFee}}% of the amount you are exchanging. \n\n {{appName}} fees are free for the next few months.'
      swapFeeBodyFree: 'The {{appName}} fee is the fee that you pay to swap tokens on {{appName}}. {{appName}} fees are free for the next few months.'
      estimatedAmountTitle: 'Estimated Amount'
      estimatedAmountBody: 'Conversions take place on a third party decentralized exchange that finds you the best rate for your swap. \n\n Your trade will be completed at a price within {{slippagePercent}}% of the estimate or the transaction will be cancelled & funds returned to your wallet.'
      free: 'Free'
    }
    SwapExecuteScreen: {
      swapPending: 'Swap Pending'
      swapSuccess: 'Swap Successful!'
      swapError: 'Swap Error'
      exchangeRateSubtext: 'Finding the best exchange rate...'
      approvingSubtext: 'Approving funds...'
      completingSubtext: 'Completing swap...'
      swapAgain: 'Swap Again'
      swapPriceModal: {
        title: 'Prices have changed'
        action: 'Continue'
        body: 'Crypto amounts & fees can change due to fluctuations in the crypto market. \n\n Please review your final amount & fees and resubmit.'
      }
      swapCompleteSection: {
        title: 'Swap successful'
        subtitle: 'Your swapped assets will appear in your wallet shortly'
        done: 'Done'
      }
      swapErrorSection: {
        title: 'We couldn’t complete your swap'
        subtitle: 'Your assets are safe in your wallet.\nPlease try again.'
        contactSupport: 'If you need additional help, you can contact\n<0>customer support<0>'
      }
      swapActionBar: {
        tryAgain: 'Try Again'
        done: 'Done'
        swapAgain: 'Swap Again'
      }
      swapErrorModal: {
        title: 'We couldn’t complete this transaction.'
        body: 'Please wait and try again later or contact our support team for help.'
        swapRestart: 'Dismiss'
        contactSupport: 'Contact Support'
      }
    }
    inviteModal: {
      title: 'Looks like {{contactName}} doesn’t have a {{appName}} wallet yet.'
      body: 'You can still invite them to {{appName}}, or try to send a payment to their wallet address or nom.space.'
      sendInviteButtonLabel: 'Send Invite'
      shareMessage: "Hi! I've been using {{appName}} as my crypto wallet and I want to invite you to check it out. Once you download the app and connect your phone number, we both get a special NFT. Use this link: {{link}}"
      rewardsActive: {
        title: 'Invite {{contactName}} to {{appName}} and you’ll both receive NFTs!'
        body: "Looks like {{contactName}} isn't on {{appName}}. You can still send a payment if you know their wallet address, or send an invite instead. \n\n After they download the wallet and connect their phone number, you’ll both get an exclusive NFT."
      }
      rewardsActiveCUSD: {
        title: 'Invite {{contactName}} to {{appName}} and get 0.50 cUSD'
        body: 'Looks like {{contactName}} isn’t on {{appName}}. You can still send a payment if you know their wallet address, or send an invite instead. \n\n After they download {{appName}}, connect their phone number, add funds and keep them in their wallet for 7 days, you will both get 0.50 cUSD while funds last.'
      }
    }
    celoNews: {
      headerTitle: 'Updates'
      headerDescription: 'Learn about use cases, pilots & technical updates on the Celo blog.'
      readMoreButtonText: 'Read more on the blog'
      loadingError: "Sorry, we couldn't load the latest updates. Please try again later."
      retryButtonText: 'Retry'
    }
    chooseYourAdventure: {
      header: 'Welcome to {{appName}}'
      subtitle: 'What would you like to do first?'
      later: "I'll explore later"
      options: {
        add: 'Add funds to your wallet'
        dapp: 'Find ways to use crypto'
        earn: 'Explore earning opportunities'
        profile: 'Build your profile'
        learn: 'Learn about Celo'
        learnPoints: 'Learn about {{appName}} Points'
      }
    }
    reverifyUsingCPVHomecard: {
      description: 'Reconnect your number to send, receive and get rewards on your crypto'
      buttonLabel: 'Reconnect number'
    }
    profileScreen: {
      generateName: 'Generate a name'
      namePlaceholder: 'Select a name, like "{{exampleName}}"'
      profilePictureDisclaimer: 'Customize {{appName}} with your profile picture. Your image remains private, it is never shared or uploaded.'
    }
    tokenBottomSheet: {
      searchAssets: 'Search Assets'
      noTokenInResult: 'No matching results found for <0>"{{searchTerm}}"</0>'
      noFilterSearchResults: 'No assets found matching "{{searchTerm}}" in the following categories: {{filterNames}}'
      noFilterResults: 'No assets found matching the following categories: {{filterNames}}'
      noSearchResults: 'No assets found matching "{{searchTerm}}"'
      filters: {
        myTokens: 'My tokens'
        popular: 'Popular'
        recentlySwapped: 'Recently swapped'
        network: '{{networkName}} Network'
        selectNetwork: 'Network'
        stablecoins: 'Stablecoins'
        gasTokens: 'Gas Tokens'
        tokens: 'Token'
      }
    }
    homeActions: {
      add: 'Buy'
      receive: 'Receive'
      request: 'Request'
      send: 'Send'
      swap: 'Swap'
      withdraw: 'Withdraw'
    }
    nftGallery: {
      title: 'Collectibles'
      noNfts: 'Your NFTs will display here once you have one in your wallet'
    }
    nftInfoCarousel: {
      viewOnCeloExplorer: 'View on Celo Explorer'
      attributes: 'Attributes'
      description: 'Description'
      noNftsFound: 'No NFTs found'
      nftImageLoadError: 'Unable to display this NFT'
    }
    nftsLoadErrorScreen: {
      loadErrorTitle: 'There is an issue loading NFTs'
      loadErrorSubtitle: 'Your assets are safe. Please try again.'
      contactSupport: 'If you need additional help you can \n<0>Contact support</0>'
    }
    hooksPreview: {
      modal: {
        title: 'Hooks Preview Mode'
        message: "Please confirm that you'd like to enable preview mode for hooks.\n\nThis feature is only intended for developers building hooks. If you're not a developer or didn't trigger this action, DO NOT CONFIRM."
        cancel: 'Cancel'
        confirm: 'Confirm'
      }
      invalidApiUrl: 'Invalid hooks preview API URL'
      bannerTitle: 'Hooks preview enabled, tap to disable'
    }
    assets: {
      claimRewards: 'Claim Rewards'
      bridge: 'Bridged via {{bridge}}'
      networkName: '{{networkName}} Network'
      tabBar: {
        tokens: 'Tokens'
        collectibles: 'Collectibles'
        dappPositions: 'Dapp Positions'
      }
      importToken: 'Import'
      importTokens: 'Import Tokens'
    }
    notificationCenterSpotlight: {
      message: 'Introducing a new way to claim rewards, view alerts, and see updates in one place'
      cta: 'Got it'
    }
    tokenDetails: {
      yourBalance: 'Your balance'
      learnMore: 'Learn more about {{tokenName}}'
      priceUnavailable: 'Price Unavailable'
      priceDeltaSuffix: 'Today'
      actions: {
        send: 'Send'
        swap: 'Swap'
        add: 'Buy'
        withdraw: 'Withdraw'
        more: 'More'
      }
      moreActions: 'More Actions'
      actionDescriptions: {
        send: 'Use any Celo address, domain, phone number, etc.'
        sendV1_74_one: 'Use any {{supportedNetworkNames}} address, domain, phone number, etc.'
        sendV1_74_other: 'Use any address, domain, phone number on the following networks: {{supportedNetworkNames}}'
        swap: 'Swap your tokens without leaving your wallet'
        add: 'Buy tokens using one of our trusted providers'
        withdraw: 'Transfer tokens to a bank account, mobile money, gift card etc.'
      }
    }
    tokenImport: {
      title: 'Import Token'
      notification: 'Anyone can create a token, including fake versions of existing tokens. Verify your token address is correct before you import.'
      input: {
        tokenAddress: 'Token Address'
        tokenAddressPlaceholder: '0x…'
        tokenSymbol: 'Token Symbol'
        network: 'Network'
      }
      error: {
        invalidAddress: 'Invalid token address. Please review it'
        invalidToken: 'Invalid token. Try again or contact support'
        tokenAlreadySupported: 'This token is already supported'
      }
      importSuccess: 'Successfully imported {{tokenSymbol}} token'
      importButton: 'Import'
    }
    sendSelectRecipient: {
      searchText: 'Search by name, phone, wallet...'
      paste: 'Paste from clipboard'
      title: 'Select a recipient'
      contactsTitle: 'Select a contact'
      recents: 'Recents'
      results: 'Results'
      qr: {
        title: 'Scan or Show QR Code'
        subtitle: 'Quickly find addresses on {{appName}}'
      }
      invite: {
        title: 'Send crypto to your friends'
        subtitle: 'Send funds or an invite to your contacts'
      }
      jumpstart: {
        title: 'Send with a Live Link'
        subtitle: 'Share a link to send crypto like a text'
      }
      getStarted: {
        title: 'Ways to send funds on {{appName}}'
        subtitle: 'GET STARTED'
        options: {
          one: {
            title: 'Wallet address'
            subtitle: 'Enter a network compatible wallet address (ex. 0x123...abcde)'
          }
          two: {
            title: 'Phone Number'
            subtitle: "Send directly to someone's phone number if they have {{appName}}"
          }
          three: {
            title: 'ENS'
            subtitle: "Send assets to someone's ENS handle"
          }
          four: {
            title: 'Profile Name'
            subtitle: 'You can search for existing users on {{appName}}'
          }
        }
      }
      enableContactsModal: {
        title: 'Enable contacts to continue'
        description: 'Please go to settings to update your contacts and start sending to friends'
      }
      connectPhoneNumberModal: {
        title: 'Connect your phone number'
        description: 'You need to connect your phone number so you can start sending crypto to your friends'
      }
      unknownAddressInfo: 'Please make sure this address supports the asset you are trying to send. Your funds may not be recoverable if this address is invalid.'
      buttons: {
        send: 'Continue'
        invite: 'Invite'
      }
    }
    transactionStatus: {
      transactionIsCompleted: 'Completed'
      transactionIsPending: 'Pending'
      transactionIsFailed: 'Failed'
    }
    transactionDetailsActions: {
      showCompletedTransactionDetails: 'Details'
      checkPendingTransactionStatus: 'Check Status'
      retryFailedTransaction: 'Retry'
    }
    viewOnCeloBlockExplorer: 'View on CeloExplorer'
    viewOnCeloScan: 'View on CeloScan'
    viewOnEthereumBlockExplorer: 'View on Etherscan'
    viewOnArbiscan: 'View on Arbiscan'
    viewOnOPMainnetExplorer: 'View on OP Mainnet Explorer'
    viewOnOPSepoliaExplorer: 'View on OP Sepolia Explorer'
    viewOnPolygonPoSScan: 'View on PolygonScan'
    viewOnBaseScan: 'View on BaseScan'
    viewOnAxelarScan: 'View on AxelarScan'
    sendEnterAmountScreen: {
      title: 'Enter Amount'
      selectToken: 'Select a Token'
      networkFee: '{{networkName}} Network Fee'
      lowerAmount: 'Enter a lower amount'
      maxAmountWarning: {
        title: 'Sending the maximum amount'
        description: 'Adjust the amount you are sending to make sure you have enough {{feeTokenSymbol}} for gas'
      }
      notEnoughBalanceForGasWarning: {
        title: 'You need more {{feeTokenSymbol}} for gas'
        description: 'Add {{feeTokenSymbol}} to cover your gas fees or adjust the amount you are sending'
      }
      prepareTransactionError: {
        title: 'Something went wrong!'
        description: 'It was not possible to prepare a transaction for this token.'
      }
      insufficientBalanceWarning: {
        title: 'You need more {{tokenSymbol}}'
        description: 'Insufficient {{tokenSymbol}} balance. Try a smaller amount or choose a different asset.'
      }
    }
    jumpstartIntro: {
      title: 'Share crypto like a text'
      description: 'Live Links are a way to send crypto on the Celo network to a friend with a link'
      noFundsHint: 'To get started, you’ll need some assets on Celo in your wallet.'
      haveFundsButton: 'Send with a Live Link'
      addFundsCelo: {
        title: 'Get Assets on Celo'
        info: 'Live Links are a way to send crypto on the Celo network to a friend with a link.\nTo get started, you’ll need some CELO assets in your wallet.'
        description: 'Once you’ve added assets on Celo you’ll have to come back to create a Live Link.'
        cta: 'Get Assets on Celo'
        actionDescriptions: {
          add: 'Buy assets on Celo using one of our trusted providers'
          swap: 'Swap into an asset on Celo from another asset'
          transfer: 'Use any Celo compatible wallet or exchange to deposit assets on Celo'
        }
      }
    }
    jumpstartEnterAmountScreen: {
      maxAmountWarning: {
        title: 'You can send up to {{amountInLocalCurrency,currency}} in a link'
        description: 'This link will be claimable by anyone who has access to it. Make sure you send links to people you trust.'
      }
    }
    jumpstartSendConfirmationScreen: {
      title: 'Create a Live Link'
      sendAmountLabel: 'Live Link Amount'
      confirmButton: 'Send and create link'
      info: 'When you create a link, funds are withdrawn from your wallet. You can reclaim the link anytime. Share links with care.'
      sendError: {
        title: 'Unable to create link'
        description: 'Your live link wasn’t created. Please try again.'
        ctaLabel: 'Dismiss'
      }
    }
    jumpstartShareLinkScreen: {
      title: 'Share your Live Link'
      description: 'Copy the link to send {{tokenSymbol}} via your messaging app of choice, or use the QR code.'
      linkLabel: 'Live Link'
      linkCopiedMessage: 'Live Link copied'
      navigationWarning: {
        title: 'Did you share your link?'
        description: 'Make sure to share this live link or save it somewhere safe.\n\nDon’t worry if it goes unclaimed — you can easily reclaim the funds from your activity feed.'
        ctaNavigate: 'Go Home'
      }
      ctaShare: 'Share Link'
      ctaScanQRCode: 'Show QR Code'
      shareMessage: 'Hi! I’m sending you a link funded with {{tokenAmount}} {{tokenSymbol}} on {{appName}}. Use this link to download the app and the funds will be live, waiting for you. {{link}}'
      qrCodeBottomSheet: {
        title: 'Scan the code to receive funds'
        description: 'Check the status of your funds on the homescreen. Alternatively, copy or share the link below.'
      }
    }
    transactionFeed: {
      approvalTransactionTitle: 'Approval'
      estimatedNetworkFee: 'Estimated network fee'
      networkFee: 'Network fee'
      appFee: 'App fee'
      estimatedCrossChainFee: 'Estimated cross-chain fee'
      crossChainFee: 'Cross-chain fee'
      finiteApprovalDescription: 'Approved {{approvedAmount}} {{tokenSymbol}} for trade'
      infiniteApprovalDescription: 'Approved infinite {{tokenSymbol}} for trade'
      revokeApprovalDescription: 'Revoked {{tokenSymbol}} for trade'
      descriptionLabel: 'Details'
      crossChainSwapTransactionLabel: 'Cross-chain'
    }
    multichainBeta: {
      beta: 'BETA'
      title: 'New! Ethereum is on {{appName}}'
      description1: 'We’re opening up this feature to a select group of people first. You’re one of the lucky ones!'
      description2: 'This is still new, and our team is still working hard to make things perfect. We’d love to hear your feedback.'
      primaryCta: 'Try it now'
      secondaryCta: 'No thanks'
    }
    getStartedHome: {
      title: 'Buy crypto or transfer tokens'
      body: 'Buy or transfer compatible tokens to send crypto and explore web3!'
      titleV1_86: 'Add funds to your wallet'
      exploreTokens: 'Explore all tokens'
      exploreTokensBody: 'You can buy up to 10+ tokens in {{appName}}. Check them out!'
    }
    nftCelebration: {
      bottomSheet: {
        title: 'Congratulations!'
        description: 'You’ve earned an exclusive collectible for Early Ethereum Explorers. Welcome to Ethereum on {{appName}}.'
        cta: 'Thanks!'
      }
      notification: {
        title: 'A new NFT awaits 🎉'
        description: 'You can find your new {{rewardName}} NFT under your “Collectibles”'
      }
      rewardBottomSheet: {
        title: 'Earn $5 of ETH'
        description: "Fund your wallet with any Ethereum token by April 4, 2024 at 12:00 PM PDT, and we'll give you $5 of ETH on April 5, 2024 by 11:59 PM PDT.\n\nThis is an exclusive offer for being an Early Ethereum Explorer."
        expirationLabel: 'Expires {{expirationLabelText}}'
        cta: 'Use reward'
      }
      rewardReminderBottomSheet: {
        title: "Don't miss out, earn $5 of ETH"
        description: "Fund your wallet with any Ethereum token by April 4, 2024 at 12:00 PM PDT, and we'll give you $5 of ETH on April 5, 2024 by 11:59 PM PDT.\n\nThis is an exclusive offer for being an Early Ethereum Explorer."
        expirationLabel: 'Expires {{expirationLabelText}}'
        cta: 'Use reward'
      }
    }
    pleaseWait: 'Please wait'
    error: 'Error'
    linkPhoneNumber: {
      title: 'Link a phone number to your wallet address'
      description: 'No more messy wallet addresses! Send crypto to other Celo users with just a phone number'
      startButtonLabel: 'Link Phone Number'
      later: "I'll do this later"
    }
    bottomTabsNavigator: {
      wallet: {
        tabName: 'Wallet'
        title: 'My Wallet'
      }
      home: {
        tabName: 'Home'
        title: 'Welcome'
      }
      discover: {
        tabName: 'Discover'
        title: 'Discover'
      }
    }
    jumpstartStatus: {
      loading: {
        title: 'Checking on your funds'
        description: 'Please wait while we check your Live Link. Claimable funds will arrive shortly.'
      }
      error: {
        title: 'Unable to claim funds'
        description: 'This link was not able to be claimed for an unknown reason'
        alreadyClaimedDescription: 'The link has already been claimed. Please ask your friend to send a new link'
        contactSupport: 'Contact Support'
        dismiss: 'Dismiss'
      }
    }
    jumpstartReclaim: {
      description: 'Reclaiming your link incurs a network gas fee, would you like to proceed?'
      fetchStatusError: {
        title: 'Oops, something went wrong'
        description: 'We could not get the claim status of this invitation, please try again later or contact support'
        retryCta: 'Retry'
      }
      reclaimError: {
        title: 'Unable to reclaim funds'
        description: 'Try to reclaim again, or contact support'
      }
    }
    multiSelect: {
      switchNetwork: 'Switch Network'
      allNetworks: 'All Networks'
    }
    points: {
      title: '{{appName}} Points'
      activity: 'Activity'
      history: {
        cards: {
          createWallet: {
            title: 'Wallet holder'
            subtitle: 'Member of {{appName}}'
          }
          swap: {
            title: 'Swap'
            subtitle: '{{fromToken}} to {{toToken}}'
          }
          createLiveLink: {
            title: 'Live Link'
            subtitle: {
              erc20: 'Sent {{tokenSymbol}}'
              erc721: 'Sent NFT'
            }
          }
          depositEarn: {
            title: 'Deposited'
            subtitle: 'to {{network}} Pool'
          }
        }
        title: 'My points activity'
        error: {
          title: 'Unable to load points activity'
          subtitle: 'Oops, something went wrong when trying to load your points activity feed. Please try again.'
          tryAgain: 'Try again'
        }
        empty: {
          title: 'No points activity yet'
          subtitle: "It looks like you haven't earned any points yet. Use {{appName}} to start earning points!"
          gotIt: 'Got it'
        }
        pageError: {
          title: 'Unable to load'
          subtitle: 'Oops, something went wrong when trying to finish loading. Please try again.'
          refresh: 'Refresh'
        }
      }
      fetchBalanceError: {
        title: 'Unable to load your points'
        description: 'Oops, something went wrong when trying to load your points. The information on this page may be out of date. Please refresh.'
        retryCta: 'Refresh'
      }
      loading: {
        title: 'Gathering your points'
        description: "We're in the process of tallying up your points, hang tight"
      }
      error: {
        title: 'Unable to load points'
        description: 'Oops, something went wrong when trying to load your points. Please try again.'
        retryCta: 'Try again'
      }
      infoCard: {
        title: 'More ways to earn points coming soon'
        body: 'We are working on adding more ways to earn points through using the app. Keep checking in for updates.'
      }
      activitySection: {
        title: 'How do I earn points?'
        body: "It's easy! Earn points by simply using the app."
      }
      noActivities: {
        title: 'Update to Unlock More Points 🔓'
        body: "Oops! It seems you're using an older version of {{appName}}. Update now to discover all the exciting new ways you can earn points."
      }
      activityCards: {
        createWallet: {
          title: 'Create a {{appName}} Wallet'
        }
        swap: {
          title: 'Swap assets'
          bottomSheet: {
            title: 'Swap assets'
            body: 'Earn {{pointsValue}} points every time you swap an asset using {{appName}}. \n\nTap below to start swapping and earning!'
            cta: 'Start a swap'
          }
        }
        moreComing: {
          title: 'More coming soon!'
        }
        createLiveLink: {
          title: 'Send with a Live Link'
          bottomSheet: {
            title: 'Send with a Live Link'
            body: 'Earn {{pointsValue}} points every time you send funds using a Live Link in {{appName}}. \n\nTap below to start sending and earning!'
            cta: 'Send with a Live Link'
          }
        }
        depositEarn: {
          title: 'Deposit into an earn pool on {{appName}}'
          bottomSheet: {
            title: 'Deposit into an earn pool'
            body: 'Earn {{pointsValue}} points every time you deposit funds into an earn pool on {{appName}}. \n\nTap below to start earning yield and points!'
            cta: 'Go to earn pools'
          }
        }
      }
      discoverCard: {
        title: '{{appName}} Points'
        description: 'Earn points easily with {{appName}}. Using the app, including swapping, leads to points!'
        balance: '{{pointsBalance}} points'
      }
      intro: {
        title: 'Earn points effortlessly'
        description: 'Jump into a new way to earn! Your {{appName}} actions now earn points. Start earning today and unlock awesome benefits.'
        cta: 'Start your points journey'
      }
      disclaimer: {
        learnMoreCta: '<0>Learn more</0> about {{appName}} Points'
        title: 'More About {{appName}} Points'
        body: "Points are {{appName}}'s loyalty program. They're awarded for using the app. Points can't be spent, traded, or transferred."
        dismiss: 'Got it'
      }
    }
    earnFlow: {
      gasSubsidized: 'Transaction fees are covered for a limited time'
      addCryptoBottomSheet: {
        title: 'Add {{tokenSymbol}} on {{tokenNetwork}}'
        description: "Once you add tokens you'll have to come back to finish depositing into a pool."
        actions: {
          add: 'Buy'
          transfer: 'Transfer'
          swap: 'Swap'
        }
        actionDescriptions: {
          add: 'Buy {{tokenSymbol}} on {{tokenNetwork}} using one of our trusted providers'
          transfer: 'Use any {{tokenNetwork}} compatible wallet or exchange to deposit {{tokenSymbol}}'
          swap: 'Swap into {{tokenSymbol}} from another {{tokenNetwork}} token'
        }
      }
      cta: {
        title: 'Earn on your stablecoins'
        subtitle: 'Deposit today and earn returns'
        description: 'See how much you can earn when supplying a lending pool'
      }
      earnInfo: {
        title: 'Earn on your\nstablecoins'
        details: {
          earn: {
            titleGasSubsidy: 'Maximize Earnings without Gas Fees*'
            title: 'Explore and Compare Pools'
            subtitle: 'Compare earning potential and risks. Swap, buy, or transfer tokens to join the best pool for you.'
            footnoteSubsidy: '*Gas fees are temporarily covered by {{appName}}'
          }
          work: {
            title: 'Put Your Assets To Work'
            subtitle: 'Start earning on your crypto by depositing into a liquidity pool. '
          }
          manage: {
            title: 'Manage Directly from {{appName}}'
            titleV1_92: 'Manage Directly from {{appName}}'
            titleV1_94: 'Manage Your Positions'
            subtitle: "We'll auto-connect your wallet so you can manage pools without leaving {{appName}}."
            subtitleV1_92: "We'll auto-connect your wallet so you can manage pools without leaving {{appName}}."
            subtitleV1_94: 'Choose a pool you like, add your tokens and monitor your gains.'
          }
          access: {
            title: 'Easily Access your Funds'
            subtitle: "Collect funds with a tap when you're ready."
          }
        }
        action: {
          learn: 'Learn More'
          earn: 'Start Earning'
        }
      }
      ctaV1_86: {
        title: 'Maximize earnings on stablecoins'
        subtitle: 'Buy {{symbol}}'
        description: 'Earn approximately {{apy}}% per year when you add {{symbol}} to a pool'
      }
      entrypoint: {
        title: 'Earn on your stablecoins'
        subtitle: 'Deposit and earn'
        description: 'Earn on your stablecoins when you lend through a liquidity pool'
      }
      enterAmount: {
        title: 'How much would you like to deposit?'
        deposit: 'Deposit'
        fees: 'Fees'
        swap: 'Swap'
        earnUpToLabel: 'You could earn up to:'
        rateLabel: 'Rate (est.)'
        earnUpTo: '~{{fiatSymbol}}{{amount}} / yr'
        earnUpToV1_87: '<0></0> / yr'
        rate: '{{rate}}% APY'
        continue: 'Continue'
        info: 'This pool is powered by Aave'
        infoV1_93: 'Powered by {{providerName}}'
        notEnoughBalanceForGasWarning: {
          title: 'You need more {{feeTokenSymbol}} to continue'
          description: 'Add {{feeTokenSymbol}} on {{network}} to cover your gas fees'
          noGasCta: 'Buy {{feeTokenSymbol}} on {{network}}'
        }
        feeBottomSheet: {
          feeDetails: 'Fee Details'
          moreInformation: 'More information'
          estNetworkFee: 'Est. Network Fee'
          maxNetworkFee: 'Max Network Fee'
          networkFeeDescription: 'The network fee is required by the network to process the deposit transaction.'
          networkSwapFeeDescription: 'The network fee is required by the network to process the deposit transactions. The {{appName}} fee of {{appFeePercentage}}% is charged for your use of our product.'
          appSwapFee: '{{appName}} Fee'
        }
        swapBottomSheet: {
          swapDetails: 'Swap Details'
          swapFrom: 'Swap From'
          swapTo: 'Swap To'
          whySwap: 'Why am I swapping?'
          swapDescription: 'To deposit funds into the pool, your token is being swapped into a pool token.'
        }
      }
      activePools: {
        title: 'Active Pools'
        totalValue: 'Total Value:'
        apy: '~{{apy}}% APY'
        exitPool: 'Exit Pool'
        depositMore: 'Deposit More'
        viewPools: 'View Pools'
        poolsSupplied: 'Pools supplied'
        totalSupplied: 'Total supplied'
        depositAndEarnings: 'Deposit & Earnings'
        myPools: 'My Pools'
        explore: 'Explore Open'
      }
      depositBottomSheet: {
        title: 'Review & Deposit'
        description: 'Before depositing to an Aave pool, please review the transaction details below'
        descriptionV1_93: 'Before depositing to an {{providerName}} pool, please review the transaction details below'
        amount: 'Amount Deposited'
        fee: 'Est. Gas Fees'
        provider: 'Earnings provider'
        network: 'Network'
        footer: 'By depositing crypto into an Aave pool, you accept the risks associated with using Aave. <0>Terms & Conditions</0>'
        footerV1_93: 'By depositing crypto into an {{providerName}} pool, you accept the risks associated with using {{providerName}}. <0>Terms & Conditions</0>'
        primaryCta: 'Complete'
        secondaryCta: 'Cancel'
        yieldRate: 'Yield Rate (est.)'
        apy: '{{apy}}%'
      }
      collect: {
        title: 'Congratulations! Review & collect your earnings'
        total: 'TOTAL'
        plus: 'PLUS'
        rate: 'Rate (est.)'
        apy: '{{apy}}% APY'
        fee: 'Gas Fee'
        cta: 'Collect Earnings'
        errorTitle: 'Something went wrong'
        errorDescription: 'Unable to fetch deposit details. Please try again.'
        noGasTitle: 'You need more {{symbol}} to continue'
        noGasDescription: 'Add {{symbol}} on {{network}} to cover your gas fees'
        noGasCta: 'Buy {{symbol}} on {{network}}'
      }
      transactionFeed: {
        earnClaimTitle: 'Collected'
        earnClaimSubtitle: 'from {{providerName}} Pool'
        earnDepositTitle: 'Deposited'
        earnDepositSubtitle: 'to {{providerName}} Pool'
        earnWithdrawTitle: 'Withdrew'
        earnWithdrawSubtitle: 'from {{providerName}} Pool'
      }
      transactionDetails: {
        descriptionLabel: 'Details'
        earnClaimTitle: 'Collected'
        earnClaimSubtitle: 'Collected {{tokenSymbol}} from {{providerName}} Pool'
        earnClaimDetails: 'Amount Collected'
        earnDepositTitle: 'Deposited'
        earnDepositSubtitle: 'Deposited {{tokenSymbol}} to {{providerName}} Pool'
        earnDepositDetails: 'Amount Deposited'
        earnWithdrawTitle: 'Withdrew'
        earnWithdrawSubtitle: 'Withdrew {{tokenSymbol}} from {{providerName}} Pool'
        earnWithdrawDetails: 'Amount Withdrawn'
        swap: 'Swap'
        network: 'Network'
        fees: 'Fees'
      }
      home: {
        title: 'Earn'
        learnMore: '<0>Learn more</0> about yield pools.'
        learnMoreBottomSheet: {
          bottomSheetTitle: 'Learn more about yield pools'
          apySubtitle: 'What is an APY?'
          apyDescription: "Annual percentage yield (APY) is a metric used to calculate the annualized return on crypto investments. It's a key indicator of a cryptocurrency's potential return and profitability."
          tvlSubtitle: 'What is TVL?'
          tvlDescription: "TVL stands for Total Value Locked, and it's a metric used in the crypto industry to measure the value of digital assets locked on a blockchain network. TVL is calculated by adding up the value of all digital assets locked in a DeFi protocol or smart contract. These assets can include cryptocurrencies, stablecoins, and other tokens."
          yieldPoolSubtitle: 'What is a yield pool?'
          yieldPoolDescription: 'Yield pools, or liquidity pools, are pooled funds provided by token holders, which enable trading on decentralized exchanges. When you contribute to the pool, you can earn interest from other people who borrow those funds.'
          chooseSubtitle: 'How should you choose a pool? '
          chooseDescription: 'Any financial decision is a personal choice. We have aggregated some pools across different protocols, but each pool has benefits and risks. We do our best to provide some helpful info for each pool, but it’s always best to do additional research if you’re unsure.'
        }
        noPoolsTitle: 'You haven’t joined any pools yet'
        noPoolsDescription: 'Discover available pools, pick one that matches your goals, and make the most of your stablecoins.'
        errorTitle: 'Unable to load pools'
        errorDescription: 'Oops, something went wrong when trying to load the pool information. Please try again.'
        errorButton: 'Try again'
      }
      poolCard: {
        onNetwork: 'on {{networkName}}'
        rate: 'Rate (est.)'
        yieldRate: 'Yield Rate (est.)'
        reward: 'Reward'
        tvl: 'TVL'
        exitPool: 'Exit Pool'
        addToPool: 'Add to Pool'
        apy: '{{apy}}% APY'
        percentage: '{{percentage}}%'
        poweredBy: 'Powered by {{providerName}}'
        deposited: 'Supplied'
        depositAndEarnings: 'Deposit & Earnings'
      }
      poolFilters: {
        allPools: 'All Pools'
        myPools: 'My Pools'
      }
      poolInfoScreen: {
        chainName: 'Chain: <0>{{networkName}}</0>'
        protocolName: 'Protocol: <0>{{providerName}}</0>'
        yieldRate: 'Yield Rate'
        ratePercent: '{{rate}}%'
        rewards: 'Rewards'
        noRewards: 'No rewards'
        tvl: 'TVL'
        ageOfPool: 'Age of Pool'
        learnMoreOnProvider: 'View Pool on {{providerName}}'
        deposit: 'Deposit'
        depositAndEarnings: 'Deposit & Earnings'
        withdraw: 'Withdraw'
        totalDepositAndEarnings: 'Total Deposit & Earnings'
        titleLocalAmountDisplay: '{{localCurrencySymbol}}{{localCurrencyAmount}}'
        lineItemAmountDisplay: '{{localCurrencySymbol}}{{localCurrencyAmount}} ({{cryptoAmount}} {{cryptoSymbol}})'
        infoBottomSheet: {
          gotIt: 'Got it'
          depositDescription: 'This is your breakdown of your deposited amount, the interest you’e earned on that amount, and any additional rewards you’ve received from participating in the pool.'
          depositNoBreakdownDescription: 'This number combines your supplied tokens with any interest and rewards you’ve earned.\n\nSome protocols, like {{providerName}}, do not provide a breakdown of your earnings - this is normal. Instead they add your earnings directly to your deposited amount, which continues to earn interest based on the growing amount. '
          tvlTitle: 'Total Value Locked (TVL)'
          tvlDescription: 'TVL refers to the total amount of assets deposited in a liquidity pool and can be used to help indicate the trust and utility of a pool. Typically a higher TVL correlates to reduced risk, however no pool is completely risk free.'
          ageTitle: 'Age of Pool'
          ageDescription: 'Older liquidity pools can indicate a solid track record and a history of building community trust. Because of this, some may consider these pools to be safer.\n\nThere is no perfect way to determine risk, so use this info as part of your overall research to make the decision that is best for you.'
          yieldRateTitle: 'Yield Rate'
          yieldRateDescription: 'While most pools offer earnings in the form of a liquidity pool token, some give additional token(s) as a reward or added incentive.\n\nSince {{appName}} aggregates pools across multiple protocols, we have combined all the earning and reward rates into a single, overall yield rate to help easily evaluate your earning potential. This number is an estimate since the earning and reward values fluctuate constantly.\n\nFor further information about earning breakdowns you can visit <0>{{providerName}}</0>.'
        }
      }
      beforeDepositBottomSheet: {
        youNeedTitle: 'You Need {{tokenSymbol}} on {{tokenNetwork}} to Deposit'
        crossChainAlternativeDescription: 'If you don’t want to use your tokens on {{tokenNetwork}}, choose an option below. You’ll need to return to complete your pool deposit later.'
        beforeYouCanDepositTitle: 'Before you can deposit...'
        beforeYouCanDepositDescription: 'You’ll need to add one of the pool tokens. Once added, you’ll need to return to complete your pool deposit.'
        action: {
          swapAndDeposit: 'Swap & Deposit'
          swapAndDepositDescription: 'Choose any token on {{tokenNetwork}}. We’ll swap and deposit it simultaneously for you.'
          crossChainSwap: 'Cross-chain Swap'
          crossChainSwapDescription: 'Swap a token on another network for {{tokenSymbol}}'
          swap: 'Swap'
          swapDescription: 'Swap into {{tokenSymbol}} on {{tokenNetwork}} from another token in your wallet'
          add: 'Buy'
          addDescription: 'Buy {{tokenSymbol}} on {{tokenNetwork}} using one of our trusted providers'
          transfer: 'Transfer'
          transferDescription: 'Use any {{tokenNetwork}} compatible wallet or exchange to deposit {{tokenSymbol}}'
        }
      }
    }
    addFundsActions: {
      add: 'Buy'
      transfer: 'Transfer'
      swap: 'Swap'
    }
    duration_lessThanADay: 'Less than a day'
    duration_day_one: '1 day'
    duration_day_other: '{{count}} days'
    duration_month_one: '1 month'
    duration_month_other: '{{count}} months'
    duration_year_one: '1 year'
    duration_year_other: '{{count}} years'
    duration_yearMonth_one: '1 year, 1 month'
    duration_yearMonth_other: '{{count}} years, {{count2}} months'
    transactionTimeout: 'Transaction Timeout'
    keychainFetchAccounts: 'Keychain Fetch Accounts'
    keychainAccountAlreadyExists: 'Keychain Fetch Accounts Already Exists'
  }
}

export default Resources
