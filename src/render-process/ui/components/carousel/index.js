import React, {
	Component
} from 'react';

import {
	Pens,
	Posts,
	Collections,
} from '@ui/views';

class Carousel extends Component{
	render(){
		let position = this.props.position || 0;
		let style = {transform: `translateX(-${(100/3) * position}%`};
		
		return (
			<div className='cdpn-carousel'>
				<div className='cdpn-carousel-slider' style={style}>
					<Pens/>
					<Posts/>
					<Collections/>
				</div>
			</div>
		)
	}
}

export default Carousel;