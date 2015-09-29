import React from 'react'
import { Inventory } from './inventory.js'

export class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chest: props.chest,
      level: props.level,
      isInventoryVisible: false,
      styles: {
        width: `${props.percent}%`
      }
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
        <div className='experience-bar' style={this.state.styles}></div>
      </div>
    )
  }
}
