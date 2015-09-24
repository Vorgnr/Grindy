import Hero from './hero.js'
import Monster from './monster.js'
import Rx from 'rx'

export default () => {
  const player = Hero()

  let current_player = hero();

  return {
    start: () => {
      let current_monster = monster();
      current_player.start_fighting(current_monster);
    }
  }
}
