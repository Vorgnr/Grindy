import '../css/main.scss'
import 'file?name=[name].html!../index.html'
import Grindy from './grindy.js'

(() => {
  const game = Grindy()
  game.start()
})()
