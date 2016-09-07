import React, { Component } from 'react'
import { CarouselView } from '@ui/components/carousel'

class Collections extends Component {
  render () {
    return (
      <CarouselView>
        Collections {JSON.stringify(this.props)};
      </CarouselView>
    )
  }
}

export default Collections
