import React, { Component } from 'react';
import { SplashScreen } from '@ui/views';
import { CssTransitionFrame } from '@ui/elements';

class FirstBase extends Component{
	render(){
		return (
			<CssTransitionFrame 
				className='cdpn-base-frame cdpn-first-base'
				type='opacity' 
				visible={this.props.visible}>

				<SplashScreen visible={true}/>
			</CssTransitionFrame>
		)
	}
}

export default FirstBase;