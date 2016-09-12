import React, { Component } from 'react';
import MenuItem from './menu-item';
import MenuDivider from './menu-divider';
import { ToolTipItem } from '@ui/elements';

class BottomMenu extends Component{
	renderCenterSection(){
		return (
			<div className='center-section'>
				<MenuItem
					icon='home'
					title='Codepen'
					tooltip={[
						{title: 'Open Codepen.IO', icon: 'codepen'},
						{title: 'Perks', icon: 'perks'},
						{title: 'Jobs', icon: 'suitcase'},
						{title: 'Codepen Radio', icon: 'radio'},
					]}/>

				<MenuDivider/>

				<MenuItem
					icon='editor'
					title='Pens'
					tooltip={[
						{title: 'Create', icon: 'create'},
						{title: 'Filter', icon: 'filter'},
					]}/>

				<MenuItem
					icon='pen'
					title='Posts'
					tooltip={[
						{title: 'Create', icon: 'create'},
						{title: 'Filter', icon: 'filter'},
					]}/>

				<MenuItem
					icon='grid'
					title='Collections'
					tooltip={[
						{title: 'Create', icon: 'create'},
						{title: 'Filter', icon: 'filter'},
					]}/>

				<MenuDivider/>

				<MenuItem
					icon='earth'
					title='Analytics'/>

				<MenuItem
					icon='tool'
					title='Technology'/>
					
			</div>
		)
	}
	renderRightSection(){
		return (
			<div className='right-section'>
				<MenuDivider/>
				<MenuItem
					icon='create'
					title='Create'
					tooltip={[
						{title: 'Pen', icon: 'editor'},
						{title: 'Post', icon: 'pen'},
						{title: 'Collection', icon: 'grid'}
					]}/>
			</div>
		)
	}
	renderUser(){
		let name = this.props.user.name || 'John Doe';
		let image = this.props.user.image || 'assets/images/default-user-image.svg';

		return (
			<div className='user-tile'>
				<img 
					className='user-image'
					src={image}/>
				<div className='info'>
					<div className='name'>{name}</div>
					<div className='description'>Tab to view profile.</div>
				</div>
			</div>
		)
	}
	render(){
		return (
			<div className='bottom-menu'>
				{this.renderUser()}
				{this.renderCenterSection()}
				{this.renderRightSection()}
			</div>
		)
	}
}

export default BottomMenu;