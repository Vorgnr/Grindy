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
    state.monster.life = state.monster.life - state.damage
    Logger.log(`monster life's : ${state.monster.life} hp.`)

    return state
  }

  const gainRewards = (state, rewards) => {
    state = gainExp(state, rewards.xp)
    state.chest.gold += rewards.chest.gold
    state.chest.items = state.chest.items.concat(rewards.chest.items)
    Logger.log(rewards.chest.items)
    Logger.log(`New gold value ${state.chest.gold}`)

    return state
  }

  return { hitTillDeath, gainRewards, hit, gainExp, expRequired }
}
