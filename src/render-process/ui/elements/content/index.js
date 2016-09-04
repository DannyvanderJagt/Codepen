import React, {
	Component
} from 'react';

class Content extends Component{
	render(){
		let className = [
			'cdpn-content',
			this.props.windowControlsAreVisible ? 'window-controls-are-visible' : ''
			].join(' ');

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export default Content;