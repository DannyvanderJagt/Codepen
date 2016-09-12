import React, { Component } from 'react';

class ToolTipItem extends Component{
	render(){
		let icon = this.props.icon ? <img src={`assets/icons/${this.props.icon}.svg`}/> : '';
		return (
			<div className='item'>
				{icon}
				{this.props.title}
			</div>
		)
	}
}

export default ToolTipItem;