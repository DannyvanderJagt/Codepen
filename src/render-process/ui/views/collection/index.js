import React, { Component } from 'react'
import { ArticleView } from '@ui/elements'

class Collection extends Component {
  render () {
    return (
      <ArticleView>
        Collection {JSON.stringify(this.props)};
      </ArticleView>
    )
  }
}

export default Collection
