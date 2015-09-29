import Store from '../store.js'

export default () => {
  const store = Store()

  return {
    initState: () => {
      return { gameStream: store.gameStream, initState: store.gameState }
    }
  }
}
