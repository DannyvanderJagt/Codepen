import React, {
	Component
} from 'react';

class AppFrame extends Component{
	render(){
		let className = [
				this.props.OS.platform,
	      this.props.OS.releaseName
      ].join(' ');

		return (
			<div 
				id='app'
				className={className}>
				{this.props.children}
			</div>
		)
	}
}

export default AppFrame;