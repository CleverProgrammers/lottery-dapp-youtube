import style from '../styles/Table.module.css'
import TableRow from './TableRow'
const Table = () => {
  // TODO: Bring in the players data from the context.

  return (
    <div className={style.wrapper}>
      <div className={style.tableHeader}>
        <div className={style.addressTitle}>💳 User Address</div>
        <div className={style.amountTitle}>💲 Amount</div>
      </div>
      {/* TODO: Map through the players array and render a table row for each player. */}
      {/* NOTE: Make sure to pass the player as a prop and replace static address. */}
      <div className={style.rows}>
        <TableRow player={'0x1234567890123456789012345678901234567890'} />
      </div>
    </div>
  )
}
export default Table
