import React, { Component } from 'react';

class CarouselView extends Component{
	render(){
		let className = [
			'cdpn-carousel-view',
			this.props.className
		].join(' ');
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export default CarouselView;