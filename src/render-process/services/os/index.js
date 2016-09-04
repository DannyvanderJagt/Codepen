/*
  OS

  This is a self-contained module which will only 
  modify the state when necessary. 
 */
import state from '@state';
import OS from 'os';
import MacReleases from './mac-releases';

// Convert to easy to understand language :P
let platform = OS.platform();

switch(platform){
  case 'darwin': 
    platform = 'macOS';
    break;
  case 'win32':
    platform = 'windows';
    break;
}

// Release & Release name.
// Note: This is as an class and used to modify the 
// UI for a more native feeling.
let release = OS.release();
let releaseName;

if(platform === 'macOS'){
  let major = release.split('.')[0];
  major = Number(major, 10);
  releaseName = MacReleases[major];
}

// Update the state.
state.set({
  OS: {
    platform, 
    release, 
    releaseName,
  }
});