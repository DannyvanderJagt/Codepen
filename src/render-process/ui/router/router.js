import routes from './routes';
import state from '../../state';

let router = {
	index:{},

	performSetup(){
		this.createPathIndex();
	},

	createPathIndex(){
		let bases = Object.keys(routes);
		let base;

		bases.forEach((baseName, pos) => {
			base = routes[baseName];

			base.forEach((route) => {
				this.index[route] = baseName;
			})
		})
	},

	goto(hash){
		let args = hash.split(':');
		let path = args.shift();
		let baseName = this.index[path];

		if(!baseName){ return; }

		state.set({
			router: {
				[baseName]: {
					visible: true,
					routes: [path]
				}
			}
		})
	}
}


router.performSetup();

// For Debugging...
window.cdpn ? null : window.cdpn = {};
window.cdpn.router = router;
window.cdpn.routes = routes;

export default router;