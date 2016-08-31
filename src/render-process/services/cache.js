import config from '../../config.app';
import fs from 'fs-extra';
import path from 'path';

let Cache = {

	store(filePath, data){
		let cachePath = path.join(config.cache.path, filePath);
		fs.ensureFileSync(cachePath);

		fs.writeFileSync(cachePath, data);
	},

	storeJSON(filePath, data){
		try{
			data = JSON.stringify(data);
		}catch(error){
			return false;
		}

		this.store(filePath, data);
	},

	exists(filePath){
		let cachePath = path.join(config.cache.path, filePath);

		try{
			fs.lstatSync(cachePath)
			return true;
		}catch(err){
			return false;
		}
	},

	get(filePath){
		let cachePath = path.join(config.cache.path, filePath);

		if(!this.exists(filePath)){
			return false;
		}

		return fs.readFileSync(cachePath, 'utf-8');
	},

	getJSON(filePath){
		let rawData = this.get(filePath);
		try{
			return JSON.parse(rawData);
		}catch(error){
			// Fallback.
			return {}
		}
	}
}

// For debugging...
window.cache = Cache;

export default Cache;