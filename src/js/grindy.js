import Hero from './hero.js'
import Monster from './monster.js'
import Rx from 'rx'

export default () => {
  const player = Hero()

  const fight = Rx.Observable.create((fight) => {
    const monster = Monster()
    const one = setInterval(() => {
      if (monster.current_life() > 0) {
        fight.onNext(monster)
      } else {
        fight.onCompleted()
      }
    }, player.as() * 1000)
    console.log('Fight!')

    return () => clearInterval(one)
  })

  const fightSubscribe = fight.subscribe(
    (monster) => {
      console.log('Player attack for: %d', player.damage())
      monster.receive_attack(player.damage())
      console.log('Monster life left : %d', monster.current_life())
    },
    err => console.log('Error: %s', err),
    () => {
      console.log('You defeated, Hurrah for loots!')
    }
  )

  return {
    start: () => {
      fightSubscribe
    }
  }
}
