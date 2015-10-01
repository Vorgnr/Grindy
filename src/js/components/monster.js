import React, { Component } from 'react'

export default class Monster extends Component {
  static propTypes = {
    monster: React.PropTypes.shape({
      level: React.PropTypes.number,
      life: React.PropTypes.number,
      totalLife: React.PropTypes.number
    })
  }
  render () {
    return (
      <div className='monster'>
          <p>level : { this.props.monster.level } </p>
          <progress className='life' value={this.props.monster.life} max={this.props.monster.totalLife} />
      </div>
    )
  }
}
