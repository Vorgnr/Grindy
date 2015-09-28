import React, {Component} from 'react'
import {Menu} from './menu.js'
import combineLatestObj from '../utils/combineLatestObj'

export function subscribe (streamMap, initialState) {
  const stateStream = combineLatestObj(streamMap)

  class Subscribe extends Component {
    constructor (props) {
      super(props)
      this.state = initialState
    }

    componentDidMount () {
      this.disposable = stateStream.subscribeOnNext(state => this.setState(state))
    }

    componentWillUnmount () {
      this.disposable.dispose()
    }

    render () {
      return (
        <GrindyDOM {...this.state} />
      )
    }
  }

  return Subscribe
}

export class GrindyDOM extends React.Component {
  static propTypes = {
    player: React.PropTypes.shape({
      level: React.PropTypes.shape({
        current: React.PropTypes.number,
        currentXp: React.PropTypes.number,
        xpToLevelUp: React.PropTypes.number
      })
    })
  }

  render () {
    return (
      <div>
        <div className='game-layer'>
          <button type='button' name='spawn-monster' id='spawn-monster'>
            Spawn Bad Guy
          </button>
          {JSON.stringify(this.props, null, 2)}
        </div>
        <Menu level={this.props.player.level.current} percent={(this.props.player.level.currentXp / this.props.player.level.xpToLevelUp) * 100}/>
      </div>
    )
  }
}
