import Rx from 'rx'
import Storage from './utils/storage.js'
import Hero from './core/hero.js'
import Monster from './core/monster.js'

const Store = () => {
  const player = Hero(Storage.load())
  let gameState = new Rx.Subject()
  let monster = Monster()
  monster.state.life = 0

  const self = {
    newMonster: () => self.monster = Monster(player.state.level.current),
    onNext: () => {
      gameState.onNext(player.state)
      Storage.save(player.state)
    },
    player,
    monster,
    gameState
  }

  return self
}

export default Store
