import style from '../styles/Header.module.css'
import truncateEthAddress from 'truncate-eth-address'
import ConnectWalletBtn from './ConnectWalletBtn'
import UserCard from './UserCard'
import { useAppContext } from '../context/context'
const Header = () => {
  // TODO: Get the connectWallet and address from context.
  // TODO: Replace the static address with the currently logged in user.
  const {connectWallet, address} = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {/* TODO: Conditionally render connect button if no user is logged in. */}
      {/* TODO: pass in the address to the userCard */}
      {/* TODO: pass in the connect Wallet function to the connect Wallet Button. */}

      {address ? <UserCard address = {address} /> : <ConnectWalletBtn connectWallet = {connectWallet} />}
    </div>
  )
}
export default Header
