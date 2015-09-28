import Rx from 'rx'
import Storage from './utils/storage.js'
import Hero from './core/hero.js'
import Monster from './core/monster.js'

const Store = () => {
  let loadedGame = Storage.load()
  if (!loadedGame) {
    const pseudo = window.prompt('Ton pseudo (sinon tu seras Jean-Paul) : ') || 'Jean-Paul'
    loadedGame = { pseudo, new: true }
  }
  const player = Hero(loadedGame)
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
