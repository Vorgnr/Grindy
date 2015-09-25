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
    exp: hero.exp + rewards.exp,
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
