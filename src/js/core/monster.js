import LootHoarder from './lootHoarder.js'

export default (level = 1) => {
  const rewards = {
    xp: 50,
    chest: LootHoarder.getChestForMonster(1)
  }

  const newMonster = (state) => {
    state.monster = { life: 5, level }
    return state
  }

  // const scaleValue = (value) => Math.round(Math.pow(1.35, level) * value)
  // state.life = scaleValue(state.life)

  return {
    // currentLife: () => state.life,
    // receiveAttack: (damage) => state.life -= damage,
    // isDead: () => state.life <= 0,
    rewards,
    // state,
    newMonster
  }
}
