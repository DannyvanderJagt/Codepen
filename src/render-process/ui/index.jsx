import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import state, { stateHandler } from '../state';
import { Window } from '@services';
import { AppFrame, TopMenu, BottomMenu, Content } from '@ui/components';

class App extends Component{
	constructor(){
		super()

		this.state = state;
		stateHandler.on('change', this.stateDidChange.bind(this));
	}

	stateDidChange(state){
		this.setState(state);
	}

	render(){
		return (
			<AppFrame>
				<TopMenu/>

				<Content>

				</Content>

				<BottomMenu
					user={this.state.user}/>
			</AppFrame>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('app-container'), 
	() => {
		Window.show();
	});