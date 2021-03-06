import React from 'react'
import Weapon from './weapon.js'

export class Inventory extends React.Component {
  static propTypes = {
    chest: React.PropTypes.shape({
      items: React.PropTypes.array,
      gold: React.PropTypes.number
    })
  }

  items () {
    if (typeof this.props.chest.items !== 'undefined') {
      return this.props.chest.items.map((item, index) => {
        return <div className='inventory-item' key={index}>
          <Weapon weapon={ item.state }/>
        </div>
      })
    }
  }

  render () {
    return (
      <div className='tool-menu inventory'>
        <span>{ this.props.chest.gold }</span>
        <div>
          { this.items() }
        </div>
      </div>
    )
  }
}
