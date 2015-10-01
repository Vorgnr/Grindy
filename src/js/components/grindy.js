import React, { Component } from 'react'
import Menu from './menu.js'
import Monster from './monster.js'
import * as Actions from '../actions.js'

export class Grindy extends Component {
  static propTypes = {
    player: React.PropTypes.shape({
      monster: React.PropTypes.object
    })
  }

  click (event) {
    Actions.newMonsterSubject.onNext()
  }

  render () {
    return (
      <div>
        <div className='game-layer'>
          <button type='button' name='spawn-monster' id='spawn-monster' onClick={::this.click}>
            Spawn Bad Guy
          </button>
          <Monster monster={this.props.player.monster} />
        </div>
        <Menu player={this.props.player} />
      </div>
    )
  }
}
