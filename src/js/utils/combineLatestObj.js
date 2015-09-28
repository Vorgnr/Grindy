import Rx from 'rx'

export default function combineLatestObj (obj) {
  const sources = []
  const keys = []

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key)
      sources.push(obj[key])
    }
  }

  return Rx.Observable.combineLatest(sources, (...args) => {
    const argsLength = args.length
    const combination = {}
    for (let i = argsLength - 1; i >= 0; i--) {
      combination[keys[i]] = args[i]
    }
    return combination
  })
}
