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

          <div className='body'>
            <div className='intro'>
              <p>Welcome intro goes here...</p>
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
      </div>
        
    </chakraProvider>
    );
}

export default App;
