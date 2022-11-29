import { contractAddress , contractABI } from "./constant";

const createLotteryContract = web3 => {
    return new web3.eth.Contract(contractABI,contractAddress);
}

export default createLotteryContract