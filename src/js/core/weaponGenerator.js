import Random from '../utils/random.js'
import Weapon from './weapon.js'

export default () => {
  const minSpeed = 0.5
  const maxSpeed = 2.5
  const baseDps = 50
  const damageRangeFork = { min: 0.10, max: 0.15 }
  const quality = { min: 0.85, max: 1.15 }

  const createSpeed = () => Random.between(minSpeed, maxSpeed).fixed(2)

  const qualityRate = () => Random.between(quality.min, quality.max)
  const getDpsByLevel = (level) => {
    return ((Math.pow(1.35, level) + baseDps) * qualityRate()).fixed(2)
  }

  const getAverageDamage = (dps, speed) => Math.round(dps / speed)
  const getDamageRange = (averageDamage) => {
    const ratio = Random.between(damageRangeFork.min, damageRangeFork.max)
    const damageSegment = Math.round(ratio * averageDamage)
    return {
      min: averageDamage - damageSegment,
      max: averageDamage + damageSegment
    }
  }

  const randomize = (level) => {
    const initialDps = getDpsByLevel(level)
    const speed = createSpeed()
    const averageDamage = getAverageDamage(initialDps, speed)
    const damageRange = getDamageRange(averageDamage)
    const dps = (averageDamage * speed).fixed()

    const weaponStats = {
      dps,
      speed,
      damageRange
    }

    return Weapon(weaponStats)
  }

  return { randomize }
}
