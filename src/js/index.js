import '../css/main.scss'
import 'file?name=[name].html!../index.html'
import './utils/extensions.js'
import Grindy from './core/grindy.js'
import {GrindyDOM, subscribe} from './components/app.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Rx from 'rx'

const game = Grindy()
const appState = game.initState()
const App = subscribe(GrindyDOM, { player: appState }, {})
ReactDOM.render(<App />, document.getElementById('grindy'))
const spawnButton = document.querySelector('#spawn-monster')
const clicks = Rx.Observable.fromEvent(spawnButton, 'click')
game.start(clicks)
