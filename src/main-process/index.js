import config from '../config.app';
import electron, {
  crashReporter
} from 'electron';

// Crash reporter.
crashReporter.start({
  productName: 'Codepen App',
  companyName: 'Codepen Community',
  submitURL: config.crashReporter.url,
  autoSubmit: true,
});

// App & Window handler.
import App from './app-handler';
import Window from './window';
import Menu from './menu';
