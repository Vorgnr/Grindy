import {test} from 'tape'
import Hero from './../../src/js/core/hero.js'

test('gainExp update the totalXp value of the hero', (assert) => {
  const hero = Hero()
  const expected = Object.assign({}, baseHeroState)
  expected.totalXp = 150

  let actual = Object.assign({}, baseHeroState)
  actual = hero.gainExp(baseHeroState, 150)

  assert.equal(actual.totalXp, expected.totalXp)
  assert.end()
})
//
// test('gainRewards adds the rewards to the hero state', (assert) => {
//   const hero = Hero()
//   const rewards = {
//     xp: 500,
//     chest: {
//       gold: 100,
//       items: ['Frostmourne']
//     }
//   }
//   const expected = Object.assign(baseHeroState, {
//     level: {
//       totalXp: 500
//     },
//     chest: {
//       gold: 100,
//       items: []
//     }
//   })
//   const actual = hero.gainRewards(baseHeroState, rewards)
//
//   assert.equal(actual, expected)
//   assert.end()
// })
//
test('gainExp update the currentXp value of the hero', (assert) => {
  const hero = Hero()
  const expected = Object.assign({}, baseHeroState)
  expected.totalXp = 50
  let actual = Object.assign({}, baseHeroState)
  actual = hero.gainExp(baseHeroState, 50)

  assert.equal(actual.currentXp, expected.currentXp)
  assert.end()
})
//
// test('gainExp level up hero if hero exp is superior to hero expToLevelUp', (assert) => {
//   const hero = Hero()
//   hero.state.level.totalXpToLevelUp = 500
//   hero.state.level.totalXp = 400
//   hero.state.level.current = 5
//   const expBonus = 150
//   hero.gainExp(expBonus)
//
//   const actual = hero.state.level.current
//   const expected = 6
//
//   assert.equal(actual, expected)
//   assert.end()
// })

const baseHeroState = {
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
  totalXpToLevelUp: 1000
}
