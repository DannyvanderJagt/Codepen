// UI state.
module.exports = {

	// Controlled by: ui/router
	history: [],
	pens: [],

	// Controlled by: Router/view
	menu: undefined,

	// Routes.
	carousel: 0,
	articles: [],
	showSplashscreenView: false,
	showPreferencesView: false,
	showUpdatesView: false,
	showAssetsView: false,
	showSyncView: false,
	showLoginView: false,
	showFeaturesView: false,
	showLandingpageView: false,
	showUpdatingView: false,

	// Controled by: services/os
	OS: {
		platform: undefined,
		release: undefined,
		releaseName: undefined,
	},

	// WindowControls
	showWindowControls: true,


}