// UI state.
module.exports = {

	// Controlled by: Menu
	menu: {
		visible: true,
		content: undefined,
	},

	// Routes.
	// Controlled by: ui/router
	router: {
		history: [],
		firstBase: {
			visible: false,
			routes: [], // One route only! 
		}, 
		secondBase: {
			visible: false,
			routes: [], // One route only!
		},	
		thirdBase: {
			visible: false,
			routes: [], // Multiple routes, only 1 visible.
		},	
		fourthBase: {
			visible: false,
			routes: [], // Multiple routes, can be multi visible
		}, 
	},

	// Controled by: services/os
	OS: {
		platform: undefined,
		release: undefined,
		releaseName: undefined,
	},

	// WindowControls
	showWindowControls: true,
}