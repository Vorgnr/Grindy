import Logger from './logger.js'

export default (player, monster) => {
  const logger = Logger()
  const start = () => {
    const playerAttack = player.fight(monster)

    playerAttack.subscribe(
      () => {},
      (err) => {
        console.log(err)
      },
      playerWins
    )
  }

  const playerWins = () => {
    logger.log('player wins')
    player.grantRewards(monster.reward())
  }

  return { start }
}
