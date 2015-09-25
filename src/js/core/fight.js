import Logger from '../utils/logger.js'

export default (player, monster) => {
  const fightStream = Rx.Observable.create((f) => player.hitTillDeath(f, monster))

  const start = () => {
    fightStream.subscribe(
      () => {},
      (err) => console.log(err),
      playerWins
    )
  }

  const playerWins = () => {
    Logger.log('player wins')
    player.gainRewards(monster.rewards)
  }

  return { start }
}
