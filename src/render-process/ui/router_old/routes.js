import state from '@state';

export default {
	'/pens': {
		isCarousel: true,
		args: ['state'],
		focus(){
			state.set({carousel: 0})
		},
	},
	'/posts': {
		isCarousel: true,
		args: ['state'],
		focus(){
			state.set({carousel: 1})
		},
	},
	'/collections': {
		isCarousel: true,
		args: ['state'],
		focus(){
			state.set({carousel: 2})
		},
	},

	'/pen':{
		args: ['user', 'id'],
		focus(args, hash){
			let articles = state.articles;
			articles.push({
				type: 'pen',
				key: hash + '#' + articles.length + 1,
				hash: hash,
				args: args
			})
			state.set({
				articles
			})
		}, 
		blur(){
			console.log('blur pen');
			let articles = state.articles;
			articles.pop();
			state.set({
				articles
			})
		}
	},
	'/post':{
		args: ['user', 'id'],
		focus(args, hash){
			let articles = state.articles;
			articles.push({
				type: 'post',
				key: hash + '#' + articles.length + 1,
				hash: hash,
				args: args
			})
			state.set({
				articles
			})
		},
		blur(){
			let articles = state.articles;
			articles.pop();
			state.set({
				articles
			})
		}
	},
	'/collection':{
		args: ['id'],
		focus(args, hash){
			let articles = state.articles;
			articles.push({
				type: 'collection',
				key: hash + '#' + articles.length + 1,
				hash: hash,
				args: args
			})
			state.set({
				articles
			})
		},
		blur(){
			let articles = state.articles;
			articles.pop();
			state.set({
				articles
			})
		}
	},

	'/splashscreen': {
		args: [],
		focus(args){
			state.set({
				showSplashScreen: true
			})
		},
		blur(){
			state.set({
				showSplashScreen: false
			})
		}
	}
}