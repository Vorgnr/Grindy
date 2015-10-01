import React, { Component } from 'react'
import {Menu} from './menu.js'
import Hit from './hit'
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
      if (typeof this.state.indexToDelete !== 'undefined') {
        delete this.state.damages[this.state.indexToDelete]
        this.state.indexToDelete = this.state.indexToDelete + 1
        this.setState({ damages: this.state.damages, indexToDelete: this.state.indexToDelete })
        this.state.damages[this.state.indexToDelete - 1] = { hit: this.props.player.damage }
        if (this.state.indexToDelete === 25) {
          this.setState({ indexToDelete: 0 })
        }
      } else {
        if (this.state.damages.length === 25) {
          this.setState({ indexToDelete: 0 })
        }
        this.state.damages.push({ hit: this.props.player.damage, time: Math.round(Date.now() / 1000) })
      }

      this.setState({ damages: this.state.damages })
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
          <Hit damage={ this.state.damages[0] } />
          <Hit damage={ this.state.damages[1] } />
          <Hit damage={ this.state.damages[2] } />
          <Hit damage={ this.state.damages[3] } />
          <Hit damage={ this.state.damages[4] } />
          <Hit damage={ this.state.damages[5] } />
          <Hit damage={ this.state.damages[6] } />
          <Hit damage={ this.state.damages[7] } />
          <Hit damage={ this.state.damages[8] } />
          <Hit damage={ this.state.damages[9] } />
          <Hit damage={ this.state.damages[10] } />
          <Hit damage={ this.state.damages[11] } />
          <Hit damage={ this.state.damages[12] } />
          <Hit damage={ this.state.damages[14] } />
          <Hit damage={ this.state.damages[15] } />
          <Hit damage={ this.state.damages[16] } />
          <Hit damage={ this.state.damages[17] } />
          <Hit damage={ this.state.damages[18] } />
          <Hit damage={ this.state.damages[19] } />
          <Hit damage={ this.state.damages[20] } />
          <Hit damage={ this.state.damages[21] } />
          <Hit damage={ this.state.damages[22] } />
          <Hit damage={ this.state.damages[23] } />
          <Hit damage={ this.state.damages[24] } />
        </div>
        <Menu player={ this.props.player } />
      </div>
    )
  }
}
