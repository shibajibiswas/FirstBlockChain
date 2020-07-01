import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tree.png';
import { API_BASE_URL } from '../config';

function App() {
  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then(response => response.json())
      .then(json => setWalletInfo(json));
  }, []);

  const { address, balance } = walletInfo;

  return (
    <div className="App">
      <img className="logo" src={logo} alt="application-logo" />
      <h3>Welcome to Amature Blockchain</h3>
      <br />
      <h4>Enjoy the Power Of dApp</h4>
      <br/>
      <Link to="/blockchain">Blockchain</Link>
      <Link to="/conduct-transaction">Conduct a Transaction</Link>
      <Link to="/transaction-pool">Transaction Pool</Link>
      <br />
      <div className="WalletInfo">
        <div>Wallet Address: {address}</div>
        <div>ShibCoin Balance: {balance}</div>
      </div>
    </div>
  );
}

export default App;
