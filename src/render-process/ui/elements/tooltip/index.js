import React, { Component } from 'react';
import ToolTipItem from './item';

class ToolTip extends Component{
	constructor(){
		super();
		this.state = { 
			visible: undefined,
		}
	}
	show(){
		this.setState({visible: true})
	}
	hide(){
		this.setState({visible: false})
	}
	renderToolTip(){
		if(!this.props.items){ return; }
		return (
			<div className='tooltip-container'>
				<div className='tooltip'>
					{this.props.location === 'bottom' ? <div className='arrow'/> : false}
					{this.renderItems()}
					{this.props.location === 'bottom' ? false : <div className='arrow'/> }
				</div>
			</div>
		)
	}
	renderItems(){
		if(!this.props.items){ return false; };
		return this.props.items.map((item, pos) => {
			return <ToolTipItem title={item.title} icon={item.icon} key={pos}/>
		})
	}
	render(){
		let className = [
			'div-with-tooltip',
			this.props.location === 'bottom' ? 'bottom' : 'top',
			this.state.visible === undefined ? '' : this.state.visible ? 'visible': 'hidden'
		].join(' ');
		
		return (
			<div 
				className={className}
				onMouseEnter={this.show.bind(this)}
				onMouseLeave={this.hide.bind(this)}>

				{this.renderToolTip()}
				<span className={this.props.className}> {this.props.children} </span>
			</div>
		)
	}
}

export default ToolTip;


// class DivWithToolTip extends Component{
// 	renderToolTip(){
// 		if(!this.props.items){ return false;}
// 		return <ToolTip items={this.props.items} visible={this.state.visible}/>
// 	}
// 	render(){
// 		return (
// 			<div 
// 				className='div-with-tooltip'
// 				onMouseEnter={this.show.bind(this)}
// 				onMouseLeave={this.hide.bind(this)}>
// 				{this.renderToolTip()}
// 				<span className={this.props.className}> {this.props.children} </span>
// 			</div>
// 		)
// 	}
// }