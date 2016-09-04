/*
	Codepen Router
 */
import EventEmitter from 'events';


let history = {
	state: [],

	performSetup(){
		this.ee = new EventEmitter();
		this.on = this.ee.on.bind(this);
		this.emit = this.ee.emit.bind(this);
	},

	goto(path){
		this.state.push(path);
		this.emit('change', this.getCurrentPath());
		return this;
	},

	pop(){
		this.state.pop();
		this.emit('change', this.getCurrentPath());
		return this;
	},

	getCurrentPath(){
		return this.state[this.state.length - 1];
	}

}

// Setup everything...
history.performSetup();

// For debugging...
if(!window.router){
	window.router = {}
}
window.router.history = history;

export default history;