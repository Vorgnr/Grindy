import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Motion, spring } from 'react-motion'
import {Menu} from './menu.js'
import * as Actions from '../actions.js'

export class Grindy extends Component {
  static propTypes = {
    player: React.PropTypes.object
  }

  click (event) {
    Actions.newMonsterSubject.onNext()
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

  render () {
    return (
      <div>
        <div className='game-layer'>
          <button type='button' name='spawn-monster' id='spawn-monster' onClick={::this.click}>
            Spawn Bad Guy
          </button>

        </div>
        <Menu player={this.props.player} />
      </div>
    )
  }
}
