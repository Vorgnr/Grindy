import Rx from 'rx'
import Logger from '../utils/logger.js'

export default () => {
  let damage = 1
  const attackSpeed = 1 * 1000

  let state = {
    ias: 100,
    exp: 0,
    expEarnedInLevel: 0,
    expToLevelUp: 200,
    chest: {
      gold: 0,
      items: []
    },
    level: {
      current: 1,
      totalXp: 0,
      currentXp: 0,
      xpToLevelUp: 200,
      totalXpToLevelUp: 200
    }
  }

  const expRequired = (level) => Math.pow(level + 1, 2.4) * 200

  const gainExp = (exp) => {
    state.level.totalXp += exp
    if (state.level.totalXpToLevelUp <= state.level.totalXp) {
      levelUp()
      state.level.currentXp = state.level.totalXp - state.level.totalXpToLevelUp
      state.level.xpToLevelUp = expRequired(state.level.current) - state.level.totalXp
    } else {
      state.level.currentXp += exp
    }
  }

  const levelUp = () => {
    state.level.current++
    damage++
    state.totalXpToLevelUp = expRequired(state.level)
    Logger.log(`gz you are level ${state.level}`)
  }

  const hitTillDeath = (target) => {
    return Rx.Observable
      .interval(attackSpeed / state.ias)
      .takeWhile(() => !target.isDead())
  }

  const hit = (target) => {
    Logger.log(`hit monster for ${damage} damage.`)
    target.receiveAttack(damage)
    Logger.log(`monster life's : ${target.currentLife()} hp.`)
  }

  const gainRewards = (rewards) => {
    gainExp(rewards.exp)
    state.chest.gold += rewards.chest.gold
    state.chest.items.concat(rewards.chest.items)
    Logger.log(rewards.chest.items)
    Logger.log(`New gold value ${state.chest.gold}`)
  }

  return { hitTillDeath, gainRewards, state, hit, gainExp }
}
