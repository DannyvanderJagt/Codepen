import React, { Component } from 'react';
import { Window } from '@services';
import MenuItem from './menu-item';

class TopMenu extends Component{
	renderWindowControls(){
		return (
			<div className='window-controls'>
				<div 
					className='control close'
					onClick={Window.close.bind(Window)}/>
				<div 
					className='control minimize'
					onClick={Window.minimize.bind(Window)}/>
				<div 
					className='control maximize'
					onClick={Window.maximize.bind(Window)}/>
			</div>
		)
	}
	renderCenterSection(){
		return (
			<div className='center-section'>
				{this.props.center}
			</div>
		)
	}
	renderRightSection(){
		return (
			<div className='right-section'>
				props
				{this.props.right}
				<MenuItem icon='settings' location='bottom'/>
				<MenuItem icon='command' location='bottom'/>
			</div>
		)
	}
	render(){
		return (
			<div className='top-menu'>
				{this.renderWindowControls()}
				{this.renderCenterSection()}
				{this.renderRightSection()}
			</div>
		)
	}
}

export default TopMenu;