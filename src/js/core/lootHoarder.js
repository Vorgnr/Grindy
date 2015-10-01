import WeaponGenerator from './weaponGenerator.js'
import Random from './../utils/random.js'

const LootHoarder = () => {
  const baseGold = 5
  const wpgen = WeaponGenerator()

  const goldForMonster = (level) => {
    return Math.round(Math.pow(1.35, level) * baseGold)
  }

  const itemsForMonster = (level) => {
    if (Random.chance(100)) return [wpgen.randomize(level)]
    else return []
  }

  const getChestForMonster = (level) => {
    let gold = goldForMonster(level)
    let items = itemsForMonster(level)
    return { gold, items }
  }

  return { getChestForMonster }
}

export default LootHoarder()
