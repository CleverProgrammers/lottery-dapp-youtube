import style from '../styles/Header.module.css'
import truncateEthAddress from 'truncate-eth-address'
import ConnectWalletBtn from './ConnectWalletBtn'
import UserCard from './UserCard'
import { useAppContext } from '../context/context'
const Header = () => {
  const {connectWallet, address} = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {address ? <UserCard address={address}/> : <ConnectWalletBtn connectWallet={connectWallet} />}
    </div>
  )
}
export default Header
