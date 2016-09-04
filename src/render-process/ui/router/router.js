import routes from './routes';

let router = {
	index:{},

	performSetup(){
		this.createPathIndex();
	},

	createPathIndex(){
		routes.forEach((route, pos) => {
			route.paths.forEach((path) => {
				this.index[path] = route;
				this.index[path].level = pos + 1;
			})
		})
	},

	goto(hash){
		let args = hash.split(':');
		let path = args.shift();
		let route = this.index[path];

		if(!route){ return; }
		if(!route.focus){ return; }


		// Blur other levels.
		let i = route.level;
		for(i; i < routes.length; i++){
			console.log('blur', i, routes[i].blur ? true : false)
			if(routes[i].blur){
				routes[i].blur();
			}
		}


		route.focus(path, args, hash);
	}
}


router.performSetup();

// For Debugging...
window.cdpn ? null : window.cdpn = {};
window.cdpn.router = router;
window.cdpn.routes = routes;

export default router;