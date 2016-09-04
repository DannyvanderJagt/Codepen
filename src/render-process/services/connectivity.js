/*
  Connectivity

  This is a self-contained module which will only 
  modify the state when necessary. 
 */
import state from '@state';

let connectivity = {
  listen(){
    window.addEventListener('online',  this.setCurrentState.bind(this));
    window.addEventListener('offline',  this.setCurrentState.bind(this));
  },
  setCurrentState(){
    state.set({
      isOnline: navigator.onLine
    })
  }
}

// Set current state and listen for changes.
connectivity.setCurrentState();
connectivity.listen();

export default connectivity;