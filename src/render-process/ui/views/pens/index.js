import React, { Component } from 'react'
import { CarouselView } from '@ui/elements'

class Pens extends Component {
  render () {
    return (
      <CarouselView>
        Pens {JSON.stringify(this.props)};
      </CarouselView>
    )
  }
}

export default Pens
