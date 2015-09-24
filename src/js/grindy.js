import Hero from './hero.js'
import Monster from './monster.js'
import Rx from 'rx'

const round = (fight, monster) => {
  if (monster.current_life() > 0) {
    fight.onNext(monster)
  } else {
    fight.onCompleted()
  }
}

export default () => {
  const player = Hero()
  const gameLayerElement = document.querySelector('.game-layer')
  const spawnButton = document.querySelector('#spawn-monster')
  const monsters = Rx.Observable.fromEvent(spawnButton, 'click')

  const fight = Rx.Observable.create((fight) => {
    const monster = Monster()
    const rounds = setInterval(
      () => round(fight, monster),
      player.as() * 1000
    )
    gameLayerElement.innerHTML = ''
    gameLayerElement.innerHTML += '<p><strong>Fight!</strong></p>'

    return () => {
      clearInterval(rounds)
    }
  }).doOnCompleted(
    () => gameLayerElement.innerHTML += '<p><strong>You defeated, Hurrah for loots!</strong></p>'
  )

  const game = monsters
    .startWith('startup click')
    .flatMap(monster => fight)

  const gameSubscribe = game.subscribe(
    (monster) => {
      gameLayerElement.innerHTML += `<p>Player attack for: ${player.damage()}</p>`
      monster.receive_attack(player.damage())
      gameLayerElement.innerHTML += `<p>Monster life left: ${monster.current_life()}</p>`
    },
    err => console.error('Error: %s', err),
    () => console.log('End of the game Bobby')
  )

  return {
    start: () => gameSubscribe
  }
}
