import React, { Component } from 'react';
import { CssTransitionFrame } from '@ui/elements';
import { Carousel } from '@ui/components';
import { Pens, Posts, Collections } from '@ui/views';

// Aka: Carousel
class SecondBase extends Component{
	getPosition(){
		switch(this.props.routes[0]){
			case 'pens': return 0; break;
			case 'posts': return 1; break;
			case 'collections': return 2; break;
		}
	}
	render(){
		let position = this.getPosition();

		return (
			<CssTransitionFrame 
				className='cdpn-base-frame cdpn-second-base'
				type='opacity'
				visible={this.props.visible}>

				<Carousel position={position}>
					<Pens/>
					<Posts/>
					<Collections/>
				</Carousel>

			</CssTransitionFrame>
		)
	}
}

export default SecondBase;