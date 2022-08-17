import abi from '../backend/build/contracts/Lottery.json'
const lotteryContract = web3 => {
  return new web3.eth.Contract(
    abi.abi,
    '0x061A999b0632f56C29C1e5ac45d51674e4Ce5cC2',
  )
}

export default lotteryContract
