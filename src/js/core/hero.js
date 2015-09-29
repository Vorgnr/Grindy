import Rx from 'rx'
import Logger from '../utils/logger.js'

export default () => {
  const attackSpeed = 1 * 1000

  const expRequired = (level) => Math.pow(level, 2) * 100

  const gainExp = (state, xp) => {
    state.totalXp += xp
    if (state.totalXpToLevelUp <= state.totalXp) {
      state.currentXp = Math.abs(state.totalXpToLevelUp - state.totalXp)
      levelUp(state)
      state.xpToLevelUp = expRequired(state.level) - state.totalXp
    } else {
      state.currentXp += xp
    }

    return state
  }

  const levelUp = (state) => {
    state.level++
    state.damage++
    state.totalXpToLevelUp = expRequired(state.level)
    Logger.log(`gz you are level ${state.level}`)

    return state
  }

  const hitTillDeath = (state) => {
    return Rx.Observable
      .interval(attackSpeed / state.ias)
      .takeWhile(() => !state.monster.isDead())
  }

  const hit = (state) => {
    Logger.log(`hit monster for ${state.damage} damage.`)
    state.monster.receiveAttack(state.damage)
    Logger.log(`monster life's : ${state.monster.currentLife()} hp.`)

    return state
  }

  const gainRewards = (state, rewards) => {
    state.level = gainExp(state.level, rewards.exp)
    state.chest.gold += rewards.chest.gold
    state.chest.items = state.chest.items.concat(rewards.chest.items)
    Logger.log(rewards.chest.items)
    Logger.log(`New gold value ${state.chest.gold}`)

    return state
  }

  return { hitTillDeath, gainRewards, hit, gainExp, expRequired }
}
