import Hero from './hero.js'
import Monster from './monster.js'
import Logger from './logger.js'
import Rx from 'rx'

const round = (fight, monster) => {
  if (monster.current_life() > 0) {
    fight.onNext(monster)
  } else {
    fight.onCompleted()
  }
}

export default () => {
  const logger = Logger()
  const player = Hero()
  const spawnButton = document.querySelector('#spawn-monster')
  const monsters = Rx.Observable.fromEvent(spawnButton, 'click')

  const fight = Rx.Observable.create((fight) => {
    const monster = Monster()
    const rounds = setInterval(
      () => round(fight, monster),
      player.as() * 1000
    )

    logger.log('Fight')

    return () => {
      clearInterval(rounds)
    }
  }).doOnCompleted(
    () => logger.log('You defeated, Hurrah for loots!')
  )

  const game = monsters
    .startWith('startup click')
    .flatMap(() => fight)

  const gameSubscribe = game.subscribe(
    (monster) => {
      logger.log(`Player attack for: ${player.damage()}`)
      monster.receive_attack(player.damage())
      logger.log(`Monster life left: ${monster.current_life()}`)
    },
    err => logger.error(`Error: ${err}`),
    () => logger.log('End of the game Bobby')
  )

  return {
    start: () => gameSubscribe
  }
}
