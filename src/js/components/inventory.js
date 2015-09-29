import React from 'react'

export class Inventory extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        visible: false,
        chest: props.chest
      }
    }

    items () {
      if (typeof this.state.chest.items !== 'undefined') {
        return this.state.chest.items.map((item, index) => {
          return <div className='inventory-item' key={index}> { item.state.dps } </div>
        })
      }
    }

    render () {
      return (
        <div className='inventory'>
          <span> { this.state.chest.gold } </span>
          <div>
            { this.items() }
          </div>
        </div>
      )
    }
}
