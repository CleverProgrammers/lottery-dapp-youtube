import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext  } from '../context/context'
import createLotteryContract from '../utils/lotteryContract'
const LotteryCard = () => {
  const {enterLottery,lotteryPot, lotteryId,pickWinner,lastWinner} = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Lottery {' '}
        <span className={style.textAccent}>#{lotteryId<1 ?'1':lotteryId}</span>
      </div>
      <div className={style.pot}>
        Pot 🍯: <span className={style.goldAccent}>{lotteryPot}</span>
      </div>

      <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
      {!lastWinner.length ? (
        <div className={style.winner}>No Winner Yet</div>
      ):(
        <div className={style.winner}>
          {truncateEthAddress(lastWinner[lastWinner.length-1])}
        </div>
      )}
      <div className={style.btn} onClick={enterLottery}>Enter</div>
      <div className={style.btn} onClick={pickWinner }>Pick Winner!</div>
    </div>
  )
}
export default LotteryCard
