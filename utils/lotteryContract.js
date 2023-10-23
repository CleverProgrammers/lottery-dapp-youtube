import { contractAddress,contractABI } from "./constants";

const createLotteryContract = web3 =>{
    return new web3.eth.Contract(contractABI,contractAddress)
}

export default createLotteryContract;