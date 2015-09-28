import React from 'react'
import Menu from './menu.js'
import { Inventory } from './inventory.js'

export default (props) => {
  return (
    <div>
      <div className='game-layer'>
        <button type='button' name='spawn-monster' id='spawn-monster'>
          Spawn Bad Guy
        </button>
        { JSON.stringify(props, null, 2) }
      </div>
      <Menu level={ props.player.level.current }
            percent={ (props.player.level.currentXp / props.player.level.xpToLevelUp) * 100 } />
      <Inventory chest={ props.player.chest } />
    </div>
  )
}
