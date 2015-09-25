import Logger from '../utils/logger.js'
import Rx from 'rx'

export default () => {
  const damage = 1
  const attackSpeed = 1 * 1000

  let state = {
    ias: 4,
    exp: 0,
    chest: {
      gold: 0,
      items: []
    }
  }

  const fight = (target) => {
    return Rx.Observable.create((f) => {
      Rx.Observable
        .interval(attackSpeed / state.ias)
        .takeWhile(() => !target.isDead())
        .subscribe(
          (x) => {
            Logger.log(`hit monster for ${damage} damage.`)
            target.receiveAttack(damage)
            Logger.log(`monster life's : ${target.currentLife()} hp.`)
            f.onNext()
          },
          (err) => Logger.error(err),
          () => f.onCompleted()
        )
    })
  }

  const gainRewards = (rewards) => {
    state.exp += rewards.exp
    state.chest.gold += rewards.chest.gold
    state.chest.items.concat(rewards.chest.items)

    Logger.log(`New gold value ${state.chest.gold}`)
  }

  return { fight, gainRewards }
}
