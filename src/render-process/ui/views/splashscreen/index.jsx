import React, {
	Component
} from 'react';

import {
	FullView
} from '@ui/elements';

class SplashScreen extends Component{
	render(){
		return (
			<FullView visible={this.props.visible}>
				SplashScreen {JSON.stringify(this.props)};
			</FullView>
		)
	}
}

export default SplashScreen;