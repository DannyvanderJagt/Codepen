import React, { Component } from 'react'
import { CarouselView } from '@ui/components/carousel';
import { codepen } from '@services';
import ImageLoader from 'react-imageloader'

class Pens extends Component {
	constructor(){
		super();
		
		this.state = {
			pens: [],
			type: 'picked',
		};
	}
	setPenType(type){
		console.log('setType');
		this.setState({type});
		this.getData();
	}
	renderPreloader(){
		return <div> Loading... </div>
	}
	getData(){
		let data = codepen.get(`pens.${this.state.type}`, ['thesuitcase'], (response) => {
			console.log('response', response)
			this.setState({pens: response.data})
		});
	}
	componentDidMount(){
		this.getData();
	}
	renderPen(pos, pen){
		return (
			<div className='pen' key={pos}>
				{/*<ImageLoader 
					src={pen.images.small}
					preloader={this.renderPreloader}/>*/}
			</div>
		)
	}
	renderPens(){
		let pens = [];

		for(let i = 0; i < 12; i++){
			if(this.state.pens[i]){
				pens.push(this.renderPen(i, this.state.pens[i]));
			}
		}
		return pens;
	}
	renderMenu(){
		return (
			<div className='sub-menu'>
				<div 
					className='item'
					onClick={this.setPenType.bind(this, 'popular')}>Popular</div>
				<div 
					className='item'
					onClick={this.setPenType.bind(this, 'picked')}>Picked</div>
			</div>	
		)
	}
  render () {
    return (
      <CarouselView className='cdpn-pens-view'>
      
	      	{this.renderPens()}
	      	{this.renderMenu()}
      	
      </CarouselView>
    )
  }
}

export default Pens
