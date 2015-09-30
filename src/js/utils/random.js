  const Random = () => {
    const between = (min, max) => Math.random() * (max - min) + min
    const chance = (rate) => Math.round(Math.random() * 100) <= rate
    return { between, chance }
  }

  export default Random()
