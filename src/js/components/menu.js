import React from 'react'

export default (props) => {
  const styles = {
    width: `${(props.currentXp / props.xpToLevelUp) * 100}%`
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
      <div className='experience-bar'>
        <div className='experience-bar--current' style={styles}></div>
        <div className='experience-bar--numbers'>{`${props.currentXp} / ${props.xpToLevelUp}`}</div>
      </div>
    </div>
  )
}
