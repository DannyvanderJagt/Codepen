import React, { Component } from 'react';
import {Pen, Post, Collection} from '@ui/views';

class Articles extends Component{
	getComponent(type){
		switch(type){
			case 'pen': return Pen; break;
			case 'post': return Post; break;
			case 'collection': return Collection; break;
		}
	}
	renderArticles(){
		return this.props.articles.map((article) => {
			let component = this.getComponent(article.type);
			return React.createElement(component, article);
		})
	}
	render(){
		let className = [
			'cdpn-articles',
			this.props.articles && this.props.articles.length > 0 ? 'visible' : 'hidden'
		].join(' ');

		return (
			<div className={className}>
				{this.renderArticles()}
			</div>
		)
	}
}

export default Articles;