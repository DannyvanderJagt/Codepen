import path from 'path';

export default {
  devModeCanBeEnabled: true,

  app: {
    path: 'file://' + path.join(__dirname, 'render-process/index.html'),
    backgroundColorForWindow: '#212121',
  },

  crashReporter: {
    url: 'http://localhost:3000',
  }
}