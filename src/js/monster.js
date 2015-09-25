export default () => {
  let life = 5
  let exp: 1
  const chest = {
    gold: 5,
    items: []
  }

  return {
    current_life: () => life,
    receive_attack: (damage) => life -= damage,
    isDead: () => life <= 0,
    reward: () => {
      return { exp, chest }
    }
  }
}
