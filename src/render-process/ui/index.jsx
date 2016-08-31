import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import state, {
	stateHandler
} from '../state';

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
			<div id='cdpn-app'>
				Hello
				{JSON.stringify(this.state)}
			</div>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('app-container'));