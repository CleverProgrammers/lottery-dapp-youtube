const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    inf_Sol_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\chdin\\OneDrive\\Documents\\Lottery.env', 'utf-8'), "https://goerli.infura.io/v3/5a984a9e5f2048a59dd9e924e772d2e1")
    },
    inf_Sol_sepolia: {
      network_id: 11155111,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\chdin\\OneDrive\\Documents\\Lottery.env', 'utf-8'), "https://sepolia.infura.io/v3/5a984a9e5f2048a59dd9e924e772d2e1")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.15"
    }
  }
};
