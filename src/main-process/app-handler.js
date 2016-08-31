import {
  app
} from 'electron';

let AppHandler = {
  isReady: false,

  listen(){
    app.on('ready', this.appIsReady.bind(this));
    app.on('will-quit', this.appWillQuit.bind(this));
    app.on('quit', this.appDidQuit.bind(this));
    app.on('window-all-closed', this.allWindowsAreClosed.bind(this));
  },

  appIsReady(){
    this.isReady = true;
  },

  appWillQuit(){},
  appDidQuit(){},
  allWindowsAreClosed(){}
};

// Automatic startup.
AppHandler.listen();

export default AppHandler;