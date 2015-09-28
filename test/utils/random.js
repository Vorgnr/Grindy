import { test } from 'tape'
import Random from './../../src/js/utils/random.js'

test('Random.between(min, max) should return a random number between min and max.', (assert) => {
  const min = 2
  const max = 7
  const expected = true
  const randomNumber = Random.between(min, max)
  const actual = randomNumber >= min && randomNumber <= max

  assert.equal(actual, expected)
  assert.end()
})
