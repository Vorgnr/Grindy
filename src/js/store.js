import Rx from 'rx'
import Storage from './utils/storage.js'
import { finishFightSubject, newMonsterSubject, attackSubject } from './actions.js'
import Hero from './core/hero.js'
import Monster from './core/monster.js'

const Store = () => {
  let loadedGame = Storage.load()
  if (!loadedGame) {
    const pseudo = window.prompt('Ton pseudo (sinon tu seras Jean-Paul) : ') || 'Jean-Paul'
    loadedGame = { pseudo }
  }

  const player = Hero()
  const monster = Monster()
  let gameState = player.initialState(loadedGame)

  const hitTillDeath = (gameState) => {
    return Rx.Observable
    .interval(1000 / gameState.ias)
    .takeWhile(() => gameState.monster.life > 0)
    .map(() => {
      attackSubject.onNext()
      return player.hit(gameState)
    })
    .doOnCompleted(() => {
      finishFightSubject.onNext()
      setTimeout(() => newMonsterSubject.onNext(), 1000)
      Storage.save(gameState)
    })
  }

  const fightStream = finishFightSubject
    .map(() => player.gainRewards(gameState, monster.rewards(gameState.level)))

  const gameStream = newMonsterSubject
    .map(() => monster.newMonster(gameState))
    .flatMap(() => hitTillDeath(gameState))
    .merge(fightStream)

  return { gameStream, gameState }
}

export default Store
