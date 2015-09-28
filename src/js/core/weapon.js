export default (arg) => {
  let state = {
    damageRange: {
      min: arg.damageRange.min,
      max: arg.damageRange.max
    },
    speed: arg.speed,
    dps: arg.dps
  }

  return { state }
}
