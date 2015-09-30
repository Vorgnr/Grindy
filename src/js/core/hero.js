import Logger from '../utils/logger.js'

export default (state) => {
  const expRequired = (level) => Math.round(Math.pow(level + 1, 2.6) * 100)

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

  const initialState = (state) => {
    return Object.assign({
      pseudo: '',
      ias: 1,
      damage: 1,
      chest: {
        gold: 0,
        items: []
      },
      level: 1,
      totalXp: 0,
      currentXp: 0,
      xpToLevelUp: 100,
      totalXpToLevelUp: 100,
      monster: {
        life: 5
      }
    }, state)
  }

  return { gainRewards, hit, gainExp, expRequired, initialState }
}
