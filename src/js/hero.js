import Logger from './logger.js'
import Rx from 'rx'

export default () => {
  const logger = Logger()
  const damage = 1
  const attackSpeed = 0.5
  let exp = 0
  let chest = {
    gold: 0,
    items: []
  }

  const fight = (target) => {
    return Rx.Observable.create((f) => {
      const hits = Rx.Observable.interval(attackSpeed * 1000)
        .takeWhile(() => !target.isDead())

      hits.subscribe(
        (x) => {
          logger.log(`hit monster for ${damage} damage.`)
          target.receiveAttack(damage)
          logger.log(`monster life's : ${target.currentLife()} hp.`)
          f.onNext()
        },
        (err) => Logger.error(err),
        () => f.onCompleted()
      )
    })
  }

  const grantRewards = (reward) => {
    exp += reward.exp
    chest.gold += reward.chest.gold
    chest.items.concat(reward.chest.items)

    logger.log(`New gold value ${chest.gold}`)
  }

  return {
    fight,
    damage: () => damage,
    as: () => attackSpeed,
    grantRewards: grantRewards
  }
}
