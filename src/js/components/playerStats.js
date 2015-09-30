import React, { Component } from 'react'

export class PlayerStats extends Component {
  static propTypes = {
    player: React.PropTypes.shape({
      pseudo: React.PropTypes.string,
      level: React.PropTypes.number,
      currentXp: React.PropTypes.number,
      xpToLevelUp: React.PropTypes.number,
      totalXpToLevelUp: React.PropTypes.number,
      totalXp: React.PropTypes.number,
      damage: React.PropTypes.number,
      ias: React.PropTypes.number
    })
  }

  render () {
    return (
      <div className='tool-menu player-stats'>
        <h1>Level: <strong>{this.props.player.level}</strong></h1>
        <ul>
          <li> { this.props.player.pseudo } </li>
          <li> ias : { this.props.player.ias } </li>
          <li> damage : { this.props.player.damage } </li>
          <li> level : { this.props.player.level } </li>
          <li> totalXp : { this.props.player.totalXp } </li>
          <li> currentXp : { this.props.player.currentXp } </li>
          <li> xpToLevelUp : { this.props.player.xpToLevelUp } </li>
          <li> totalXpToLevelUp : { this.props.player.totalXpToLevelUp } </li>
        </ul>
      </div>
    )
  }
}
