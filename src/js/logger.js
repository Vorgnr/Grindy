export default () => {
  return {
    log: (str) => {
      console.log(str)
    },
    error: (str) => {
      console.error(str)
    }
  }
}
