import React from 'react'
import Menu from './menu.js'

export default (props) => {
  delete props.player.chest.items
  return (
    <div>
      <div className='game-layer'>
        <button type='button' name='spawn-monster' id='spawn-monster'>
          Spawn Bad Guy
        </button>
        <h1>Level: <strong>{props.player.level.current}</strong></h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
      </div>
      <Menu currentXp={props.player.level.currentXp} xpToLevelUp={props.player.level.xpToLevelUp} />
    </div>
  )
}
