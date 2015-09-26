import {test} from 'tape'
import Hero from '../src/js/core/hero.js'

test('gainRewards adds the rewards to the hero state', (assert) => {
  const hero = Hero()
  const rewards = {
    exp: 500,
    chest: {
      gold: 100,
      items: ['Frostmourne']
    }
  }
  const expected = Object.assign(hero.state, {
    level: {
      totalXp: hero.state.level.totalXp + rewards.exp
    },
    chest: {
      gold: hero.state + rewards.chest.gold,
      items: hero.state.chest.items.concat(rewards.chest.items)
    }
  })

  hero.gainRewards(rewards)
  const actual = hero.state

  assert.equal(actual, expected)
  assert.end()
})

test('gainExp update the totalXp value of the hero', (assert) => {
  const hero = Hero()
  hero.state.level.totalXp = 100
  const expBonus = 150
  hero.gainExp(expBonus)

  const actual = hero.state.level.totalXp
  const expected = 250

  assert.equal(actual, expected)
  assert.end()
})

test('gainExp update the currentXp value of the hero', (assert) => {
  const hero = Hero()
  hero.state.level.currentXp = 0
  const expBonus = 50
  hero.gainExp(expBonus)

  const actual = hero.state.level.currentXp
  const expected = 50

  assert.equal(actual, expected)
  assert.end()
})

test('gainExp level up hero if hero exp is superior to hero expToLevelUp', (assert) => {
  const hero = Hero()
  hero.state.level.totalXpToLevelUp = 500
  hero.state.level.totalXp = 400
  hero.state.level.current = 5
  const expBonus = 150
  hero.gainExp(expBonus)

  const actual = hero.state.level.current
  const expected = 6

  assert.equal(actual, expected)
  assert.end()
})

test('gainExp should keep overflown exp', (assert) => {
  const hero = Hero()
  hero.state.level.totalXpToLevelUp = 500
  hero.state.level.totalXp = 400
  const expBonus = 150
  hero.gainExp(expBonus)

  const expected = 50
  const actual = hero.state.level.currentXp

  assert.equal(actual, expected)
  assert.end()
})
