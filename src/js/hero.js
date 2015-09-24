export default () => {
  const damage = 1
  const attack_speed = 0.5

  return {
    damage: () => damage,
    as: () => attack_speed
  }
}
