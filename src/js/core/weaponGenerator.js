import Random from '../utils/random.js'
import Weapon from './weapon.js'

export default () => {
  const minSpeed = 0.5
  const maxSpeed = 2.5
  const baseDps = 2

  const createSpeed = () => Random.between(minSpeed, maxSpeed).fixed(2)
  const getDpsByLevel = (level) => {
    return ((Math.pow(1.35, level) + baseDps) * damageRangeRatio()).fixed(2)
  }
  const getAverageDamage = (dps, speed) => Math.round(dps / speed)
  const getDamageRange = (averageDamage) => {
    const ratio = Random.between(0.10, 0.15)
    const damageSegment = Math.round(ratio * averageDamage)
    return {
      min: averageDamage - damageSegment,
      max: averageDamage + damageSegment
    }
  }

  const damageRangeRatio = () => Random.between(0.85, 1.15)

  const randomize = (level) => {
    const dps = getDpsByLevel(level)
    const speed = createSpeed()
    const damageRange = getDamageRange(getAverageDamage(dps, speed))

    const weaponStats = {
      dps,
      speed,
      damageRange
    }

    return Weapon(weaponStats)
  }

  return { randomize }
}
