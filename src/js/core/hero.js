import Rx from 'rx'
import Logger from '../utils/logger.js'

export default (state) => {
  let damage = 1
  const attackSpeed = 1 * 1000

  if (!state) {
    state = {
      ias: 10,
      chest: {
        gold: 0,
        items: []
      },
      level: {
        current: 1,
        totalXp: 0,
        currentXp: 0,
        xpToLevelUp: 100,
        totalXpToLevelUp: 100
      }
    }
  }

  const expRequired = (level) => Math.pow(level, 2) * 100

  const gainExp = (exp) => {
    state.level.totalXp += exp
    if (state.level.totalXpToLevelUp <= state.level.totalXp) {
      state.level.currentXp = Math.abs(state.level.totalXpToLevelUp - state.level.totalXp)
      levelUp()
      state.level.xpToLevelUp = expRequired(state.level.current) - state.level.totalXp
    } else {
      state.level.currentXp += exp
    }
  }

  const levelUp = () => {
    state.level.current++
    damage++
    state.level.totalXpToLevelUp = expRequired(state.level.current)
    Logger.log(`gz you are level ${state.level.current}`)
  }

  const hitTillDeath = (monster) => {
    return Rx.Observable
      .interval(attackSpeed / state.ias)
      .takeWhile(() => !monster.isDead())
  }

  const hit = (monster) => {
    Logger.log(`hit monster for ${damage} damage.`)
    monster.receiveAttack(damage)
    Logger.log(`monster life's : ${monster.currentLife()} hp.`)
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
