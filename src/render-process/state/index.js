import cache from '../services/cache';
import merge from 'merge';
import EventEmitter from 'events';
import _ from 'underscore';
import {
	remote
} from 'electron';

let stateHandler = {
	state: {},
	ee: undefined,

	/*
		Make the state ready to be used.
	 */
	performSetup(){
		// Only allow to perform this setup once.
		if(this.ee){ return; }

		// Setup eventemitter.
		this.ee = new EventEmitter();
		this.on = this.ee.on.bind(this);
		this.emit = this.ee.emit.bind(this);

		// Setup state.
		this.state = this.getDefaultState();
		this.state = this.getSavedState();

		this.setApi();
	},

	/*
		Combine the different defaults states into one.
	 */
	getDefaultState(){
		let defaultState = require('./state.default');
		defaultState.preferences = require('./preferences.default');
		defaultState.user = require('./user.default');
		return defaultState;
	},

	/*
		Get the saved state from the cache.
	 */
	getSavedState(){
		let rawData = cache.get('state');
		let state = {};

		try{
			state = JSON.parse(rawData);
		}catch(error){
			state = {};
		}

		this.set(state);
		this.setApi(state);
		return state;
	},

	/*
		Save the current state to cache for later.
	 */
	saveState(){
		let data = {};
		try{
			data = JSON.stringify(this.state);
		}catch(error){
			return false;
		}

		cache.store('state', data);
		return this;
	},

	/*
		State modifiers.
	*/
	set(data = {}){
		if(!_.isObject(data)){ 
			return this;
		}

		// Don't allow to override the state api.
		if(data.set){
			delete data.set;
		}

		// Merge (deep linked).
		merge.recursive(this.state, data);

		// Save the state for every change.
		this.saveState();
		this.emit('change', this.state);

		return this;
	},

	setApi(state){
		this.state.set = this.set.bind(this);
		return this;
	},
}

// Setup the state.
stateHandler.performSetup();

// For Debugging...
window.state = stateHandler.state;

export default stateHandler.state;
export {
	stateHandler
}
