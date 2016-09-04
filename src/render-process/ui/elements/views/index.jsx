import React, {
	Component
} from 'react';

class View extends Component{
	render(){
		let className = [
			'cdpn-view',
			this.props.visible ? '' : 'hidden',
		].join(' ')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

class FullView extends Component{
	render(){
		let className = [
			'cdpn-full-view',
			this.props.visible ? '' : 'hidden',
		].join(' ')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export {
	View, 
	FullView,
}