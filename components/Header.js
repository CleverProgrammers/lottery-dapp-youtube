import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import truncateEthAddress from 'truncate-eth-address'
const Header = () => {
  const { address, connectWallet, disconnectWalletHandler } = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {!address ? (
        <button className={style.loginBtn} onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <div
            className={`${style.welcome} ${style.loginBtn}`}
            onClick={disconnectWalletHandler}
          >
            👋 Welcome,{' '}
            <span className={style.accentColor}>
              {truncateEthAddress(address)}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
