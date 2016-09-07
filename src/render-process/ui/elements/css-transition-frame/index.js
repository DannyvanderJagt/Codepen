import React, { Component } from 'react';

class CssTransitionFrame extends Component{
	render(){
		let className = [
			'cdpn-css-transition-frame',
			this.props.className,
			this.props.type,
			this.props.visible ? '' : 'hidden',
		].join(' ');
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export default CssTransitionFrame;