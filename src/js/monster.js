export default () => {
  let life = 5
  let exp: 1
  const chest = {
    gold: 5,
    items: []
  }

  return {
    currentLife: () => life,
    receiveAttack: (damage) => life -= damage,
    isDead: () => life <= 0,
    reward: () => {
      return { exp, chest }
    }
  }
}
