import React from 'react'
import Menu from './menu.js'

export default (props) => {
  return (
    <div>
      <div className='game-layer'>
        <button type='button' name='spawn-monster' id='spawn-monster'>
          Spawn Bad Guy
        </button>
        {JSON.stringify(props, null, 2)}
      </div>
      <Menu level={props.player.level.current} currentXp={props.player.level.currentXp} xpToLevelUp={props.player.level.xpToLevelUp} />
    </div>
  )
}
