import React, {
	Component
} from 'react';

import {router} from './router';

class Link extends Component{
	onClick(){
		router.goto(this.props.path);
	}
	render(){
		return (
			<span 
				className='cdpn-link'
				onClick={this.onClick.bind(this)}>
				{this.props.children}
			</span>
		)
	}
}

export default Link;