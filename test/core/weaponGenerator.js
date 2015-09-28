import {test} from 'tape'
import WeaponGenerator from './../../src/js/core/weaponGenerator.js'

test('WeaponGenerator.randomize should create a new random weapon', (assert) => {
  const wgen = WeaponGenerator()
  const w = wgen.randomize(5)
  assert.end()
})
