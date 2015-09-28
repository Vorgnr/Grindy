import React from 'react'

export class Menu extends React.Component {
  static propTypes = {
    level: React.PropTypes.number,
    percent: React.PropTypes.number
  }

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
