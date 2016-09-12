import React, { Component } from 'react';

class AppFrame extends Component{
	render(){
		return (
			<div className='app-frame'>
				{this.props.children}
			</div>
		)
	}
}

export default AppFrame;