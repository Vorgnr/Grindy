import { test } from 'tape'
import Monster from './../../src/js/core/monster.js'

test('Upgraded monster should have a scaled life point', (assert) => {
  const monster = Monster(3)
  const actual = monster.currentLife()
  const expected = 12

  assert.equal(actual, expected)
  assert.end()
})

test('Upgraded monster should receive a better amount of gold', (assert) => {
  const monster = Monster(4)
  const actual = monster.rewards.chest.gold
  const expected = 17

  assert.equal(actual, expected)
  assert.end()
})
