import React, { Component } from 'react'

export default class Weapon extends Component {
  static propTypes = {
    weapon: React.PropTypes.shape({
      type: React.PropTypes.string
    })
  }

  render () {
    return (
      <div className={ `weapon ${this.props.weapon.type}` }></div>
    )
  }
}
