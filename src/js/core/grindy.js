import Hero from './hero.js'
import Monster from './monster.js'
import Fight from './fight.js'
import Rx from 'rx'

export default () => {
  const player = Hero()
  let fight = Fight()
  let appState = new Rx.Subject()

  return {
    initState: () => appState,
    start: (clicks) => {
      appState.onNext(player.state)
      clicks
        .map(() => fight.start(player, Monster(player.state.level), appState))
        .subscribe(() => {
          fight = Fight()
        })
    }
  }
}
