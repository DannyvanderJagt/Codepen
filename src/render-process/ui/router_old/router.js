import routes from './routes';
import state from '@state';

let router = {
	history: state.history,
	goto(hash){
		let args = hash.split(':');
		let path = args.shift();
		let route = routes[path];

		if(!route){ return; }
		if(!route.focus){ return; }

		route.focus(args, hash);

		console.log('route', route, route.isCarousel);

		// Exclude carousel paths.
		if(route.isCarousel){ return; }

		let history = state.history;
		history.push({args, path, hash});

		state.set({history});
	},
	pop(){
		if(this.history.length === 0){ return; }
		let history = state.history;
		let {args, path, hash} = history.pop();
		if(!routes[path].blur){ return; }
		routes[path].blur();

		state.set({history});
	}
}

// For Debugging...
window.cdpn ? null : window.cdpn = {};
window.cdpn.router = router;

export default router;