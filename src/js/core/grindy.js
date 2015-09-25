import Hero from './hero.js'
import Monster from './monster.js'
import Fight from './fight.js'

export default () => {
  const player = Hero()
  const monster = Monster()
  const fight = Fight(player, monster)

  return {
    start: () => {
      fight.start()
    }
  }
}
