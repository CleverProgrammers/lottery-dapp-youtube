import style from '../styles/Header.module.css'
import truncateEthAddress from 'truncate-eth-address'
// TODO: Destructure the prop we passed from Header.js
const UserCard = () => {
  return (
    <div>
      <div className={`${style.welcome} ${style.loginBtn}`}>
        👋 Welcome,{' '}
        <span className={style.accentColor}>
          {/* Render the users address */}
          {truncateEthAddress('0x1234567890123456789012345678901234567890')}
        </span>
      </div>
    </div>
  )
}
export default UserCard
