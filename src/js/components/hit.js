import React from 'react'
import { Motion, spring } from 'react-motion'

const Hit = (props) => {
  if (props.damage) {
    return (
      <Motion defaultStyle={{ opacity: 1, scale: 1, y: 400 }} style={{ opacity: spring(0, [50, 50]), scale: spring(2, [50, 50]), y: spring(0, [50, 50]) }}>
        {({ opacity, scale, y }) =>
          <div className='hit' style={{
            opacity: opacity,
            transform: `translate3d(0, ${y}px, 0) scale(${scale})`
          }}>HIT for { props.damage.hit } !</div>
        }
      </Motion>
    )
  } else {
    return (<div />)
  }
}

export default Hit
