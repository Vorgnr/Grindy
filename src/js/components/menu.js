import React from 'react'
import { Inventory } from './inventory.js'

export class Menu extends React.Component {
  static propTypes = {
    currentXp: React.PropTypes.number,
    xpToLevelUp: React.PropTypes.number,
    chest: React.PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      isInventoryVisible: false
    }
  }

  toggleInventory () {
    this.setState({isInventoryVisible: !this.state.isInventoryVisible})
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
            { this.state.isInventoryVisible ? <Inventory chest={this.props.chest} /> : '' }
          </div>
        </div>
        <progress className='experience-bar' value={this.props.currentXp} max={this.props.xpToLevelUp}></progress>
      </div>
    )
  }
}
