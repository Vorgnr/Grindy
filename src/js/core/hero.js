import Rx from 'rx'
import Logger from '../utils/logger.js'

export default () => {
  let damage = 1
  const attackSpeed = 1 * 1000

  let state = {
    level: 1,
    ias: 4,
    exp: 0,
    expEarnedInLevel: 0,
    chest: {
      gold: 0,
      items: []
    }
  }

  const expRequired = (level) => Math.round(Math.log2(level) * 100) + 100

  const gainExp = (exp) => {
    state.exp += exp
    let expToLevelUp = expRequired(state.level)
    let expOverFlow = expToLevelUp - state.expEarnedInLevel - exp
    if (expOverFlow <= 0) {
      levelUp()
      state.expEarnedInLevel = Math.abs(expOverFlow)
    } else {
      state.expEarnedInLevel += exp
    }
  }

  const levelUp = () => {
    state.level += 1
    damage += 1
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

    Logger.log(`New gold value ${state.chest.gold}`)
  }

  return { hitTillDeath, gainRewards, state, hit, gainExp }
}
