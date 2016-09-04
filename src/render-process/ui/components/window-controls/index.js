import React, {
  Component
} from 'react';

import {
  currentWindow
} from '@services';

class WindowControls extends Component{

  render(){
    let className = [
      'cdpn-window-controls',
      this.props.visible ? 'visible' : 'overlay'
    ].join(' ')

    return (
      <div className={className}>
        <div className='close' onClick={currentWindow.close.bind(currentWindow)}/>
        <div className='minimize' onClick={currentWindow.minimize.bind(currentWindow)}/>
        <div className='maximize' onClick={currentWindow.maximize.bind(currentWindow)}/>
      </div>
    );
  }

}

export default WindowControls;