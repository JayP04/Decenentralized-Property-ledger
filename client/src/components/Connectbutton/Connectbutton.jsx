import React from 'react';
import './Connectbutton.css';
import { useState } from 'react';

function Connectbutton() {
    const [defaultAccount, setDefaultAccount] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [isWalletConnected, setIsWalletConnected] = React.useState(false);


    const connectWalletHandler = () => {
        if (window.ethereum) { 
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(results => {
                    accountChangedHandler(results[0]);
                    setIsWalletConnected(true);
                })
        } else {
            setErrorMessage('Please install MetaMask and try again!');
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }


    return (
        <div className='walletparent'>
            <div className="connect">
                {!isWalletConnected && <p className='accounttext'>Connect your wallet 🔥</p>}
                <button className="connectbutton" onClick={connectWalletHandler}>Connect Wallet</button>
                <p className='text-red-400'>{errorMessage}</p>
            </div>
            {isWalletConnected && <p className='accounttext2'>Connected ✅</p>}
            {isWalletConnected && (
            <div className='accountdisplay'>
                <p>Wallet Address: {defaultAccount}</p>
            </div>
            )}
        </div>
    );
}

export default Connectbutton;