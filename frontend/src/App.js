import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

function App() {
  const [storedPrice, setStoredPrice] = useState('');

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractAddress = '0xf77aA27a13Dc1d8d5Df64D48470D4B30B52EE07a';
  const ABI = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"storeLatestPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"storedPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]'
  const contract = new ethers.Contract(contractAddress, ABI, signer);



  const getStoredPrice = async () => {
    try {
      const contractPrice = await contract.storedPrice();
      setStoredPrice(parseInt(contractPrice) / 100000000);
      console.log("contractPrice: ", parseInt(contractPrice));
    } catch (error) {
      console.log("getStoredPrice Error: ", error);
    }
  }


  async function updatePrice() {
    try {
      const transaction = await contract.storeLatestPrice();
      await transaction.wait();
      await getStoredPrice();
    } catch (error) {
      console.log("updatePrice Error: ", error);
    }


  }

  getStoredPrice()
  .catch(console.error)

  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col">
          <h3>Stored Price</h3>
          <p>Stored ETH/USD Price: {storedPrice}</p>
        </div>

        <div className="col">
          <h3>Update Price</h3>
          <button type="submit" className="btn btn-dark" onClick={updatePrice}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default App;