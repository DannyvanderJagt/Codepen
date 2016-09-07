import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import state, { stateHandler } from '../state';
import router from './router';
import { AppFrame, WindowControls, Menu }	from './components';
import Bases from './bases';
import { currentWindow } from '@services';
import { Content, CssTransitionFrame } from './elements';

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
			<AppFrame OS={this.state.OS}>
				<WindowControls
					visible={this.state.showWindowControls}/>

				<Content>
					<Bases.FirstBase
						{...this.state.router.firstBase}/>

					<Menu
						{...this.state.menu}
						firstBaseIsVisible={this.state.router.firstBase.visible}/>

					<CssTransitionFrame 
						className='cdpn-content cdpn-base-content'
						type='opacity' 
						visible={!this.state.router.firstBase.visible}>

							<Bases.SecondBase
								{...this.state.router.secondBase}/>
							<Bases.ThirdBase
								{...this.state.router.thirdBase}/>
							<Bases.FourthBase
								{...this.state.router.fourthBase}/>

					</CssTransitionFrame>
				</Content>

			</AppFrame>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('app-container'), 
	() => {
		currentWindow.show();
	});