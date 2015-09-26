import LootHoarder from './lootHoarder.js'

export default (level = 1) => {
  let state = {
    level,
    life: 5
  }
  const rewards = {
    exp: 50,
    chest: LootHoarder.getChestForMonster(state.level)
  };

  ((lvl) => {
    const scaleValue = (value) => Math.round(Math.pow(1.35, lvl) * value)
    state.life = scaleValue(state.life)
  })(level)

  return {
    currentLife: () => state.life,
    receiveAttack: (damage) => state.life -= damage,
    isDead: () => state.life <= 0,
    rewards
  }
}
