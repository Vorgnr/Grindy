import hero from "./hero.js"
import monster from "./monster.js"

const grindy = () => {

  let current_player = hero();

  return {
    start: () => {
      let current_monster = monster();
      current_player.start_fighting(current_monster);
    }
  }
}

export default grindy;
