import React, { Component } from 'react';
import MenuItem from '../menu-item';
import {router} from '@ui/router';


class DefaultMenu extends Component{
	menuItemIsPressed(path){
		console.log('goto: '+ path);
		router.goto(path);
	}
	render(){
		return (
			<div 
				className='cdpn-default-menu'>
				<img 
					onClick={this.menuItemIsPressed.bind(this, 'pens')}
					className='codepen-icon'
					src='assets/images/codepen-icon.svg'/>

				<div className='menu-items'>
					<MenuItem 
						icon='code'
						onClick={this.menuItemIsPressed.bind(this, 'pens')}/>
					<MenuItem icon='pencil'
						onClick={this.menuItemIsPressed.bind(this, 'posts')}/>
					<MenuItem icon='collections'
						onClick={this.menuItemIsPressed.bind(this, 'collections')}/>
					<MenuItem icon='settings'
						onClick={this.menuItemIsPressed.bind(this, 'settings')}/>
				</div>

			</div>
		)
	}
}

export default DefaultMenu;