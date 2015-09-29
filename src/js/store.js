import Rx from 'rx'
import Storage from './utils/storage.js'
import Hero from './core/hero.js'
import Monster from './core/monster.js'

const Store = () => {
  let gameState = {
    pseudo: '',
    ias: 10,
    damage: 1,
    chest: {
      gold: 0,
      items: []
    },
    level: {
      current: 1,
      totalXp: 0,
      currentXp: 0,
      xpToLevelUp: 100,
      totalXpToLevelUp: 100
    }
  }

  // let loadedGame = Storage.load()
  // if (!loadedGame) {
  //   const pseudo = window.prompt('Ton pseudo (sinon tu seras Jean-Paul) : ') || 'Jean-Paul'
  //   loadedGame = { pseudo, new: true }
  // }
  const player = Hero()
  let gameStream = new Rx.Subject()
  let monster = Monster()
  monster.state.life = 0

  const self = {
    newMonster: () => self.monster = Monster(player.state.level.current),
    onNext: () => {
      gameStream.onNext(player.state)
      Storage.save(player.state)
    },
    player,
    monster,
    gameStream
  }

  return self
}

export default Store
