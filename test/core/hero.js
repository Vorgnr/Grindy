import {test} from 'tape'
import Hero from './../../src/js/core/hero.js'

test('Hero gainExp update the totalXp value of the hero', (assert) => {
  const hero = Hero()
  const expected = initGameState({ totalXp: 150 })
  const actual = hero.gainExp(initGameState(), 150)

  assert.equal(actual.totalXp, expected.totalXp)
  assert.end()
})

test('Hero gainExp update the currentXp value of the hero', (assert) => {
  const hero = Hero()
  const expected = initGameState({ currentXp: 50 })
  const actual = hero.gainExp(initGameState(), 50)

  assert.equal(actual.currentXp, expected.currentXp)
  assert.end()
})

test('Hero gainExp keep overflown exp in currentXp', (assert) => {
  const hero = Hero()
  const expected = initGameState({
    currentXp: 50
  })
  const actual = hero.gainExp(initGameState({
    totalXpToLevelUp: 500,
    totalXp: 400
  }), 150)

  assert.equal(actual.currentXp, expected.currentXp)
  assert.end()
})

test('Hero gainExp add 1 to level when totalXpToLevelUp is inferior to totalXp', (assert) => {
  const hero = Hero()
  const expected = initGameState({
    level: 2
  })
  const actual = hero.gainExp(initGameState({
    totalXp: 1000,
    totalXpToLevelUp: 1500
  }), 501)

  assert.equal(actual.level, expected.level)
  assert.end()
})

test('Hero gainRewards adds the rewards to the hero state', (assert) => {
  const hero = Hero()
  const rewards = {
    xp: 300,
    chest: {
      gold: 100,
      items: ['Frostmourne']
    }
  }
  const expected = initGameState({
    totalXp: 300,
    currentXp: 300,
    chest: {
      gold: 100,
      items: ['Frostmourne']
    }
  })
  const actual = hero.gainRewards(initGameState(), rewards)

  assert.deepEqual(actual, expected)
  assert.end()
})

test('Hero hit removes the hero damage from monster lifepool', (assert) => {
  const hero = Hero()
  const expected = initGameState({
    monster: {
      level: 1,
      life: 4
    }
  })
  const actual = hero.hit(initGameState())

  assert.deepEqual(actual, expected)
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
