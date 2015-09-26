import Logger from '../utils/logger.js'

export default () => {
  const start = (player, monster) => {
    player.hitTillDeath(monster).subscribe(
      () => { player.hit(monster) },
      (err) => console.log(err),
      () => {
        Logger.log('player wins')
        player.gainRewards(monster.rewards)
      }
    )
  }

  return { start }
}
