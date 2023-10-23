import style from '../styles/Header.module.css'

const ConnectWalletBtn = ({ connectWallet }) => {

  return (<button className={style.loginBtn} onClick={connectWallet}>Connect Wallet</button>)
}
export default ConnectWalletBtn
