import React, { Component } from 'react';

class ArticleView extends Component{
	render(){
		return (
			<div className='cdpn-article-view' id={this.props.key2}>
				{this.props.children}
			</div>
		)
	}
}

export default ArticleView;