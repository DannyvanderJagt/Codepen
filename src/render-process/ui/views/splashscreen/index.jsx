import React, {
	Component
} from 'react';

import {
	FlexView,
	Content
} from '@ui/elements';

class SplashScreen extends Component{
	render(){
		return (
			<FlexView 
				className='cdpn-splashscreen'
				visible={this.props.visible}>
				<Content>
					<img src='assets/images/codepen-logo.svg'/>
				</Content>
			</FlexView>
		)
	}
}

export default SplashScreen;