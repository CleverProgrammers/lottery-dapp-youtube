import { createContext, useState, useEffect, useContext } from 'react'
import Web3 from 'web3'
import '../utils/lotteryContract'
import createLotteryContract from '../utils/lotteryContract'

export const appContext = createContext()

export const AppProvider = ({ children }) => {
  const [address, setAdderss] = useState('')
  const [web3,setWeb3] = useState()
  const [lotteryContract, setLotteryContract] = useState()
  const [lotteryPot,setLotteryPot] = useState('0 ETH')
  const [lotteryPlayers,setLotteryPlayers]=useState([])
  const [lastWinner, setLastWinner] = useState([])
  const [lastWinnerAmount, setLastWinnerAmount] = useState()
  const [lotteryId, setLotteryId] = useState()

  useEffect(()=>{
    updateLottery()
  }, [lotteryContract])

  const updateLottery = async ()=>{
    if(lotteryContract){
      const pot = await lotteryContract.methods.getBalance().call()
      setLotteryPot(web3.utils.fromWei(pot,'ether')+' ETH')
      setLotteryId(await lotteryContract.methods.lotteryId().call())
      setLotteryPlayers(await lotteryContract.methods.getPlayers().call())
      setLastWinner(await lotteryContract.methods.getWinners().call())
    }
  }


  const connectWallet = async()=>{
    if(
      typeof window !== 'undefined'&&
      typeof window.ethereum !=='undefined'
    ){
      try{
        await window.ethereum.request({method: 'eth_requestAccounts'})
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        setAdderss(accounts[0])
        setLotteryContract(createLotteryContract(web3))
        window.ethereum.on('accountsChanged', 
        async()=>{
          const accounts = await web3.eth.getAccounts()
          setAdderss(accounts[0])
        })



      } catch(error){
        console.log(error)
      }
    }else{
      console.log('Please install Metamask')
    }
  }

  const enterLottery = async ()=>{
    try{
      await lotteryContract.methods.enter().send({
        from:address,
        value: web3.utils.toWei('0.1','ether'),
        gas: 3000000,
        gasPrice: null
      })

    }catch(error){
      console.log(error)
    }
  }

  const pickWinner = async ()=>{
    try{
      let transaction = await lotteryContract.methods.pickWinner().send({
        from: address,
        gas:3000000,
        gasPrice: null,
      })
      console.log(transaction)
      updateLottery()
    }catch(error){
      console.log(error)
    }
    
  }
  return <appContext.Provider value={{connectWallet,address,enterLottery,lotteryPot,lotteryId,lotteryPlayers,pickWinner,lastWinner}}>{children}</appContext.Provider>
}

export const useAppContext = () => {
  return useContext(appContext)
}
