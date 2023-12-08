import { AnalyticsEventType } from 'src/analytics/Properties'

import {
  AppEvents,
  AssetsEvents,
  AuthenticationEvents,
  BuilderHooksEvents,
  CeloExchangeEvents,
  CeloNewsEvents,
  CICOEvents,
  CoinbasePayEvents,
  ContractKitEvents,
  DappExplorerEvents,
  DappKitEvents,
  DappShortcutsEvents,
  EscrowEvents,
  FeeEvents,
  FiatExchangeEvents,
  HomeEvents,
  IdentityEvents,
  InviteEvents,
  KeylessBackupEvents,
  NavigationEvents,
  NftEvents,
  OnboardingEvents,
  PerformanceEvents,
  PhoneVerificationEvents,
  QrScreenEvents,
  RequestEvents,
  RewardsEvents,
  SendEvents,
  SettingsEvents,
  SwapEvents,
  TokenBottomSheetEvents,
  TransactionDetailsEvents,
  TransactionEvents,
  WalletConnectEvents,
  WebViewEvents,
} from 'src/analytics/Events'

/**
 * Documentation for analytics events.
 *
 * Intentionally causes compilation errors if any analytics events are omitted (to remind us to document them).
 *
 * DO NOT add empty strings as descriptions! Some events have empty descriptions from before we used this to enforce
 *  documenting new events.
 */
export const eventDocs: Record<AnalyticsEventType, string> = {
  [AppEvents.app_launched]: ``,
  [AppEvents.app_state_error]: ``,
  [AppEvents.error_displayed]: ``,
  [AppEvents.error_fallback]: ``,
  [AppEvents.error_boundary]: ``,
  [AppEvents.user_restart]: ``,
  [AppEvents.fetch_balance]: `when balances are fetched. occurs every 10 seconds on the transaction feed, or on-demand after events like completing a send`,
  [AppEvents.fetch_balance_error]: ``,
  [AppEvents.redux_keychain_mismatch]: `when the redux state doesn't contain the account found in the keychain`,
  [AppEvents.redux_store_recovery_success]: ``,
  [AppEvents.redux_no_matching_keychain_account]: `when account in redux has no matching password hash in the keychain`,
  [AppEvents.push_notification_opened]: ``,
  [AppEvents.push_notifications_permission_changed]: ``,
  [AppEvents.android_mobile_services_checked]: ``,
  [AppEvents.request_tracking_permission_started]: ``,
  [AppEvents.request_tracking_permission_declined]: ``,
  [AppEvents.request_tracking_permission_accepted]: ``,
  [AppEvents.account_funded]: ``,
  [AppEvents.account_liquidated]: ``,
  [AppEvents.in_app_review_impression]: `User sees an in-app review request`,
  [AppEvents.in_app_review_error]: `Error while attempting to display in-app review`,
  [AppEvents.multichain_beta_opt_in]: `When the user taps the Try it Now button on the multichain beta screen`,
  [AppEvents.multichain_beta_opt_out]: `When the user taps the No Thanks button on the multichain beta screen`,
  [AppEvents.multichain_beta_contact_support]: `When the user taps the Contact Support button on the multichain beta screen`,
  [HomeEvents.home_send]: `when "send" button is pressed from home screen send or request bar (NOT from home screen actions)`,
  [HomeEvents.home_request]: ``,
  [HomeEvents.home_qr]: ``,
  [HomeEvents.hamburger_tapped]: ``,
  [HomeEvents.drawer_navigation]: ``,
  [HomeEvents.drawer_address_copy]: ``,
  [HomeEvents.notification_scroll]: ``,
  [HomeEvents.notification_impression]: `When the notification appears on the user screen for the first time. Note that the format of the notificationId property for user generated notifications is $NotificationType/$Id, where the $Id can be filtered out with a fuzzy string match.`,
  [HomeEvents.notification_select]: `When user taps on notification CTA(s). Note that the format of the notificationId property for user generated notifications is $NotificationType/$Id, where the $Id can be filtered out with a fuzzy string match.`,
  [HomeEvents.notification_center_opened]: `when the notification center is opened`,
  [HomeEvents.notification_center_spotlight_dismiss]: `when the user taps "got it" on the app update notification center spotlight`,
  [HomeEvents.transaction_feed_item_select]: ``,
  [HomeEvents.transaction_feed_address_copy]: ``,
  [HomeEvents.view_token_balances]: ``,
  [HomeEvents.view_nft_home_assets]: `When "NFTs" is clicked in Home Assets Pages`,
  [HomeEvents.home_action_pressed]: ``,
  [HomeEvents.notification_bell_pressed]: ``,
  [HomeEvents.hide_balances]: `When the eye icon is clicked to hide balances on the home screen`,
  [HomeEvents.show_balances]: `When the crossed out eye icon is clicked to show balances on the home screen`,
  [SettingsEvents.settings_profile_edit]: ``,
  [SettingsEvents.profile_generate_name]: ``,
  [SettingsEvents.profile_save]: ``,
  [SettingsEvents.profile_cancel]: ``,
  [SettingsEvents.profile_photo_chosen]: ``,
  [SettingsEvents.profile_photo_removed]: ``,
  [SettingsEvents.settings_verify_number]: ``,
  [SettingsEvents.language_select]: ``,
  [SettingsEvents.pin_require_on_load]: ``,
  [SettingsEvents.licenses_view]: ``,
  [SettingsEvents.tos_view]: ``,
  [SettingsEvents.start_account_removal]: ``,
  [SettingsEvents.completed_account_removal]: ``,
  [SettingsEvents.change_pin_start]: ``,
  [SettingsEvents.change_pin_current_pin_entered]: ``,
  [SettingsEvents.change_pin_current_pin_error]: ``,
  [SettingsEvents.change_pin_new_pin_entered]: ``,
  [SettingsEvents.change_pin_new_pin_confirmed]: ``,
  [SettingsEvents.change_pin_new_pin_error]: ``,
  [SettingsEvents.settings_biometry_opt_in_enable]: ``,
  [SettingsEvents.settings_biometry_opt_in_complete]: ``,
  [SettingsEvents.settings_biometry_opt_in_error]: ``,
  [SettingsEvents.settings_biometry_opt_in_disable]: ``,
  // intentionally not tracking analytics opt in/out
  // to avoid tracking through omission
  [SettingsEvents.settings_recovery_phrase]: ``,
  [SettingsEvents.settings_haptic_feedback]: ``,
  [SettingsEvents.settings_analytics]: ``,
  [SettingsEvents.settings_revoke_phone_number]: ``,
  [SettingsEvents.settings_revoke_phone_number_confirm]: ``,
  [SettingsEvents.settings_set_up_keyless_backup]: ``,
  [SettingsEvents.settings_delete_keyless_backup]: ``,
  [KeylessBackupEvents.wallet_security_primer_get_started]: ``,
  [KeylessBackupEvents.set_up_keyless_backup_screen_continue]: ``,
  [KeylessBackupEvents.cab_sign_in_with_google]: ``,
  [KeylessBackupEvents.cab_sign_in_with_google_success]: ``,
  [KeylessBackupEvents.cab_sign_in_with_email_screen_cancel]: ``,
  [KeylessBackupEvents.cab_get_torus_keyshare_failed]: ``,
  [KeylessBackupEvents.enter_phone_number_continue]: ``,
  [KeylessBackupEvents.cab_issue_sms_code_start]: ``,
  [KeylessBackupEvents.cab_issue_sms_code_success]: ``,
  [KeylessBackupEvents.cab_issue_sms_code_error]: ``,
  [KeylessBackupEvents.cab_issue_valora_keyshare_start]: ``,
  [KeylessBackupEvents.cab_issue_valora_keyshare_success]: ``,
  [KeylessBackupEvents.cab_issue_valora_keyshare_error]: ``,
  [KeylessBackupEvents.cab_progress_completed_continue]: ``,
  [KeylessBackupEvents.cab_progress_failed_later]: ``,
  [KeylessBackupEvents.cab_progress_failed_manual]: ``,
  [KeylessBackupEvents.cab_post_encrypted_mnemonic_failed]: ``,
  [KeylessBackupEvents.cab_torus_keyshare_timeout]: ``,
  [KeylessBackupEvents.cab_handle_keyless_backup_setup_failed]: ``,
  [KeylessBackupEvents.cab_handle_keyless_backup_setup_success]: ``,
  [OnboardingEvents.onboarding_education_start]: ``,
  [OnboardingEvents.onboarding_education_scroll]: ``,
  [OnboardingEvents.onboarding_education_step_impression]: ``,
  [OnboardingEvents.onboarding_education_complete]: ``,
  [OnboardingEvents.onboarding_education_cancel]: ``,
  [OnboardingEvents.create_account_start]: ``,
  [OnboardingEvents.create_account_cancel]: ``,
  [OnboardingEvents.restore_account_start]: ``,
  [OnboardingEvents.restore_account_cancel]: ``,
  [OnboardingEvents.backup_education_start]: ``,
  [OnboardingEvents.backup_education_scroll]: ``,
  [OnboardingEvents.backup_education_complete]: ``,
  [OnboardingEvents.backup_education_cancel]: ``,
  [OnboardingEvents.backup_start]: ``,
  [OnboardingEvents.backup_continue]: `(count # of taps on “Continue” button in Backup_Phrase)`,
  [OnboardingEvents.backup_complete]: `(count # of taps on "Cancel" button in Backup_Phrase/BackupQuiz)`,
  [OnboardingEvents.backup_more_info]: ``,
  [OnboardingEvents.backup_delay_confirm]: `when a user confirms they want to delay backup`,
  [OnboardingEvents.backup_delay_cancel]: `when a user decides to return to backup flow`,
  [OnboardingEvents.backup_cancel]: `(count # of taps on "Cancel" button in Backup_Phrase/BackupQuiz)`,
  [OnboardingEvents.backup_error]: ``,
  [OnboardingEvents.backup_quiz_start]: ``,
  [OnboardingEvents.backup_quiz_progress]: `whenever the backspace is pressed or word is chosen`,
  [OnboardingEvents.backup_quiz_complete]: `(Count # of successful Recovery Phrase confirmations Backup_Quiz)`,
  [OnboardingEvents.backup_quiz_incorrect]: `(Count # of failed Recovery Phrase confirmations Backup_Quiz)`,
  [OnboardingEvents.terms_and_conditions_accepted]: ``,
  [OnboardingEvents.celo_education_start]: ``,
  [OnboardingEvents.celo_education_scroll]: ``,
  [OnboardingEvents.celo_education_complete]: ``,
  [OnboardingEvents.celo_education_cancel]: ``,
  [OnboardingEvents.name_and_picture_set]: ``,
  [OnboardingEvents.name_and_picture_skip]: ``,
  [OnboardingEvents.name_and_picture_generate_name]: ``,
  [OnboardingEvents.phone_number_set]: ``,
  [OnboardingEvents.pin_set]: ``,
  [OnboardingEvents.pin_invalid]: ``,
  [OnboardingEvents.pin_failed_to_set]: ``,
  [OnboardingEvents.pin_never_set]: ``,
  [OnboardingEvents.biometry_opt_in_start]: ``,
  [OnboardingEvents.biometry_opt_in_cancel]: ``,
  [OnboardingEvents.biometry_opt_in_approve]: ``,
  [OnboardingEvents.biometry_opt_in_complete]: ``,
  [OnboardingEvents.biometry_opt_in_error]: ``,
  [OnboardingEvents.wallet_import_start]: ``,
  [OnboardingEvents.wallet_import_phrase_updated]: ``,
  [OnboardingEvents.wallet_import_submit]: ``,
  [OnboardingEvents.wallet_import_cancel]: `when a user cancels import of empty wallet or navigates back`,
  [OnboardingEvents.wallet_import_zero_balance]: `when the user is informed a wallet has zero balance`,
  [OnboardingEvents.wallet_import_phrase_invalid]: ``,
  [OnboardingEvents.wallet_import_phrase_correction_attempt]: ``,
  [OnboardingEvents.wallet_import_phrase_correction_success]: ``,
  [OnboardingEvents.wallet_import_phrase_correction_failed]: ``,
  [OnboardingEvents.wallet_import_error]: ``,
  [OnboardingEvents.wallet_import_success]: ``,
  [OnboardingEvents.initialize_account_start]: ``,
  [OnboardingEvents.initialize_account_complete]: `When the wallet has been successfully initialized after onboarding (either by creating a new account or restoring an existing one)`,
  [OnboardingEvents.initialize_account_error]: ``,
  [OnboardingEvents.account_dek_register_start]: ``,
  [OnboardingEvents.account_dek_register_account_unlocked]: ``,
  [OnboardingEvents.account_dek_register_account_checked]: ``,
  [OnboardingEvents.account_dek_register_complete]: ``,
  [OnboardingEvents.protect_wallet_use_recovery]: ``,
  [OnboardingEvents.protect_wallet_help]: ``,
  [OnboardingEvents.protect_wallet_help_dismiss]: ``,
  [OnboardingEvents.protect_wallet_copy_phrase]: ``,
  [OnboardingEvents.protect_wallet_complete]: ``,
  [OnboardingEvents.cya_button_press]: `when one of the choose your adventure card is pressed. Properties include card name, position of the card (1-based index) and card order`,
  [OnboardingEvents.cya_later]: `when "I'll explore later" is pressed`,

  // Events emitted in the CPV flow
  [PhoneVerificationEvents.phone_verification_skip]: `when skip is pressed in the phone number input screen`,
  [PhoneVerificationEvents.phone_verification_skip_confirm]: `when skip is confirmed from the dialog in the phone number input screen`,
  [PhoneVerificationEvents.phone_verification_learn_more]: `when the learn more dialog is launched in the phone number input screen`,
  [PhoneVerificationEvents.phone_verification_start]: `when the start button is pressed in the phone number input screen`,
  [PhoneVerificationEvents.phone_verification_code_request_success]: `when the verifyPhoneNumber endpoint returns successfully`,
  [PhoneVerificationEvents.phone_verification_restore_success]: `when the verifyPhoneNumber endpoint returns that the user is already verified (restore wallet flow)`,
  [PhoneVerificationEvents.phone_verification_code_verify_start]: `when the user has entered the sms code and we start to validate on the backend`,
  [PhoneVerificationEvents.phone_verification_code_verify_success]: `when the backend confirms that the sms code is successfully validated`,
  [PhoneVerificationEvents.phone_verification_code_verify_error]: `when the backend throws an error and the sms code cannot be validated`,
  [PhoneVerificationEvents.phone_verification_input_help]: `when the help button is pressed`,
  [PhoneVerificationEvents.phone_verification_input_help_skip]: `when the user presses skip on the help dialog to skip verification`,
  [PhoneVerificationEvents.phone_verification_input_help_continue]: `when the user presses continue on the help dialog to continue verification`,
  [PhoneVerificationEvents.phone_verification_resend_message]: `when the user triggers a resend of the sms code`,
  [PhoneVerificationEvents.phone_verification_revoke_start]: `when the revoke endpoint is called`,
  [PhoneVerificationEvents.phone_verification_revoke_success]: `when the revoke endpoint returns successfully`,
  [PhoneVerificationEvents.phone_verification_revoke_error]: `when the revoke endpoint returns an error`,
  [IdentityEvents.contacts_connect]: `when connect button is pressed`,
  [IdentityEvents.contacts_import_permission_denied]: ``,
  [IdentityEvents.contacts_import_start]: ``,
  [IdentityEvents.contacts_import_complete]: ``,
  [IdentityEvents.contacts_processing_complete]: ``,
  [IdentityEvents.contacts_import_error]: ``,
  [IdentityEvents.phone_number_lookup_start]: ``,
  [IdentityEvents.phone_number_lookup_complete]: ``,
  [IdentityEvents.phone_number_lookup_error]: ``,
  [IdentityEvents.phone_number_lookup_purchase_complete]: ``,
  [IdentityEvents.phone_number_lookup_purchase_error]: ``,
  [IdentityEvents.phone_number_lookup_purchase_skip]: ``,
  [IdentityEvents.address_lookup_start]: `When address verification lookup starts`,
  [IdentityEvents.address_lookup_complete]: `When address verification lookup is completed`,
  [IdentityEvents.address_lookup_error]: `When address verification lookup encounters an error`,
  [AuthenticationEvents.get_pincode_start]: ``,
  [AuthenticationEvents.get_pincode_complete]: ``,
  [AuthenticationEvents.get_pincode_error]: ``,
  [AuthenticationEvents.get_pincode_with_biometry_start]: ``,
  [AuthenticationEvents.get_pincode_with_biometry_complete]: ``,
  [AuthenticationEvents.get_pincode_with_biometry_error]: ``,
  [AuthenticationEvents.get_pincode_with_input_start]: ``,
  [AuthenticationEvents.get_pincode_with_input_complete]: ``,
  [AuthenticationEvents.get_pincode_with_input_error]: ``,
  [InviteEvents.invite_banner_impression]: ``,
  [InviteEvents.invite_with_share]: ``,
  [InviteEvents.invite_with_share_dismiss]: ``,
  [InviteEvents.invite_with_referral_url]: ``,
  [InviteEvents.opened_via_invite_url]: `When the app is opened via a referral link (even if the link took the user to the app store first). Note that this event is fired on app open, so the user will not have a wallet address yet.`,
  [InviteEvents.invite_help_link]: `When taps "View all terms" in invite disclaimer`,
  [EscrowEvents.escrow_fetch_start]: ``,
  [EscrowEvents.escrow_fetch_complete]: ``,
  [EscrowEvents.escrow_fetch_error]: ``,
  [EscrowEvents.escrow_reclaim_confirm]: `user confirms they want to reclaim escrowed payment`,
  [EscrowEvents.escrow_reclaim_cancel]: `user decides not to initiate a reclaim of escrowed payment`,
  [EscrowEvents.escrow_reclaim_start]: `when reclaim transaction starts`,
  [EscrowEvents.escrow_reclaim_complete]: `when reclaim transaction complete`,
  [EscrowEvents.escrow_reclaim_error]: ``,
  [SendEvents.send_scan]: `when scan QR icon is selected from the send screen`,
  [SendEvents.send_select_recipient]: `when recipient was selected`,
  [SendEvents.send_cancel]: `when user x's out of Send screen`,
  [SendEvents.send_amount_back]: `back button pressed on amount screen`,
  [SendEvents.send_amount_continue]: `when next button pressed on amount enter page`,
  [SendEvents.send_confirm_back]: `when back button pressed on send confirmation screen`,
  [SendEvents.send_confirm_send]: `when send button pressed on send confirmation screen`,
  [SendEvents.send_secure_start]: `when either secure send scan or manual confirm button pressed`,
  [SendEvents.send_secure_back]: `when back button is pressed during secure send`,
  [SendEvents.send_secure_cancel]: `when secure send flow is canceled`,
  [SendEvents.send_secure_info]: `when "help" button is pressed`,
  [SendEvents.send_secure_info_dismissed]: `when "help" button is dismissed`,
  [SendEvents.send_secure_submit]: `when an account is submitted for validation`,
  [SendEvents.send_secure_incorrect]: `when there's been an error validating the account`,
  [SendEvents.send_secure_complete]: `when an account has been validated`,
  [SendEvents.send_tx_start]: `issued from the sendPayment saga, after a user confirms their intent to send and right before we build and send the transaction to the network`,
  [SendEvents.send_tx_complete]: `when a send transaction has successfully completed`,
  [SendEvents.send_tx_error]: `when there is an error sending a transaction`,
  [SendEvents.token_dropdown_opened]: ``,
  [SendEvents.token_selected]: `A token was selected in TokenBottomSheet.`,
  [SendEvents.max_pressed]: ``,
  [SendEvents.swap_input_pressed]: ``,

  // related to the alert that is shown when sending to an unknown address
  [SendEvents.check_account_alert_shown]: ``,
  [SendEvents.check_account_do_not_ask_selected]: ``,
  [SendEvents.check_account_alert_back]: ``,
  [SendEvents.check_account_alerts_continue]: ``,

  // Events for the send select recipient screen
  [SendEvents.send_select_recipient_scan_qr]: `When the QR code button is pressed`,
  [SendEvents.send_select_recipient_contacts]: `When the import contacts button is pressed`,
  [SendEvents.send_phone_number_modal_connect]: `When the connect action is pressed on the modal shown when the user clicks sync contacts but hasn't connected a phone number yet`,
  [SendEvents.send_phone_number_modal_dismiss]: `When the dismiss action or background is pressed on the modal shown when the user clicks sync contacts but hasn't connected a phone number yet`,
  [SendEvents.send_contacts_modal_settings]: `When the settings action is pressed in the modal shown when the user clicks sync contacts but hasn't granted contacts permission yet`,
  [SendEvents.send_contacts_modal_dismiss]: `When the dismiss action or background is pressed in the modal shown when the user clicks sync contacts but hasn't granted contacts permission yet`,
  [SendEvents.request_contacts_permission_started]: `When contacts permission is requested (for iOS this and the below fires only when the permission is requestable, for Android these fire when the permission is requstable or in a do not ask again state)`,
  [SendEvents.request_contacts_permission_completed]: `When the request to contact permission completes, includes a property on the permission status`,
  [SendEvents.send_select_recipient_send_press]: `When the send button is pressed after selecting a recipient`,
  [SendEvents.send_select_recipient_invite_press]: `When the invite button is pressed after selecting a recipient`,
  [SendEvents.send_select_recipient_recent_press]: `When a recent recipient is pressed`,

  // Events for the QR screen redesign
  [QrScreenEvents.qr_screen_bottom_sheet_open]: ``,
  [QrScreenEvents.qr_screen_bottom_sheet_close]: ``,
  [QrScreenEvents.qr_screen_bottom_sheet_link_press]: ``,
  [QrScreenEvents.qr_screen_copy_address]: ``,
  [QrScreenEvents.qr_scanner_open]: `When unique "QR scanner" button is pressed`,
  [RequestEvents.request_scan]: `when scan QR icon is selected from the request screen`,
  [RequestEvents.request_select_recipient]: `when recipient was selected`,
  [RequestEvents.request_cancel]: `when cancel is clicked after launching request flow`,
  [RequestEvents.request_amount_back]: `back button pressed on amount screen`,
  [RequestEvents.request_amount_continue]: `when next button pressed on amount enter page`,
  [RequestEvents.request_confirm_back]: `when back button pressed on request confirmation screen`,
  [RequestEvents.request_confirm_request]: `when request button pressed on request confirmation screen`,
  [RequestEvents.request_error]: `when there is an error requesting a transaction`,
  [FeeEvents.fee_rendered]: ``,
  [FeeEvents.estimate_fee_failed]: ``,
  [FeeEvents.estimate_fee_success]: ``,
  [FeeEvents.fetch_tobin_tax_failed]: ``,
  [TransactionEvents.transaction_start]: `when a transaction is about to be submitted to the blockchain`,
  [TransactionEvents.transaction_gas_estimated]: `when gas is estimated for a transaction or an already estimated gas is used in a transaction about to be submitted (only for contract-kit)`,
  [TransactionEvents.transaction_hash_received]: `when a hash is received for a transaction`,
  [TransactionEvents.transaction_receipt_received]: `when a receipt is received for a transaction`,
  [TransactionEvents.transaction_confirmed]: `when a transaction is confirmed by the blockchain`,
  [TransactionEvents.transaction_error]: `when a transaction submission emits an error (only for contract-kit)`,
  [TransactionEvents.transaction_exception]: `when a transaction submission throws`,
  [CeloExchangeEvents.celo_home_info]: `when the (i) next to Celo Gold price is clicked, launching education (not pictured)`,
  [CeloExchangeEvents.celo_withdraw_review]: `when ‘review’ is clicked on the withdraw amount screen`,
  [CeloExchangeEvents.celo_withdraw_edit]: `when ‘edit’ is clicked on the review screen`,
  [CeloExchangeEvents.celo_withdraw_cancel]: `when ’cancel’ is clicked on the review screen`,
  [CeloExchangeEvents.celo_withdraw_confirm]: `when ‘withdraw’ is clicked on the review screen`,
  [CeloExchangeEvents.celo_withdraw_completed]: `when the transaction for the withdrawal is completed`,
  [CeloExchangeEvents.celo_withdraw_error]: `when there's an error on the withdrawal transaction`,
  [CeloExchangeEvents.celo_chart_tapped]: `when user clicks the chart on exchange screen`,

  // The CICO landing page accessible from the Settings Menu
  [FiatExchangeEvents.cico_landing_token_balance]: `User taps to view detailed token balance`,
  [FiatExchangeEvents.cico_landing_select_flow]: `User taps which CICO flow they want (Cash in, cash out, spend)`,
  [FiatExchangeEvents.cico_landing_how_to_fund]: `User taps help article link at the bottom`,

  // The CICO Currency screen where the user selects their digital currency
  [FiatExchangeEvents.cico_currency_chosen]: `User selects a currency and taps next`,
  [FiatExchangeEvents.cico_currency_back]: `User presses the back button from the currency screen`,

  // The CICO Amount screen where the user selects the amount of money
  [FiatExchangeEvents.cico_amount_chosen]: `User selects a valid amount and taps next`,
  [FiatExchangeEvents.cico_amount_chosen_invalid]: `User attempts to click next but the amount is invalid`,
  [FiatExchangeEvents.cico_amount_back]: `User presses the back button from the amount screen`,

  // Select Provider Screen
  [FiatExchangeEvents.cico_providers_section_impression]: `User sees a category of providers`,
  [FiatExchangeEvents.cico_providers_section_expand]: `User expands a category of providers`,
  [FiatExchangeEvents.cico_providers_section_collapse]: `User collapses a category of providers`,
  [FiatExchangeEvents.cico_providers_quote_selected]: `User selects a quote`,
  [FiatExchangeEvents.cico_providers_exchanges_selected]: `User taps the External Exchanges section`,
  [FiatExchangeEvents.cico_providers_back]: `User presses the back button from the Select Providers screen`,
  [FiatExchangeEvents.cico_providers_unavailable_impression]: `User sees a blurb about providers unavailable`,
  [FiatExchangeEvents.cico_providers_unavailable_selected]: `User taps a blurb about providers unavailable`,
  [FiatExchangeEvents.cico_providers_new_info_opened]: `User taps on the new label and views the dialog`,
  [FiatExchangeEvents.cico_providers_fetch_quotes_result]: `Information on fetch quotes result`,

  // Cash In Success Screen
  [FiatExchangeEvents.cash_in_success]: `Screen users are (most of the time) redirected to after cash in with external providers`,

  // Add fund flow entered through home screen cash in bottom sheet
  [FiatExchangeEvents.cico_add_bottom_sheet_selected]: ``,
  [FiatExchangeEvents.cico_add_bottom_sheet_impression]: ``,
  [FiatExchangeEvents.cico_add_bottom_sheet_ramp_selected]: ``,
  [FiatExchangeEvents.cico_add_bottom_sheet_ramp_available]: ``,

  // Funding Education Dialog Screen
  [FiatExchangeEvents.cico_add_funds_info_support]: ``,
  [FiatExchangeEvents.cico_cash_out_info_support]: ``,
  [FiatExchangeEvents.external_exchange_link]: ``,
  [FiatExchangeEvents.cico_external_exchanges_back]: ``,
  [FiatExchangeEvents.cico_cash_out_copy_address]: ``,

  // External Exchanges QR Code Screen
  [FiatExchangeEvents.cico_exchange_qr_bottom_sheet_open]: ``,
  [FiatExchangeEvents.cico_exchange_qr_bottom_sheet_close]: ``,
  [FiatExchangeEvents.cico_exchange_qr_bottom_sheet_link_press]: ``,
  [FiatExchangeEvents.cico_exchange_qr_back]: ``,
  [FiatExchangeEvents.cico_exchange_qr_copy_address]: ``,
  [FiatExchangeEvents.cico_exchange_qr_share]: ``,

  // Spend Flow
  [FiatExchangeEvents.spend_merchant_link]: ``,
  [FiatExchangeEvents.cico_spend_select_provider_back]: ``,
  [FiatExchangeEvents.cico_non_celo_exchange_send_bar_continue]: `When send bar is tapped from cash out for cUSD & cEUR`,

  // Simplex Review Screen
  [FiatExchangeEvents.cico_simplex_open_webview]: ``,

  // Fiat connect review screen
  [FiatExchangeEvents.cico_fc_review_submit]: ``,
  [FiatExchangeEvents.cico_fc_review_cancel]: ``,
  [FiatExchangeEvents.cico_fc_review_back]: ``,
  [FiatExchangeEvents.cico_fc_review_error_contact_support]: ``,

  // Fiat Connect link account screen
  [FiatExchangeEvents.cico_fc_review_error_retry]: ``,
  [FiatExchangeEvents.cico_fc_link_account_continue]: ``,
  [FiatExchangeEvents.cico_fc_link_account_back]: ``,
  [FiatExchangeEvents.cico_fc_link_account_provider_website]: ``,

  // Fiat Connect link KYC & account page
  [FiatExchangeEvents.cico_fc_link_kyc_account_back]: ``,

  // Fiat Connect fiat details screen
  [FiatExchangeEvents.cico_fiat_details_success]: ``,
  [FiatExchangeEvents.cico_fiat_details_back]: ``,
  [FiatExchangeEvents.cico_fiat_details_cancel]: ``,
  [FiatExchangeEvents.cico_fiat_details_error]: ``,

  // Fiat Connect transfer analytics
  [FiatExchangeEvents.cico_fc_transfer_api_error]: ``,
  [FiatExchangeEvents.cico_fc_transfer_tx_error]: ``,
  [FiatExchangeEvents.cico_fc_transfer_error]: ``,
  [FiatExchangeEvents.cico_fc_transfer_success]: ``,

  // Fiat Connect transfer status screen
  [FiatExchangeEvents.cico_fc_transfer_error_retry]: ``,
  [FiatExchangeEvents.cico_fc_transfer_error_cancel]: ``,
  [FiatExchangeEvents.cico_fc_transfer_error_contact_support]: ``,
  [FiatExchangeEvents.cico_fc_transfer_success_complete]: ``,
  [FiatExchangeEvents.cico_fc_transfer_success_view_tx]: ``,
  [FiatExchangeEvents.cico_fc_transfer_processing_continue]: ``,
  [FiatExchangeEvents.cico_fc_transfer_processing_view_tx]: ``,

  // Fiat Connect KYC status screens
  [FiatExchangeEvents.cico_fc_kyc_status_contact_support]: ``,
  [FiatExchangeEvents.cico_fc_kyc_status_back]: ``,
  [FiatExchangeEvents.cico_fc_kyc_status_close]: ``,
  [FiatExchangeEvents.cico_fc_kyc_status_try_again]: ``,
  [FiatExchangeEvents.cico_fc_kyc_status_switch_method]: ``,
  [ContractKitEvents.init_contractkit_start]: ``,
  [ContractKitEvents.init_contractkit_get_wallet_start]: ``,
  [ContractKitEvents.init_contractkit_get_wallet_finish]: ``,
  [ContractKitEvents.init_contractkit_init_wallet_finish]: ``,
  [ContractKitEvents.init_contractkit_finish]: ``,
  [PerformanceEvents.redux_store_size]: ``,
  [NavigationEvents.navigator_not_ready]: ``,
  [RewardsEvents.rewards_screen_opened]: ``,
  [RewardsEvents.rewards_screen_cta_pressed]: ``,
  [RewardsEvents.learn_more_pressed]: ``,
  [RewardsEvents.claimed_reward]: ``,

  // Events related to WalletConnect pairing (technical: opening up the communication channel via QR code or deeplink)
  [WalletConnectEvents.wc_pairing_start]: `when WC pairing is started (no UI at this point)`,
  [WalletConnectEvents.wc_pairing_success]: `when WC pairing succeeds`,
  [WalletConnectEvents.wc_pairing_error]: `when WC pairing fails`,

  // Events related to WalletConnect sessions (approving/rejecting/removing dapps)
  [WalletConnectEvents.wc_session_propose]: `when the WC session screen is displayed to approve/reject a new dapp`,
  [WalletConnectEvents.wc_session_approve_start]: `when user presses the button to approve the dapp connection`,
  [WalletConnectEvents.wc_session_approve_success]: `when the dapp approval succeeds`,
  [WalletConnectEvents.wc_session_approve_error]: `when the dapp approval fails`,
  [WalletConnectEvents.wc_session_reject_start]: `when user presses the button to reject the dapp connection`,
  [WalletConnectEvents.wc_session_reject_success]: `when the dapp rejection succeeds`,
  [WalletConnectEvents.wc_session_reject_error]: `when the dapp rejection fails`,
  [WalletConnectEvents.wc_session_remove_start]: `when user presses the button to disconnect the dapp`,
  [WalletConnectEvents.wc_session_remove_success]: `when the dapp disconnection succeeds`,
  [WalletConnectEvents.wc_session_remove_error]: `when the dapp disconnection fails`,

  // Events related to WalletConnect requests from approved dapps (signing)
  [WalletConnectEvents.wc_request_propose]: `when the WC request screen is displayed to accept/deny a dapp request`,
  [WalletConnectEvents.wc_request_details]: `when user presses the button to show details of a dapp request`,
  [WalletConnectEvents.wc_request_accept_start]: `when user presses the button to accept a dapp request`,
  [WalletConnectEvents.wc_request_accept_success]: `when the dapp request succeeds`,
  [WalletConnectEvents.wc_request_accept_error]: `when the dapp request fails`,
  [WalletConnectEvents.wc_request_deny_start]: `when user presses the button to accept a dapp request`,
  [WalletConnectEvents.wc_request_deny_success]: `when the dapp request denial succeeds`,
  [WalletConnectEvents.wc_request_deny_error]: `when the dapp request denial fails`,
  [WalletConnectEvents.wc_copy_request_payload]: `when a user taps to copy the request payload from the bottom sheet`,
  [DappKitEvents.dappkit_parse_deeplink_error]: `when dappkit fails to parse the deeplink`,
  [DappKitEvents.dappkit_request_propose]: `when the dappkit request screen is displayed to accept/deny a dapp request`,
  [DappKitEvents.dappkit_request_cancel]: `when user presses the button to cancel the dapp request`,
  [DappKitEvents.dappkit_copy_request_details]: `when user presses the button to copy details of a dapp request`,
  [DappKitEvents.dappkit_request_accept_start]: `when user presses the button to accept a dapp request`,
  [DappKitEvents.dappkit_request_accept_success]: `when the dapp request succeeds`,
  [DappKitEvents.dappkit_request_accept_error]: `when the dapp request fails`,
  [CICOEvents.persona_kyc_start]: `when a user begins the Persona KYC process (clicks 'Set up ID Verification' button)`,
  [CICOEvents.persona_kyc_success]: `when the onComplete callback is called for a Persona inquiry with success status`,
  [CICOEvents.persona_kyc_failed]: `when the onComplete callback is called for a Persona inquiry with failed status`,
  [CICOEvents.persona_kyc_cancel]: `when the onCancelled callback is called for a Persona inquiry`,
  [CICOEvents.persona_kyc_error]: `when the onError callback is called for a Persona inquiry`,
  [DappExplorerEvents.dapp_impression]: `when a dapp shows up in the featured section of the app`,
  [DappExplorerEvents.dapp_open]: `when a dapp is opened`,
  [DappExplorerEvents.dapp_close]: `when a dapp is closed from the in-app dapp web view`,
  [DappExplorerEvents.dapp_screen_open]: ``,
  [DappExplorerEvents.dapp_select]: ``,
  [DappExplorerEvents.dapp_bottom_sheet_open]: ``,
  [DappExplorerEvents.dapp_bottom_sheet_dismiss]: ``,
  [DappExplorerEvents.dapp_view_all]: `when user taps "view all dapps" from recently used dapps section`,
  [DappExplorerEvents.dapp_favorite]: `when user favorites a dapp`,
  [DappExplorerEvents.dapp_unfavorite]: `when user unfavorites a dapp`,
  [DappExplorerEvents.dapp_open_info]: `when a user taps on the help icon`,
  [DappExplorerEvents.dapp_open_more_info]: `when a user taps on the "more" button from inside the help bottom sheet`,
  [DappExplorerEvents.dapp_filter]: `when a user taps on a filter`,
  [DappExplorerEvents.dapp_search]: `when a user searches on the dapp explorer screen`,
  [DappExplorerEvents.dapp_rankings_impression]: `when the dapp rankings card shows up`,
  [DappExplorerEvents.dapp_rankings_open]: `when a user taps on the dapp rankings card`,
  [WebViewEvents.webview_more_options]: `when user taps "triple dot icon" from the webview`,
  [WebViewEvents.webview_open_in_browser]: `when user taps "Open in External Browser" from the webview options`,
  [CoinbasePayEvents.coinbase_pay_flow_start]: `When user is navigated to Coinbase Pay experience`,
  [CoinbasePayEvents.coinbase_pay_flow_exit]: `When user exits Coinbase Pay`,
  [SwapEvents.swap_screen_open]: `When the screen is mounted`,
  [SwapEvents.swap_screen_select_token]: `When a user selects a token, prompting the token select bottom sheet`,
  [SwapEvents.swap_screen_confirm_token]: `When a user selects a token from the bottom sheet`,
  [SwapEvents.swap_screen_max_swap_amount]: `when a user taps on the "max" button to swap their whole balance`,
  [SwapEvents.swap_review_submit]: `When a user click on the confirm swap button to proceed to next step`,
  [SwapEvents.swap_gas_fees_learn_more]: `When a user taps on the learn more text on the max swap amount warning`,
  [SwapEvents.swap_execute_price_change]: `When guaranteed is greater than 2% difference than the quoted price.`,
  [SwapEvents.swap_execute_success]: `When the swap is executed successfully`,
  [SwapEvents.swap_execute_error]: `When the swap returns an error`,
  [SwapEvents.swap_learn_more]: `When a user taps on the learn more button on the swap screen`,
  [SwapEvents.swap_price_impact_warning_displayed]: `When the price impact warning is displayed`,
  [SwapEvents.swap_again]: `When a user taps "Swap again" button after a successful swap`,
  [SwapEvents.swap_try_again]: `When a user taps "Try again" button after an unsuccessful swap`,
  [SwapEvents.swap_show_info]: `When a user taps an info icon to show more information on the swap screen`,
  [CeloNewsEvents.celo_news_screen_open]: `When the screen is mounted`,
  [CeloNewsEvents.celo_news_article_tap]: `When a user taps on a news article`,
  [CeloNewsEvents.celo_news_bottom_read_more_tap]: `When a user taps on the read more button at the bottom of the screen`,
  [CeloNewsEvents.celo_news_retry_tap]: `When a user taps on the retry button`,
  [TokenBottomSheetEvents.search_token]: `When a user searches a token using the token bottom sheet search box`,
  [AssetsEvents.show_asset_balance_info]: `When a user taps on the info icon`,
  [AssetsEvents.view_wallet_assets]: `When a user taps on the "Wallet Assets" segmented control or "Assets" tab`,
  [AssetsEvents.view_collectibles]: `When a user taps on the "Collectibles" tab`,
  [AssetsEvents.view_dapp_positions]: `When a user taps on the "Dapp Positions" segmented control or tab`,
  [AssetsEvents.tap_asset]: `When a user taps on an asset`,
  [AssetsEvents.tap_claim_rewards]: `When a user taps on the "Claim Rewards" button`,
  [AssetsEvents.tap_token_details_action]: `When a user taps one of the actions on the token details screen`,
  [AssetsEvents.tap_token_details_bottom_sheet_action]: `When a user taps one of the actions on the more actions bottom sheet`,
  [AssetsEvents.tap_token_details_learn_more]: `When a user taps the learn more link on the token details screen`,
  [AssetsEvents.import_token_screen_open]: `When a user taps on the "Import" top bar button in the Assets screen`,
  [AssetsEvents.import_token_submit]: `When a user taps on the "Import" button in the Import Token screen`,
  [AssetsEvents.import_token_paste]: `When a user taps on the "Paste" button in the Import Token screen`,
  [NftEvents.nft_error_screen_open]: `When the high level error screen is mounted`,
  [NftEvents.nft_media_load]: `When attempting to load NFT media`,
  [NftEvents.nft_gallery_screen_open]: `When the gallery screen is mounted`,
  [BuilderHooksEvents.hooks_enable_preview_propose]: `When a user scans a QR code or opens a deep link to enable hooks preview`,
  [BuilderHooksEvents.hooks_enable_preview_cancel]: `When a user cancels the hooks preview flow`,
  [BuilderHooksEvents.hooks_enable_preview_confirm]: `When a user confirms enabling hooks preview`,
  [BuilderHooksEvents.hooks_enable_preview_error]: `When a user encounters an error enabling hooks preview`,
  [BuilderHooksEvents.hooks_disable_preview]: `When a user disables hooks preview`,
  [DappShortcutsEvents.dapp_shortcuts_rewards_screen_open]: `When the rewards screen is mounted`,
  [DappShortcutsEvents.dapp_shortcuts_reward_claim_start]: `When the claim button is pressed`,
  [DappShortcutsEvents.dapp_shortcuts_reward_claim_success]: `When the claim shortcut succeeds`,
  [DappShortcutsEvents.dapp_shortcuts_reward_claim_error]: `When the claim shortcut fails`,
  [DappShortcutsEvents.dapp_shortcuts_reward_tx_propose]: `When the user is shown the transaction details via the bottom sheet`,
  [DappShortcutsEvents.dapp_shortcuts_reward_tx_copy]: `When the user copies the transaction details via the bottom sheet`,
  [DappShortcutsEvents.dapp_shortcuts_reward_tx_accepted]: `When the user confirms the transaction via the bottom sheet`,
  [DappShortcutsEvents.dapp_shortcuts_reward_tx_rejected]: `When the user rejects the transaction via the bottom sheet`,
  [TransactionDetailsEvents.transaction_details_tap_details]: `When a user press 'Details' on transaction details page`,
  [TransactionDetailsEvents.transaction_details_tap_check_status]: `When a user press 'Check status' on transaction details page`,
  [TransactionDetailsEvents.transaction_details_tap_retry]: `When a user press 'Retry' on transaction details page`,
  [TransactionDetailsEvents.transaction_details_tap_block_explorer]: `When a user press 'View on block explorer' on transaction details page`,
}
