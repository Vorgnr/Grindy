const Logger = () => {
  return {
    log: (str) => {
      console.log(str)
    },
    error: (str) => {
      console.error(str)
    }
  }
}

export default Logger()
