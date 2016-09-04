import React, { Component } from 'react'
import { CarouselView } from '@ui/elements'

class Posts extends Component {
  render () {
    return (
      <CarouselView>
        Posts {JSON.stringify(this.props)};
      </CarouselView>
    )
  }
}

export default Posts
