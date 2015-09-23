
import livingState from "./living_state.js"

const monster = () => {

  let life = 5;
  let state = livingState();

  let die = () => {
    state.dead();
    console.log("monster dying here.");
  }

  return {
    state: () => {
      return state;
    },

    receive_attack: (assaillant) => {
      life -= assaillant.damage;
      if (life <= 0) {
        die();
      }
    }
  }
}

export default monster;
