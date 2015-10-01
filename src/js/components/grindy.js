import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
    this.disposable = Actions.attackSubject.subscribeOnNext(() => {
      this.state.damagesNode.push(`damage${this.state.damagesNode.lenght + 1}`)
      this.setState({ up: true, attack: true, damagesNode: this.state.damagesNode })
      setTimeout(() => this.setState({ up: false }), 900)
      setTimeout(() => this.setState({ attack: false }), 400)
      ReactDOM.render(
        <Motion style={{ opacity: spring(this.state.attack ? 1 : 0), scale: spring(this.state.up ? 1.5 : 1), y: spring(this.state.up ? -100 : 300) }}>
          {({ opacity, scale, y }) =>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                opacity: opacity,
                transform: `translate3d(0, ${y}px, 0) scale(${scale})`
              }}>HIT for {this.props.player.damage } !</div>
            </div>
          }
        </Motion>,
        document.getElementById(this.state.damagesNode[this.state.damagesNode.length - 1])
      )
      setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById(this.state.damagesNode.shift())))
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
          <div id='hacky' />
        </div>
        <Menu currentXp={this.props.player.currentXp} xpToLevelUp={this.props.player.xpToLevelUp}
        chest={ this.props.player.chest } />
      </div>
    )
  }
}
