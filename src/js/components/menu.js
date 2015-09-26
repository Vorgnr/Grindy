import React from 'react'

export class Menu extends React.Component {
  render () {
    return (
      <div className='hud-container'>
        <div className='hit-points'></div>
        <div className='skills-container'></div>
        <div className='side-menu'></div>
        <div className='experience-bar'></div>
      </div>
    )
  }
}
