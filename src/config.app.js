import path from 'path';

export default {
  devModeCanBeEnabled: true,

  cache: {
  	path: path.join(__dirname, '../cache'),
  },

  app: {
    path: `file://${__dirname}/render-process/index.html`,
    backgroundColorForWindow: '#212121',
  },

  crashReporter: {
    url: 'http://localhost:3000',
  }
}