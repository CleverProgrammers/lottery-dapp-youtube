import { LotteryAddress, lotteryAbi } from './constants'
const lotteryContract = web3 => {
  return new web3.eth.Contract(lotteryAbi, LotteryAddress)
}

export default lotteryContract
