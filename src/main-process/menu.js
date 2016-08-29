import config from '../config.app';
import {
  Menu, 
  app,
  shell,
} from 'electron';
import Window from './window';

 var template = [
  {
    label: "Application",
    submenu: [
        { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: 'Check for Updates', 
          click(){
            Window.send('menu', {view: 'updates'}) 
          }
        },
        { label: 'Preferences', 
          click(){
            Window.send('menu', {view: 'preferences'}) 
          }
        },
        { type: "separator" },
        { label: "Open Codepen.IO", click(){
          shell.openExternal('http://codepen.io')
        } },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]
  }, 
  {
    label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]
  },
  {
    label: 'User',
    submenu: [
      {label: 'Logout', accelerator: 'CmdOrCtrl+0',
        click(){
          Window.send('menu', {view: 'logout'});
        }
      },
      { type: "separator" },
      {label: 'Your Profile', 
        click(){
          Window.send('menu', {view: 'profile'}) 
        }
      },
    ]
  },
  {
    label: 'Pens',
    submenu: [
      {label: 'New Pen', accelerator: 'CmdOrCtrl+1',
        click(){
          Window.send('menu', {view: 'new pen'}) 
        }
      },
      { type: "separator" },
      {label: 'Your Pens',
        click(){
          Window.send('menu', {view: 'your pens'}) 
        }
      },
      { type: "separator" },
      {label: 'Popular Pens', 
        click(){
          Window.send('menu', {view: 'popular pens'}) 
        }
      },
      {label: 'Picked Pens', 
        click(){
          Window.send('menu', {view: 'popular pens'}) 
        }
      },
      {label: 'Recent Pens',
        click(){
          Window.send('menu', {view: 'popular pens'}) 
        }
      },
    ]
  },
  {
    label: 'Posts',
    submenu: [
      {label: 'New Post', accelerator: 'CmdOrCtrl+2'},
      { type: "separator" },
      {label: 'Your Posts'},
      { type: "separator" },
      {label: 'Popular Posts'},
      {label: 'Picked Posts'},
      {label: 'Recent Posts'},
    ]
  },
  {
    label: 'Collections',
    submenu: [
      {label: 'New Collection', accelerator: 'CmdOrCtrl+3'},
      { type: "separator" },
      {label: 'Your Collections'},
      { type: "separator" },
      {label: 'Popular Collections'},
      {label: 'Picked Collections'},
      {label: 'Recent Collections'},
    ]
  },
  {
    label: 'Editor',
    submenu: [
      {label: 'Preferences'},
      { type: "separator" },
      { label: 'Use Left Editor'},
      { label: 'Use Right Editor'},
      { label: 'Use Top Editor'},
    ]
  },
  {
    label: 'View',
    submenu: [
      {label: 'Toggle Menu', accelerator: 'ALT+M'},
      {label: 'Toggle Notification Center', accelerator: 'ALT+N'},
    ]
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Zoom',
        role: 'zoom'
      }
    ]
  }
];


if(config.devModeCanBeEnabled){
  template.push({
    label: 'Developer',
    submenu: [
      {label: 'Toggle DevTools', accelerator: 'CmdOrCtrl+D', click(){
        Window.toggleDevTools()
      }},
      {label: 'Reload', accelerator: 'CmdOrCtrl+R', click(){
        Window.reload();
      }}
    ]
  })
}

app.on('ready', () => {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
});
