import { useAppContext } from '../context/context'
import style from '../styles/Table.module.css'
import TableRow from './TableRow'
const Table = () => {
  // TODO: Bring in the players data from the context.

  const {lotteryPlayers} = useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={style.tableHeader}>
        <div className={style.addressTitle}>💳 User Address</div>
        <div className={style.amountTitle}>💲 Amount</div>
      </div>
      {/* TODO: Map through the players array and render a table row for each player. */}
      {/* NOTE: Make sure to pass the player as a prop and replace static address. */}
      <div className={style.rows}>
      {lotteryPlayers.length > 0 ? (
          lotteryPlayers.map((player, index) => (
            <TableRow key={index} player={player} />
          ))
        ) : (
          <div className={style.noPlayers}>No players yet</div>
        )}
      </div>
    </div>
  )
}
export default Table
