import React, { Component } from 'react';
import { CssTransitionFrame } from '@ui/elements';

class ThirdBase extends Component{
	render(){
		return (
			<CssTransitionFrame 
				className='cdpn-base-frame cdpn-third-base'
				type='opacity'
				visible={this.props.visible}>

				Third Base

			</CssTransitionFrame>
		)
	}
}

export default ThirdBase;