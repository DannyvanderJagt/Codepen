import React, {
	Component
} from 'react';

class CarouselView extends Component{
	render(){
		return (
			<div className='cdpn-carousel-view'>
				{this.props.children}
			</div>
		)
	}
}

export default CarouselView;