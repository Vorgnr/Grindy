import LootHoarder from './lootHoarder.js'

export default () => {
  const rewards = (level) => ({
    xp: scaleValue(level, 50),
    chest: LootHoarder.getChestForMonster(level)
  })

  const newMonster = (state) => {
    const initialLife = scaleValue(state.level, 5)
    state.monster = {
      level: state.level,
      life: initialLife,
      totalLife: initialLife
    }
    return state
  }

  const scaleValue = (level, base) => Math.round(Math.pow(1.35, level) * base)

  return {
    rewards,
    scaleValue,
    newMonster
  }
}
