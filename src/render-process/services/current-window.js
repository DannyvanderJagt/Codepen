import {
  remote
} from 'electron';

import state from '@state';

let currentWindow = {
  instance: remote.getCurrentWindow(),

  // Used to determine when user is done resizing.
  timeout: undefined,
  lastResize: Date.now(),

  listen(){
    // Just a precaution.
    this.instance.removeAllListeners();

    this.instance.on('resize', this.windowIsResizing.bind(this));
    process.on('exit', this.removeListeners);
  },
  removeListeners(){
    this.instance.removeAllListeners();
  },

  /**
   * Resizing
   */
  windowIsResizing(){
    if(state.showResizeScreen){ 
      this.lastResize = Date.now();
      return; 
    }

    state.set({
      showResizeScreen: true
    })

    this.setResizeTimeout();
  },

  setResizeTimeout(){
    if(this.timeout){
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.windowIsResized.bind(this, Date.now()), 200);
  },

  windowIsResized(time){
    let dif = Date.now() - this.lastResize;
    if(dif < 500){
      this.setResizeTimeout()
      return;
    }

    state.set({
      showResizeScreen: false
    })
  },

  /**
   * Window methods
   */
  close(){
    this.instance.close();
  },
  minimize(){
    this.instance.minimize();
  },
  maximize(){
    let isFullScreen = this.instance.isFullScreen()
    this.instance.setFullScreen(!isFullScreen);
  },

  isFullScreen(){
    return this.instance.isFullScreen();
  },
}

currentWindow.listen();

export default currentWindow;