import React from 'react'

export default (props) => {
  const styles = {
    width: `${(props.currentXp / props.xpToLevelUp) * 100}%`
  }

  return (
    <div>
      <div className='hud-container'>
        <div className='hit-points'>
          <div className='life'></div>
          <div className='mana'></div>
        </div>
        <div className='skills-container'></div>
        <div className='side-menu'></div>
      </div>
      <progress className='experience-bar' value={props.currentXp} max={props.xpToLevelUp}></progress>
    </div>
  )
}
