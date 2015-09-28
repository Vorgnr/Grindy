  const Random = () => {
    const between = (min, max) => Math.random() * (max - min) + min
    return { between }
  }

  export default Random()
