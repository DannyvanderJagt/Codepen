import _ from 'underscore';
import fs from 'fs-extra';
import request from 'request';
import urls from './url';
import path from 'path';
import config from '@../config.app';
import cache from '@services/cache';
import state from '@state';

let Codepen = {
	get(hash, args = [], cb){
		if(!urls[hash]){ return false; }
		if(!cb){ return false; }
		if(!_.isFunction(cb)){ return false; }

		let url = urls[hash].call(this, args);
		let filePath = this.compileFilePath(hash, args);

		// Use cache.
		let cached = cache.exists(filePath);
		
		if(cached){
			let cachedData = cache.getJSON(filePath);

			// Only use the cached data for a certain amount of time.
			if(cachedData.date > Date.now() - state.preferences.codepenCacheRate){
				cb(cachedData);
				return true;
			}
		}

		request({
			url,
			json: true
		}, (error, response, body) => {
			let data = {
				hash, args,
				date: Date.now(),
				data: body.data
			}

			// Store for later.
			cache.storeJSON(filePath, data);
			cb(data)
		});
		return true;
	},
	compileFilePath(hash, args){
		let filePath = hash + '.' + args.join('.') + '.json';
		return path.join('codepen', filePath);
	}
}


window.codepen = Codepen;
export default Codepen;