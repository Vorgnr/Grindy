import Logger from './logger.js'

export default (player, monster) => {
  const start = () => {
    player
      .fight(monster)
      .subscribe(
        () => {},
        (err) => {
          console.log(err)
        },
        playerWins
      )
    }

  const playerWins = () => {
    Logger.log('player wins')
    player.grantRewards(monster.reward())
  }

  return { start }
}
