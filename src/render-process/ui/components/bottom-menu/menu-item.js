import React, { Component } from 'react';
import { ToolTip } from '@ui/elements';

class MenuItem extends Component{
	render(){
		let className = [
			'menu-item',
		].join(' ');

		return (
			<ToolTip 
				items={this.props.tooltip}
				className={className}>
				<img 
					className='icon'
					src={`assets/icons/${this.props.icon}.svg`}/>
				<div className='title'>
					{this.props.title}
				</div>
			</ToolTip>
		)
	}
}

export default MenuItem;