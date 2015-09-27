import Fight from './fight.js'
import Store from '../store.js'

export default () => {
  const store = Store()
  let fight = Fight()

  return {
    initState: () => {
      return { gameState: store.gameState, initState: store.player.state }
    },
    start: (clicks) => {
      store.onNext()
      clicks
        .map(() => fight.start(store))
        .subscribe()
    }
  }
}
