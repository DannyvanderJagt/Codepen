import React, { Component } from 'react';

class FlexView extends Component{
	render(){
		let className = [
			'cdpn-flex-view',
			this.props.className
		].join(' ');

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export default FlexView;