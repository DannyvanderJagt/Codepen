import state from '@state';
import capitilize from 'string-capitalize'

export default [

	// Lvl: 1 (Carousel)
	{
		paths: ['pens', 'posts', 'collections'],
		focus(path, args){
			state.set({
				carousel: this.paths.indexOf(path) || 0,
			})
		}
	},

	// Lvl: 2 (Articles)
	{
		paths: ['pen', 'post', 'collection'],
		focus(path, args){
			let articles = state.articles;
			articles.push({
				path, args,
				type: path,
				key: articles.length + 1,
			})

			state.set({ articles })
		},
		pop(){
			let articles = state.articles;
			articles.pop();
			state.set({articles});
		},
		blur(){
			state.set({articles: []});
		}
	},

	// Lvl: 3 (Content Views)
	{
		paths: ['preferences', 'assets', 'updates'],
		focus(path, args){
			// Capitilize.
			state.set({
				[`show${capitilize(path)}View`]: true,
			})
		},
		pop(path, args){
			// Capitilize.
			state.set({
				[`show${capitilize(path)}View`]: false,
			})
		},
		blur(){
			this.paths.forEach((path) => {
				this.pop(path);
			});
		}
	},

	// Lvl: 4 (Full View)
	{
		paths: ['splashscreen'],
		focus(path, args){
			// Capitilize.
			state.set({
				[`show${capitilize(path)}View`]: true,
			})
		},
		pop(path, args){
			// Capitilize.
			state.set({
				[`show${capitilize(path)}View`]: false,
			})
		},
		blur(){
			this.paths.forEach((path) => {
				this.pop(path);
			});
		}
	}

]