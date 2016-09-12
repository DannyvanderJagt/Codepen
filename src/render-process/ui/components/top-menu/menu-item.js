import React, { Component } from 'react';
import { ToolTip } from '@ui/elements';

class MenuItem extends Component{
	render(){
		return (
			<ToolTip items={[{title: 'test'}]} location='bottom'>
				<div className='menu-item'>
					<img src={`assets/icons/${this.props.icon}.svg`}/>
				</div>
			</ToolTip>
		)	
	}
}

export default MenuItem;