import fs from 'fs-extra';
import config from '../config.app';
import merge from 'merge';

class Store{
	constructor(name, opts){
		this.name = name;
		this.opts = opts || {};
		this.path = config.cache.path + '/' + name + '.json';

		this.data = {};

		this.setDefaults();

		this.ensureFile();
		this.load();

		return this.data;
	}
	setDefaults(){
		if(!this.opts.defaults){ return; }
		this.data = this.opts.defaults;	
	}
	ensureFile(){
		fs.ensureFileSync(this.path);
		return this;
	}
	save(data){
		try{
			data = JSON.stringify(this.data);
		}catch(error){
			return false;
		}

		fs.writeFileSync(this.path, data);
		return true;
	}
	load(){
		let data = fs.readFileSync(this.path, 'utf-8');

		try{
			data = JSON.parse(data);
		}catch(error){
			data = {};
		}

		this.set(data);
		this.setApi();

		return this;
	}
	set(data){
		merge.recursive(this.data, data);
		console.log('set', this.data);
		this.save();
		this.setApi();
		return this.data;
	}
	clear(){
		this.data = {}
	}

	setApi(){
		if(!this.data){ 
			this.data = {}; 
		}
		this.data.set = this.set.bind(this);
		this.data.clear = this.clear.bind(this);
		return this;
	}
}

export default Store;