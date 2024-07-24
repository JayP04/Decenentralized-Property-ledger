/*import { useRef, useState } from "react";
import React from 'react';
import './Fileupload.css';

function Fileupload() {
    const inputRef = useRef(null);
    const handleImageclick = () => {
        inputRef.current.click();
    };

    return (
        <div className="upload" onClick={handleImageclick}>
            <input type="file" ref={inputRef} placeholder="Upload PropNFTs" />
            <span>Choose File</span>
        </div>
    )
}
*/



import React, { useState, useEffect } from 'react';
import './Modal2.css';
import { useDropzone } from 'react-dropzone';
import './Fileupload.css';
import Modal from '../Modal/Modal';
import contractABI from "../../abis/contractABI.json";
import { ethers } from "ethers";

  

function FileUpload() {
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState("");
    const [document, setDocument] = useState("");
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const { getRootProps, getInputProps } = useDropzone({
      onDrop: acceptedFiles => {
        setFile(acceptedFiles[0]);
        console.log(acceptedFiles[0]);
      },
    });

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);


    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleDocumentChange = (e) => {
      setDocument(e.target.files[0]);
    };
  
    const handleSubmit = () => {
      // Here you would integrate with IPFS or any backend service
      console.log(file, document, description);
      closeModal();
      setSuccessMessage('Form submitted successfully!');
    };




//uploading to ipfs
    const uploadToIPFS = async (file) => {
        try {
          console.log("Step 1:", file);
          const formData = new FormData();
          formData.append("file", file);

          console.log("Step 2:", formData);
          console.log("Step 2.1:", process.env.REACT_APP_PINATA_JWT);
          // No need for file storage as we're handling this in the browser environment
          const res = await fetch(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
              },
              body: formData,
            }
          );
        console.log("Step 3:", res);
    
          const resData = await res.json();

            console.log("Step 4:", resData);
    
          // Assuming the file URL is what you need for minting
          return `https://gateway.pinata.cloud/ipfs/${resData.IpfsHash}`;
        } catch (error) {
          console.error("Error uploading file to IPFS:", error);
          return null;
        }
      };
    
    const mintNFT = async () => {
      console.log("Minting NFT...");
      console.log("File:", file);
      console.log("Document:", document);
      console.log("Description:", description);

        const imageMetadataURI = await uploadToIPFS(file);
        const deedMetadataURI = await uploadToIPFS(document);
        if (!imageMetadataURI || !deedMetadataURI) {
            console.log("File upload to IPFS failed");
            return;
        }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
      const contract = new ethers.Contract(
        contractAddress,
        contractABI.abi,
        signer
      );

      try {
        console.log("Minting NFT... 2.0");
        const userAddress = await signer.getAddress();
        console.log("User address: ", userAddress);
        const mintTx = await contract.mintNFT(
          userAddress,
          imageMetadataURI,
          deedMetadataURI,
          description,
        );
        console.log("Minting NFT...3.0");
        await mintTx.wait();
        console.log("NFT minted! Transaction: ", mintTx.hash);
        closeModal();
      } catch (error) {
        console.error("Minting failed: ", error);
      }
    };
    
  

    return (
      <>
        <button onClick={openModal} className='fileuploadbutton'>Upload File</button>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className='upload'
              
              {...getRootProps()}
            >
              <div className='uploadtext'>
                  <input {...getInputProps()} />
                  {file ? (
                  <p>{file.name}</p>
                  ) : (
                  <p>
                      Drag 'n' drop your Property Image here, or click to select.
                  </p>
                  )}
              </div>
             </div> 

          <div>
              <input
              type="file"
              placeholder="Property Document"
              //value={document} commenting off this worked for the file upload. 
              onChange={(e) => setDocument(e.target.files[0])}
              className="inputdocumentation"
              />
          </div>


          <div className="textareaField">
              <textarea
              style={{resize: 'both', color: 'black', border: '1px solid black', }}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
              />
          </div>


          <div className='submitbutton'>
              <button onClick={() => mintNFT()}>Submit</button>
          </div>



             


          </Modal>
        )}
      </>
    );
  








}
export default FileUpload;

