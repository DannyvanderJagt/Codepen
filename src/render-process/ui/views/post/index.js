import React, { Component } from 'react'
import { ArticleView } from '@ui/elements'

class Post extends Component {
  render () {
    return (
      <ArticleView>
        Post {JSON.stringify(this.props)};
      </ArticleView>
    )
  }
}

export default Post
