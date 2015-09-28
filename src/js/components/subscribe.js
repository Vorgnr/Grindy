import React, { Component } from 'react'
import combineLatestObj from '../utils/combineLatestObj'
import Grindy from './grindy.js'

export default (streamMap, initialState) => {
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
        <Grindy {...this.state} />
      )
    }
  }

  return Subscribe
}
