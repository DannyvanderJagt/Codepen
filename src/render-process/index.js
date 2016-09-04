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
import services from './services';
import state from './state';

/*

	- Services
	- Data (state, preferences, pens/posts/collections)
	- UI
 */