import ReactDOM from 'react-dom';
import React, {
	Component
} from 'react';

import state, {
	stateHandler
} from '../state';

import router from './router';
import Views, {
	SplashScreen
} from './views';

import {
	AppFrame,
	WindowControls,
	Menu,
	Carousel,
	Articles,
}	from './components'

import {
	Content,
} from './elements'


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
				
				<Content 
					windowControlsAreVisible={this.state.showWindowControls}>

					<Menu>
						{this.state.menu}
					</Menu>

					<Content>
						<Carousel
							position={this.state.carousel}/>

						{/* Pen, Post, Collection, User Views*/}
						<Articles
							articles={this.state.articles}/>

						{/* App related (no FullViews) */}
						{/*<Preferences 
							visible={this.state.showPreferences}/>

						<Updates
							visible={this.state.showUpdates}/>

						<Assets
							visisble={this.state.showAssets}/>
						*/}
					</Content>

					{/* App related (FullViews) */}
					<SplashScreen
						visible={this.state.showSplashscreenView}/>
					{/*<Sync
						visible={this.showSync}/>
					<Login
						visible={this.showLogin}/>
					<Features
						visible={this.showFeatures}/>
					<LandingPage
						visible={this.showLandingPage}/>
					<Updating 
						visible={this.showUpdating}/>*/}
			
				</Content>


			</AppFrame>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('app-container'));