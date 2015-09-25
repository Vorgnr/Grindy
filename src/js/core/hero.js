import Rx from 'rx'
import Logger from '../utils/logger.js'

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

  const hitTillDeath = (currentFight, target) => {
    return Rx.Observable
      .interval(attackSpeed / state.ias)
      .takeWhile(() => !target.isDead())
      .subscribe(
        () => {
          Logger.log(`hit monster for ${damage} damage.`)
          target.receiveAttack(damage)
          Logger.log(`monster life's : ${target.currentLife()} hp.`)
          currentFight.onNext()
        },
        (err) => Logger.error(err),
        () => currentFight.onCompleted()
      )
  }

  const gainRewards = (rewards) => {
    state.exp += rewards.exp
    state.chest.gold += rewards.chest.gold
    state.chest.items.concat(rewards.chest.items)

    Logger.log(`New gold value ${state.chest.gold}`)
  }

  return { hitTillDeath, gainRewards, state }
}
