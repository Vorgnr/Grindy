import React, {Component} from 'react'
import {Menu} from './menu.js'
import combineLatestObj from '../utils/combineLatestObj'

export function subscribe (WrappedComponent, streamMap, initialState) {
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
  render () {
    return (
      <div>
        <div className='game-layer'>
          <button type='button' name='spawn-monster' id='spawn-monster'>
            Spawn Bad Guy
          </button>
          {JSON.stringify(this.props, null, 2)}
        </div>
        <Menu />
      </div>
    )
  }
}
