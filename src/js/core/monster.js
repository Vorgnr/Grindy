export default (level = 1, chest = { gold: 5, items: [] }) => {
  const rewards = { exp: 50, chest }

  let state = {
    level,
    life: 5
  };

  ((lvl) => {
    const scaleValue = (value) => value *= Math.round(Math.pow(1.35, lvl))
    state.life = scaleValue(state.life)
  })(level)

  return {
    currentLife: () => state.life,
    receiveAttack: (damage) => state.life -= damage,
    isDead: () => state.life <= 0,
    rewards
  }
}
