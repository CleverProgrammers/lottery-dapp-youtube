import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'
const PotCard = () => {
  const {
    lotteryId,
    latestWinner,
    lotteryPot,
    enterLotteryHandler,
    pickWinnerHandler,
  } = useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Lottery{' '}
        <span className={style.textAccent}>#{lotteryId ? lotteryId : '1'}</span>
      </div>
      <div className={style.pot}>
        Pot 🍯: <span className={style.goldAccent}>{lotteryPot} ETH</span>
      </div>
      <div className={style.recentWinnerTitle}>🏆Last Winner🏆</div>
      {latestWinner === 'no winner' ? (
        <div className={style.winner}>No winner yet</div>
      ) : (
        latestWinner && (
          <div className={style.winner}>{truncateEthAddress(latestWinner)}</div>
        )
      )}
      <div className={style.btn} onClick={enterLotteryHandler}>
        Enter
      </div>
      <div className={style.btn} onClick={pickWinnerHandler}>
        Pick Winner!
      </div>
    </div>
  )
}
export default PotCard
