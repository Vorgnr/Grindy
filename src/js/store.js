import Rx from 'rx'
import Storage from './utils/storage.js'
import { finishFightSubject, newMonsterSubject } from './actions.js'
import Hero from './core/hero.js'
import Monster from './core/monster.js'

const Store = () => {
  let loadedGame = Storage.load()
  if (!loadedGame) {
    const pseudo = window.prompt('Ton pseudo (sinon tu seras Jean-Paul) : ') || 'Jean-Paul'
    loadedGame = { pseudo, new: true }
  }

  const player = Hero()
  const monster = Monster()
  let gameState = player.initialState(loadedGame)

  const hitTillDeath = (gameState) => {
    return Rx.Observable
    .interval(1000 / gameState.ias)
    .takeWhile(() => gameState.monster.life > 0)
    .map(() => player.hit(gameState))
    .doOnCompleted(() => {
      finishFightSubject.onNext()
      Storage.save(gameState)
    })
  }

  const fightStream = finishFightSubject
    .map(() => player.gainRewards(gameState, monster.rewards))

  const gameStream = newMonsterSubject
    .map(() => monster.newMonster(gameState))
    .flatMap(() => hitTillDeath(gameState))
    .merge(fightStream)

  return { gameStream, gameState }
}

export default Store
