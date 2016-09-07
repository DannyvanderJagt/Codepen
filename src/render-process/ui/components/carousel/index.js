import React, {	Component } from 'react';
import CarouselView from './view';

class Carousel extends Component{
	getPosition(){
		return this.props.position || 0
	}
	calculateStyle(){
		let position = this.getPosition();
		let numberOfChildren = this.props.children.length;

		return {
			transform: `translateX(-${(100/numberOfChildren) * position}%`,
			width: `${numberOfChildren * 100}%`
		}
	}
	render(){
		let style = this.calculateStyle();
		console.log(this.getPosition());
		return (
			<div className='cdpn-carousel'>
				<div className='cdpn-carousel-slider' style={style}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Carousel;
export { CarouselView };