import { createContext, useState, useEffect, useContext } from 'react'
import Web3 from 'web3'
import lotteryContract from '../utils/lottery'
export const appContext = createContext()

export const AppProvider = ({ children }) => {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState('')
  const [lcContract, setLcContract] = useState()
  const [lotteryPot, setLotteryPot] = useState()
  const [lotteryPlayers, setPlayers] = useState([])
  const [latestWinner, setLatestWinner] = useState()
  const [lotteryId, setLotteryId] = useState()
  const [etherscanUrl, setEtherscanUrl] = useState()

  useEffect(() => {
    updateState()
  }, [lcContract, latestWinner])

  const updateState = () => {
    if (lcContract) getPot()
    if (lcContract) getPlayers()
    if (lcContract) getLotteryId()
    if (lcContract) getLatestWinner()
  }

  const getPot = async () => {
    const pot = await lcContract.methods.getBalance().call()
    setLotteryPot(web3.utils.fromWei(pot, 'ether'))
  }

  const getPlayers = async () => {
    const players = await lcContract.methods.getPlayers().call()
    setPlayers(players)
  }

  const getLotteryId = async () => {
    const lotteryId = await lcContract.methods.lotteryId().call()
    setLotteryId(lotteryId)
  }

  const getLatestWinner = async () => {
    await getLotteryId()
    if (lotteryId > 1) {
      let id = lotteryId - 1
      const latestWinner = await lcContract.methods
        .getWinnerByLottery(id)
        .call()
      setLatestWinner(latestWinner)
    } else {
      setLatestWinner('no winner')
    }
  }

  const enterLotteryHandler = async () => {
    try {
      await lcContract.methods.enter().send({
        from: address,
        value: '15000000000000000',
        gas: 300000,
        gasPrice: null,
      })
      updateState()
    } catch (err) {
      console.log(err.message)
    }
  }

  const pickWinnerHandler = async () => {
    try {
      let tx = await lcContract.methods.pickWinner().send({
        from: address,
        gas: 300000,
        gasPrice: null,
      })

      console.log(tx)
      setEtherscanUrl('https://ropsten.etherscan.io/tx/' + tx.transactionHash)
      updateState()
    } catch (err) {
      console.log(err.message)
    }
  }

  const connectWalletHandler = async () => {
    /* check if MetaMask is installed */
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        /* request wallet connection */
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        /* create web3 instance & set to state */
        const web3 = new Web3(window.ethereum)
        /* set web3 instance in React state */
        setWeb3(web3)
        /* get list of accounts */
        const accounts = await web3.eth.getAccounts()
        /* set account 1 to React state */
        setAddress(accounts[0])
        const lc = lotteryContract(web3)
        setLcContract(lc)
        window.ethereum.on('accountsChanged', async () => {
          const accounts = await web3.eth.getAccounts()

          /* set account 1 to React state */
          setAddress(accounts[0])
        })
      } catch (err) {
        console.log(err.message)
      }
    } else {
      /* MetaMask is not installed */
      console.log('Please install MetaMask')
    }
  }

  const disconnectWalletHandler = () => {
    setAddress('')
  }
  return (
    <appContext.Provider
      value={{
        address,
        connectWalletHandler,
        lotteryPot,
        lotteryPlayers,
        enterLotteryHandler,
        pickWinnerHandler,
        disconnectWalletHandler,
        lotteryId,
        latestWinner,
        etherscanUrl,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(appContext)
}
