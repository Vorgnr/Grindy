import '../css/main.scss'
import 'file?name=[name].html!../index.html'
import './utils/extensions.js'
import Grindy from './core/grindy.js'
import subscribe from './components/subscribe.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Rx from 'rx'

const game = Grindy()
const { gameStream, initState } = game.initState()
const App = subscribe({ player: gameStream }, { player: initState })
ReactDOM.render(<App />, document.getElementById('grindy'))
