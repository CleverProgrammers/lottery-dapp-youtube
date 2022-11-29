import { createContext, useState, useEffect, useContext } from 'react'
import Web3 from 'web3'
import createLotteryContract from '../utils/lotteryContract'

export const appContext = createContext()

export const AppProvider = ({ children }) => {

  const [address, setAddress] = useState('')
  const [web3, setWeb3] = useState()
  const [lotteryContract, setLotteryContract] = useState()
  const [lotteryPot, setLotteryPot] = useState('0 ETH')
  const [lotteryPlayers, setPlayers] = useState([])
  const [lastWinner, setLastWinner] = useState([])
  const [lotteryId, setLotteryId] = useState()



  useEffect(() => {
    updateLottery()
  }, [lotteryContract])

  const updateLottery = async () => {
    if (lotteryContract) {
      try {
        const pot = await lotteryContract.methods.getBalance().call()

        setLotteryPot(web3.utils.fromWei(pot, 'ether') + ' ETH')

        setPlayers(await lotteryContract.methods.getPlayers().call())

        setLotteryId(await lotteryContract.methods.lotteryId().call())

        setLastWinner(await lotteryContract.methods.getWinner().call())
        console.log([...lastWinner], 'Last Winners')
      } catch (error) {
        console.log(error, 'updateLottery')
      } 
    }
  }




  const connectWallet = async ()=>{
    if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){

      try {

        await window.ethereum.request({ method: 'eth_requestAccounts' })

        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        setAddress(accounts[0])
        setLotteryContract(createLotteryContract(web3))

        window.ethereum.on('accountChanged', async ()=>{
          const accounts = await web3.eth.getAccounts()
          setAddress(accounts[0])
        } )
        
      } catch (error) {
        console.log(error)
      }


    }else{
      console.log('Please install Metamask')
    }




  }

  //enter lottery
  const enterLottery = async () => {
    try {
      console.log('entering lottery')
      await lotteryContract.methods.enter().send({
        from: address,
        // 0.015 ETH in Wei
        value: web3.utils.toWei('0.1','ether'),
        // 0.0003 ETH in Gwei
        gas: 300000,
        gasPrice: null,
      })
      updateLottery()
    } catch (err) {
      console.log(err, 'enter')
    }
  }


  //pickWinner

  const pickWinner = async () => {
    try {
      let tx = await lotteryContract.methods.pickWinner().send({
        from: address,
        gas: 300000,
        gasPrice: null,
      })

      console.log(tx)
      setEtherscanUrl('https://ropsten.etherscan.io/tx/' + tx.transactionHash)
      updateLottery()
    } catch (err) {
      console.log(err, 'pick Winner')
    }
  }





  return <appContext.Provider value={{connectWallet,address,enterLottery, lotteryPot, lotteryId, lotteryPlayers, pickWinner, lastWinner}}>{children}</appContext.Provider>
}

export const useAppContext = () => {
  return useContext(appContext)
}
