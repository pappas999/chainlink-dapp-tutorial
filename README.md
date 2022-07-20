#  Chainlink dApp Example
 A Simple example tutorial for creating a Decentralized Application using Ethereum, Chainlink Data Feeds, React and Ethers.js

 See the guide on the Chainlink official blog


## Deploying Backend Smart Contracts
To deploy the smart contract to live or test network, you'll need:

1. An rpc URL 
2. A Private Key
3. ETH 

Let's look at an example of setting these up using the Rinkeby testnet. 

### Rinkeby Ethereum Testnet Setup

First, we will need to set environment variables. We can do so by setting them in our `.env` file (create it if it's not there). You can also read more about [environment variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) from the linked twilio blog. You'll find a sample of what this file will look like in `.env.example`

> IMPORTANT: MAKE SURE YOU'D DONT EXPOSE THE KEYS YOU PUT IN THIS `.env` FILE. By that, I mean don't push them to a public repo, and please try to keep them keys you use in development not associated with any real funds. 

1. Set your `RINKEBY_RPC_URL` [environment variable.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)

You can get one for free from [Alchmey](https://www.alchemy.com/), [Infura](https://infura.io/), or [Moralis](https://moralis.io/speedy-nodes/). This is your connection to the blockchain. 

2. Set your `PRIVATE_KEY` environment variable. 

This is your private key from your wallet, ie [MetaMask](https://metamask.io/). This is needed for deploying contracts to public networks. You can optionally set your `MNEMONIC` environment variable instead with some changes to the `hardhat.config.js`.

**WARNING**

When developing, it's best practice to use a Metamask that isn't associated with any real money. A good way to do this is to make a new browser profile (on Chrome, Brave, Firefox, etc) and install Metamask on that brower, and never send this wallet money.  

Don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!

`.env` example:
```
RINKEBY_RPC_URL='www.infura.io/asdfadsfafdadf'
PRIVATE_KEY='abcdef'
```
`bash` example
```
export RINKEBY_RPC_URL='www.infura.io/asdfadsfafdadf'
export PRIVATE_KEY='abcdef'
```

> You can also use a `MNEMONIC` instead of a `PRIVATE_KEY` environment variable by uncommenting the section in the `hardhat.config.js`, and commenting out the `PRIVATE_KEY` line. However this is not recommended. 

For other networks like mainnet and polygon, you can use different environment variables for your RPC URL and your private key. See the `hardhat.config.js` to learn more. 

3. Get some Rinkeby Testnet ETH 

Head over to the [Chainlink faucets](https://faucets.chain.link/) and get some ETH. 

Now you're ready to build and deploy the contract. To compile contracts you first need to install the required dependencies

```
cd backend
npm install
```

To compile contracts:

```
npx hardhat compile
```

To deploy contracts:

```
npx hardhat run --network rinkeby scripts/deploy.js
```


## Deploying And Running the Frontend

First you should install the required dependencies:

```
cd frontend
npm install
```

Next step is to take your deployed contract address from the previous section, and put it in the [App.js](./frontend/src/App.js) file in the `contractAddress` constant, then save your file.

Finally, to run the frontend:
```
npm run start
```

You should see your browser open with a new window at the URL `http://localhost:3000/` with your dApp. Ensure you're signed into your MetaMask wallet, and have connected it to your dApp.
