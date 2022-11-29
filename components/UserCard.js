import style from '../styles/Header.module.css'
import truncateEthAddress from 'truncate-eth-address'
// TODO: Destructure the prop we passed from Header.js
const UserCard = ({address}) => {
  return (
    <div>
      <div className={`${style.welcome} ${style.loginBtn}`}>
        👋 Welcome,{' '}
        <span className={style.accentColor}>
          {/* Render the users address */}
          {truncateEthAddress(address)}
        </span>
      </div>
    </div>
  )
}
export default UserCard
