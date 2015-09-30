import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import {Menu} from './menu.js'
import * as Actions from '../actions.js'

export class Grindy extends Component {
  static propTypes = {
    player: React.PropTypes.shape({
      level: React.PropTypes.number,
      currentXp: React.PropTypes.number,
      xpToLevelUp: React.PropTypes.number,
      chest: React.PropTypes.object,
      damage: React.PropTypes.number
    })
  }

  constructor (props) {
    super(props)
    this.state = { damages: [] }
  }

  componentDidMount () {
    this.disposable = Actions.attackSubject.subscribeOnNext((damage, resetTimer) => {
      this.state.damages.push(damage)
      if (this.state.damages.length > 5) {
        this.state.damages.shift()
      }
      this.setState({ damages: this.state.damages })
    })
  }

  componentWillUnmount () {
    this.disposable.dispose()
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
          {(this.state.damages).map((damage, index) => {
            return <Motion key={ index } style={{x: spring(400)}}>
              {({x}) =>
                <div style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0. 0)`
                }}>
                  { this.props.player.damage } damage! { Date.now() }
                </div>
              }
            </Motion>
          })}
        </div>
        <Menu currentXp={this.props.player.currentXp} xpToLevelUp={this.props.player.xpToLevelUp}
        chest={ this.props.player.chest } />
      </div>
    )
  }
}
