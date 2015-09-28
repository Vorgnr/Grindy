import '../css/main.scss'
import 'file?name=[name].html!../index.html'
import './utils/extensions.js'
import Grindy from './core/grindy.js'
import './components/app.js'

(() => {
  const game = Grindy()
  game.start()
})()
