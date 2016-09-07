import React, { Component } from 'react'
import { CarouselView } from '@ui/components/carousel'

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
