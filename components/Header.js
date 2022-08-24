import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import UserCard from './UserCard'
import WalletConnectBtn from './WalletConnectBtn'
const Header = () => {
  const { address, connectWallet } = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {!address ? (
        <WalletConnectBtn connectWallet={connectWallet} />
      ) : (
        <UserCard address={address} />
      )}
    </div>
  )
}
export default Header
