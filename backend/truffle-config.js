const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.15'
    }
  },
  networks: {
    inf_Lottery_ropsten: {
      network_id: 3,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/kevin/key.env', 'utf-8'), "https://ropsten.infura.io/v3/ff502fb518804d459de6963dd09e39c1")
    }
  }
};
