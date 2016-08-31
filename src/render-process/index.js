import Config from '../config.app';
import {
  crashReporter,
  remote
} from 'electron';

// Crash reporter.
crashReporter.start({
  productName: 'Codepen App',
  companyName: 'Codepen Community',
  submitURL: Config.crashReporter.url,
  autoSubmit: true,
});

import ui from './ui';
import codepen from './codepen';

import cache from './services/cache';

/*

	- Services
	- Data (state, preferences, pens/posts/collections)
	- UI
 */