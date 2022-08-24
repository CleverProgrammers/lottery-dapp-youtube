import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
const LotteryCard = () => {
  // TODO: Get the data needed from context
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {/* TODO: Dynamically render the lotteryID */}
        Lottery <span className={style.textAccent}>#1</span>
      </div>
      <div className={style.pot}>
        {/* TODO: Dynamically render the lottery pot */}
        Pot 🍯: <span className={style.goldAccent}>10 ETH</span>
      </div>

      <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
      <div className={style.winner}>
        {/* TODO: Dynamically render the last winner */}
        {truncateEthAddress('0x1234567890123456789012345678901234567890')}
      </div>
      {/* TODO: Add onClick functionality to the buttons */}
      <div className={style.btn}>Enter</div>
      <div className={style.btn}>Pick Winner!</div>
    </div>
  )
}
export default LotteryCard
