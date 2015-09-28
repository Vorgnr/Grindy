import React from 'react'

export class Inventory extends React.Component {
    constructor (props) {
      console.log(props)
      super(props)
      this.state = {
        visible: false,
        chest: props.chest
      }
    }

    items () {
      return this.state.chest.items.map((item, index) => {
        return <li key={index}> { item.state.dps } </li>
      })
    }

    render () {
      return (
        <div className='inventory'>
          <span> { this.state.chest.gold } </span>
          <ul>
            { this.items() }
          </ul>
        </div>
      )
    }
}
