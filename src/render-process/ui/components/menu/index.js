import React, { Component } from 'react';
import DefaultMenu from './default.menu';

class Menu extends Component{
	render(){
		let className = [
			'cdpn-menu',
			this.props.firstBaseIsVisible ? 'hidden' : this.props.visible ? 'visible' : 'hidden',
		].join(' ');

		return (
			<div className={className}>
				<DefaultMenu/>
			</div>
		)
	}
}

export default Menu;