import React from 'react'
import { Inventory } from './inventory.js'

export class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chest: props.chest,
      level: props.level,
      isInventoryVisible: false,
      currentXp: props.currentXp,
      xpToLevelUp: props.xpToLevelUp
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
            Level: <strong>{this.state.level}</strong>
          </div>
          <div className='skills-container'></div>
          <div className='side-menu'>
            <button onClick={ ::this.toggleInventory }> i </button>
            { this.state.isInventoryVisible ? <Inventory chest={this.state.chest} /> : '' }
          </div>
        </div>
        <progress className='experience-bar' value={this.state.currentXp} max={this.state.xpToLevelUp}></progress>
      </div>
    )
  }
}
