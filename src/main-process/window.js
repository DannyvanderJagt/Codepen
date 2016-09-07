/**
 * Window.
 *
 * Handles the Electron window.
 * NOTE: Only 1 window is allowed to be created/active. 
 */

import electron, {
  app,
  BrowserWindow,
} from 'electron';
import config from '../config.app';
import appHandler from './app-handler';

let Window = {
  activeWindow: undefined,

  listen(){
    app.on('ready', this.appIsReady.bind(this));
    app.on('activate', this.appDidActivate.bind(this));
  },

  appIsReady(){
    this.createWindow();
  },

  appDidActivate(){
    if(!appHandler.isReady){ return; }

    if(this.activeWindow){
      this.activeWindow.show();
      return;
    }
    
    this.createWindow();
  },

  createWindow(){
    if(this.activeWindow){ return; }

    // Calculate the default width and height.
    // Note: screen can only be loaded after app.on('ready') has been fired!
    let screen = require('electron').screen;
    let primaryDisplay = screen.getPrimaryDisplay();

    let [width, height] = [
      Math.round(primaryDisplay.workAreaSize.width * .9),
      Math.round(primaryDisplay.workAreaSize.height * .9),
    ];

    // Create the actual window.
    this.activeWindow = new BrowserWindow({
      width,
      height,
      // frame: false,
      titleBarStyle: 'hidden',
      center: true,
      backgroundColor: config.app.backgroundColorForWindow,
      show: false,
    })

    // Load the app.
    this.activeWindow.loadURL(config.app.path);

    // // Listen for events.
    this.activeWindow.on('close', this.windowWillClose.bind(this));
    this.activeWindow.on('closed', this.windowDidClose.bind(this));
  },

  windowWillClose(){},
  windowDidClose(){
    this.activeWindow = undefined;
  },
  
  openDevTools(){
    if(!this.activeWindow){ return; }
    this.activeWindow.webContents.openDevTools();
  },
  closeDevTools(){
    if(!this.activeWindow){ return; }
    this.activeWindow.webContents.closeDevTools();
  },
  toggleDevTools(){
    if(!this.activeWindow){ return; }
    if(this.activeWindow.webContents.isDevToolsOpened()){
      this.closeDevTools();
      return;
    }
    this.openDevTools();
  },

  reload(){
    if(!this.activeWindow){ return; }
    this.activeWindow.reload();
  },

  send(...args){
    if(!this.activeWindow){ return; }
    let webContents = this.activeWindow.webContents;
    webContents.send.apply(webContents, args);
  }


}

// Automatic startup.
Window.listen();

export default Window;