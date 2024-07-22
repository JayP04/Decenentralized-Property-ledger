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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
  <chakraProvider>
    <div className="App">
      <header>
      <div className='header'>
        <p className='title'> Decentralize Property Ledger</p>
        <div className='options'>
        <button className='aboutusop' onClick={() => setIsModalOpen(true)}>About Us</button>
        <button className='verifyop' onClick={() => console.log('Verify clicked')}>Verification</button>
        <Connectbutton className='buttonforwallet' />
        </div> 
      </div>
      </header>

      <div className='body'>
        <div className='intro'>
          <p>Welcome intro goes here...</p>
        </div>
        
        <div className='fileinput'>
          <Fileupload />
        </div>


        <div className='car1'>
          <Carouselsize />
        </div>

        <div className='car2'>
          <Carouseldemo />
        </div>

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>About Us</h2>
        <p>We are a team of developers working on a project to decentralize the property ledger.</p>
      </Modal>

    </div>
  </chakraProvider>
    );
}

export default App;
