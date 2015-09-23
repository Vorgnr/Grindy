
const livingState = () => {

  const states = {
    living: 0,
    dead: 1
  }

  let value = states.living;

  return {
    is_living: () => {
      return value === states.living;
    },

    is_dead: () => {
      return value === states.dead;
    },

    dead: () => {
      value = states.dead;
    }
  }

}

export default livingState;
