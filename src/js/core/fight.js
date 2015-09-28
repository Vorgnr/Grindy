import Logger from '../utils/logger.js'

export default () => {
  const start = (store) => {
    store.newMonster()
    store.player.hitTillDeath(store.monster).subscribe(
      () => { store.player.hit(store.monster) },
      (err) => console.log(err),
      () => {
        Logger.log('player wins')
        store.player.gainRewards(store.monster.rewards)
        store.onNext()
      }
    )
  }

  return { start }
}
