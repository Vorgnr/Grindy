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

  const grantRewards = (reward) => {
    exp += reward.exp
    chest.gold += reward.chest.gold
    chest.items.concat(reward.chest.items)

    logger.log(`New gold value ${chest.gold}`)
  }

  return {
    damage: () => damage,
    as: () => attackSpeed,
    grantRewards: grantRewards
  }
}
