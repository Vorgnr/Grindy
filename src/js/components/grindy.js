import React, { Component } from 'react'
import {Menu} from './menu.js'
import * as Actions from '../actions.js'

export class Grindy extends Component {
  static propTypes = {
    player: React.PropTypes.shape({
      level: React.PropTypes.number,
      currentXp: React.PropTypes.number,
      xpToLevelUp: React.PropTypes.number,
      chest: React.PropTypes.object
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
          <h1>Level: <strong>{this.props.player.level}</strong></h1>
          <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </div>
        <Menu currentXp={this.props.player.currentXp} xpToLevelUp={this.props.player.xpToLevelUp}
        chest={ this.props.player.chest } />
      </div>
    )
  }
}
