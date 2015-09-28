import React from 'react'

export class Menu extends React.Component {
  render () {
    const styles = {
      width: `${this.props.percent}%`
    }

    return (
      <div>
        <div className='hud-container'>
          <div className='hit-points'>
            Level: <strong>{this.props.level}</strong>
          </div>
          <div className='skills-container'></div>
          <div className='side-menu'></div>
        </div>
        <div className='experience-bar' style={styles}></div>
      </div>
    )
  }
}
