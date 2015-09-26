import React from 'react'
import ReactDOM from 'react-dom'
import {Menu} from './menu.js'

export class Grindy extends React.Component {
  render () {
    return (
      <div>
        <div className='game-layer'>Hello World</div>
        <button type='button' name='spawn-monster' id='spawn-monster'>
          Spawn Bad Guy
        </button>
        <Menu />
      </div>
    )
  }
}

ReactDOM.render(<Grindy />, document.getElementById('grindy'))
