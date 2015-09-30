import { test } from 'tape'
import Monster from './../../src/js/core/monster.js'

test('Monster newMonster generate a monster with level scaled life', (assert) => {
  const monster = Monster()
  const expected = initGameState({
    level: 5,
    monster: {
      level: 5,
      life: 22 // round of : (1.35^5)*5
    }
  })
  const actual = monster.newMonster(initGameState({ level: 5 }), 5)

  assert.deepEqual(actual, expected)
  assert.end()
})

test('Monster reward generate level scaled xp', (assert) => {
  const monster = Monster()
  const expected = 224 // round of : (1.35^5)*50
  const actual = monster.rewards(5)

  assert.equal(actual.xp, expected)
  assert.end()
})

const initGameState = (state) => {
  return Object.assign({
    pseudo: '',
    ias: 10,
    damage: 1,
    chest: {
      gold: 0,
      items: []
    },
    level: 1,
    totalXp: 0,
    currentXp: 0,
    xpToLevelUp: 1000,
    totalXpToLevelUp: 1500,
    monster: {
      level: 1,
      life: 5
    }
  }, state)
}
