import Logger from '../utils/logger.js'

export default (player, monster) => {
  const start = () => {
    player.hitTillDeath(monster).subscribe(
      () => { player.hit(monster) },
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
