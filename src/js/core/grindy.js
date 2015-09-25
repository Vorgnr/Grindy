import Hero from './hero.js'
import Monster from './monster.js'
import Fight from './fight.js'
import Rx from 'rx'

export default () => {
  const spawnButton = document.querySelector('#spawn-monster')
  const clicks = Rx.Observable.fromEvent(spawnButton, 'click')
  const player = Hero()
  let fight = Fight(player, Monster())

  return {
    start: () => {
      clicks
        .map(() => fight.start())
        .subscribe(() => fight = Fight(player, Monster()))
    }
  }
}
