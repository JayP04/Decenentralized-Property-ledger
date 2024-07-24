import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';
import Carouselsize from './components/Carousel/Carousel';
import Carouseldemo from './components/Carousel/Carousel2';
import { Upload } from 'lucide-react';
import Fileupload from './components/Fileupload/Fileupload';
import Connectbutton from './components/Connectbutton/Connectbutton';
import { ChakraProvider } from '@chakra-ui/react';
import Gallery from './components/loadingNFTs/loadingNFTs';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <chakraProvider>
      <div className="App">
        <header>
        <div className='header'>
          <p className='title'> Decentralized Property Ledger</p>
          <div className='options'>
          <button className='aboutusop' onClick={() => setIsModalOpen(true)}>About Us</button>
          <button className='verifyop' onClick={() => console.log('Verify clicked')}>Verification</button>
          <Connectbutton className='buttonforwallet' />
          </div> 
        </div>
        </header>

        <body>
          <div className='pre-intro'>
            <h1>Welcome!</h1>
            <p>To proceed, please connect your MetaMask wallet by clicking the button above.</p>
            <p>If you don't have MetaMask installed yet, please install it from the <a className='linktommw' href="https://metamask.io/" target="_blank">MetaMask website</a> and come back. Thank you!</p>

          </div>

          <div className='body'>
            <div className='intro'>
              <p>Welcome to PropNfts. A decentralized Property Ledger that stores your property details as Non-Fungible Tokens. </p>
            </div>
            
            <div className='fileinput'>
              <Fileupload />
            </div>

            <div className='carousel'>
            <Gallery />
            </div>

          </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>About Us</h2>
            <p>A decentralized propery ledger that stores your property details as NFTs using blockchain technology. Being a decentralized application, this makes the near future efficient and transparent in real-estate sector.</p>
          </Modal>
        </body>

        <footer className='footer'>
          <p> Made with 🔥by Kansas Blockchain Fellow.</p>
        </footer>
      </div>
        
    </chakraProvider>
    );
}

export default App;
