import WeaponGenerator from './weaponGenerator.js'

const LootHoarder = () => {
  const baseGold = 5
  const wpgen = WeaponGenerator()

  const goldForMonster = (level) => {
    return Math.round(Math.pow(1.35, level) * baseGold)
  }

  const itemsForMonster = (level) => {
    return [wpgen.randomize(level)]
  }

  const getChestForMonster = (level) => {
    let gold = goldForMonster(level)
    let items = itemsForMonster(level)
    return { gold, items }
  }

  return { getChestForMonster }
}

export default LootHoarder()
