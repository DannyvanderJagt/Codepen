import React, { Component } from 'react'
import { ArticleView } from '@ui/elements'

class Pen extends Component {
  render () {
    return (
      <ArticleView>
        Pen {JSON.stringify(this.props)};
      </ArticleView>
    )
  }
}

export default Pen
