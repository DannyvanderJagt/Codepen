let Menu = {
	set(content){
		state.set({
			menu: {
				visible: true,
				content
			}
		})
	},
	show(){
		state.set({
			menu: {
				visible: true
			}
		})
	},
	hide(){
		state.set({
			menu: {
				visible: false
			}
		})
	}
};

export default Menu;