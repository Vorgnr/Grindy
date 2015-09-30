import React from 'react'
import { Inventory } from './inventory.js'
import { PlayerStats } from './playerStats.js'

export class Menu extends React.Component {
  static propTypes = {
    player: React.PropTypes.shape({
      pseudo: React.PropTypes.string,
      level: React.PropTypes.number,
      currentXp: React.PropTypes.number,
      xpToLevelUp: React.PropTypes.number,
      totalXpToLevelUp: React.PropTypes.number,
      totalXp: React.PropTypes.number,
      damage: React.PropTypes.number,
      ias: React.PropTypes.number,
      chest: React.PropTypes.object
    })
  }

  constructor (props) {
    super(props)
    this.state = {
      isInventoryVisible: false,
      isPlayerStatsVisible: false
    }
  }

  toggleInventory () {
    this.setState({isInventoryVisible: !this.state.isInventoryVisible})
  }

  togglePlayerStats () {
    this.setState({isPlayerStatsVisible: !this.state.isPlayerStatsVisible})
  }

  render () {
    return (
      <div>
        <div className='hud-container'>
          <div className='hit-points'>
            <div className='life'></div>
            <div className='mana'></div>
          </div>
          <div className='skills-container'></div>
          <div className='side-menu'>
            <button onClick={ ::this.toggleInventory }> i </button>
            { this.state.isInventoryVisible ? <Inventory chest={this.props.player.chest} /> : '' }
            <button onClick={ ::this.togglePlayerStats }> s </button>
            { this.state.isPlayerStatsVisible ? <PlayerStats player={this.props.player} /> : '' }
          </div>
        </div>
        <progress className='experience-bar' value={this.props.player.currentXp} max={this.props.player.xpToLevelUp}></progress>
      </div>
    )
  }
}
