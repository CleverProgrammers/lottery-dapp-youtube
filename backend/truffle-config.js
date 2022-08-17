const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    inf_Development_ropsten: {
      network_id: 3,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\kevvv\\OneDrive\\Documents\\pass.env', 'utf-8'), "https://ropsten.infura.io/v3/9d73e9fae5b84116a6d84b5cd572e910")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.15"
    }
  }
};
