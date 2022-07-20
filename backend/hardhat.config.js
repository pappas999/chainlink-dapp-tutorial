require("@nomicfoundation/hardhat-toolbox");


//require("@nomiclabs/hardhat-ethers")
 require('dotenv').config()

 const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
 const PRIVATE_KEY = process.env.PRIVATE_KEY || "abcdef"
 

 module.exports = {
     defaultNetwork: "rinkeby",
     networks: {
         hardhat: {
             // // If you want to do some forking, uncomment this
             // forking: {
             //   url: MAINNET_RPC_URL
             // }
         },
         localhost: {
         },
         rinkeby: {
             url: RINKEBY_RPC_URL,
             accounts: [PRIVATE_KEY],
             saveDeployments: true,
         },
     },

  solidity: "0.8.9",
};
