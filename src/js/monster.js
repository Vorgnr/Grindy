export default (exp = 1, chest = { gold: 5, items: []} ) => {
  const rewards = { exp, chest }

  let state = {
    life: 5
  }

  return {
    currentLife: () => state.life,
    receiveAttack: (damage) => state.life -= damage,
    isDead: () => state.life <= 0,
    rewards
  }
}
