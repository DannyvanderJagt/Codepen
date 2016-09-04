import React, {
	Component
} from 'react';

class MenuItem extends Component{
	render(){
    return (
      <div className='cdpn-menu-item'>
        <img 
          className='icon'
          src={`assets/icons/${this.props.icon}.svg`}/>
      </div>
    )
  }
}

export default MenuItem;