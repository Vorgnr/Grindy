
const hero = () => {

  let damage = 1;
  let attack_speed = 1;
  let target;
  let fight_id;

  let stop_fighting = () => {
    clearInterval(fight_id);
  }

  let hit = () => {
    if (target.state().is_living())
      target.receive_attack({
        damage
      });
    else
      stop_fighting();
  }

  return {
    start_fighting: (new_target) => {
      target = new_target;

      fight_id = setInterval(hit, attack_speed * 1000)
    }
  }
}

export default hero;
