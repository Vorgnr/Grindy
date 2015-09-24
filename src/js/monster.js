export default () => {
  let life = 5

  return {
    current_life: () => life,
    receive_attack: (damage) => life -= damage
  }
}
