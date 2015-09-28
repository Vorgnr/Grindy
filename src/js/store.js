import Rx from 'rx'
import Hero from './core/hero.js'
import Monster from './core/monster.js'

const Store = () => {
  const player = Hero()
  let gameState = new Rx.Subject()
  let monster = Monster()

  const self = {
    newMonster: () => self.monster = Monster(player.state.level.current),
    onNext: () => gameState.onNext(player.state),
    player,
    monster,
    gameState
  }

  return self
}

export default Store
