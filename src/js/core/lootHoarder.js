const LootHoarder = () => {
  const baseGold = 5

  const goldForMonster = (level) => {
    return Math.round(Math.pow(1.35, level) * baseGold)
  }

  const itemsForMonster = (level) => {
    return []
  }

  const getChestForMonster = (level) => {
    let gold = goldForMonster(level)
    let items = itemsForMonster(level)
    return { gold, items }
  }

  return { getChestForMonster }
}

export default LootHoarder()
