import React from 'react'

export default (props) => {
  const styles = {
    width: `${props.percent}%`
  }

  return (
    <div>
      <div className='hud-container'>
        <div className='hit-points'>
          Level: <strong>{props.level}</strong>
        </div>
        <div className='skills-container'></div>
        <div className='side-menu'></div>
      </div>
      <div className='experience-bar' style={styles}></div>
    </div>
  )
}
