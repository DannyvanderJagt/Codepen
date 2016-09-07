import state from '@state';
import capitilize from 'string-capitalize'

export default {
	firstBase: ['splashscreen', 'login', 'welcome-back', 'features'],
	secondBase: ['pens', 'posts', 'collections'],
	thirdBase: ['pen', 'post', 'collection'],
	fourthBase: ['preferences', 'assets', 'notifications']
}


// export default [

// 	// Lvl: 0 (Splashscreen)
// 	{
// 		paths: ['splashscreen', 'login', 'welcome-back', 'features'],
// 		menu: false,
// 		focus(path, args){
// 			state.set({
// 				router: true,
// 			})
// 		},
// 		blur(){
// 			state.set({
// 				showSplashScreen: false
// 			})
// 		}
// 	},

// 	// Lvl: 1 (Carousel)
// 	{
// 		paths: ['pens', 'posts', 'collections'],
// 		menu: true,
// 		focus(path, args){
// 			state.set({
// 				carousel: this.paths.indexOf(path) || 0,
// 			})
// 		}
// 	},

// 	// Lvl: 2 (Articles)
// 	{
// 		paths: ['pen', 'post', 'collection'],
// 		menu: true,
// 		focus(path, args){
// 			let articles = state.articles;
// 			articles.push({
// 				path, args,
// 				type: path,
// 				key: articles.length + 1,
// 			})

// 			state.set({ articles })
// 		},
// 		pop(){
// 			let articles = state.articles;
// 			articles.pop();
// 			state.set({articles});
// 		},
// 		blur(){
// 			state.set({articles: []});
// 		}
// 	},

// 	// Lvl: 3 (Content Views)
// 	{
// 		paths: ['preferences', 'assets', 'updates'],
// 		menu: true,
// 		focus(path, args){
// 			// Capitilize.
// 			state.set({
// 				[`show${capitilize(path)}View`]: true,
// 			})
// 		},
// 		pop(path, args){
// 			// Capitilize.
// 			state.set({
// 				[`show${capitilize(path)}View`]: false,
// 			})
// 		},
// 		blur(){
// 			this.paths.forEach((path) => {
// 				this.pop(path);
// 			});
// 		}
// 	},

// 	// Lvl: 4 (Full View)
// 	{
// 		paths: ['splashscreen'],
// 		focus(path, args){
// 			// Capitilize.
// 			state.set({
// 				[`show${capitilize(path)}View`]: true,
// 			})
// 		},
// 		pop(path, args){
// 			// Capitilize.
// 			state.set({
// 				[`show${capitilize(path)}View`]: false,
// 			})
// 		},
// 		blur(){
// 			this.paths.forEach((path) => {
// 				this.pop(path);
// 			});
// 		}
// 	}

// ]