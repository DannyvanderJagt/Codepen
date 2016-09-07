import React, { Component } from 'react';
import { CssTransitionFrame } from '@ui/elements';

class FourthBase extends Component{
	render(){
		return (
			<CssTransitionFrame 
				className='cdpn-base-frame cdpn-fourth-base'
				type='opacity'
				visible={this.props.visible}>

				Fourth Base

			</CssTransitionFrame>
		)
	}
}

export default FourthBase;