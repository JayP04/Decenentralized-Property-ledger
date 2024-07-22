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



import React, { useState } from 'react';
import './Modal2.css';
import { useDropzone } from 'react-dropzone';
import './Fileupload.css';
import Modal from '../Modal/Modal';

  

function FileUpload() {
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [document, setDocument] = useState(null);
    const [description, setDescription] = useState('');

    const { getRootProps, getInputProps } = useDropzone({
      onDrop: acceptedFiles => {
        setFile(acceptedFiles[0]);
      },
    });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  


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
                    Drag 'n' drop your file here, or click to select files
                </p>
                )}
            </div>
           </div> 

        <div>
            <input
            type="text"
            placeholder="Property Document"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
            className="inputdocumentation"
            />
        </div>
            
        <div>
            <textarea
            style={{resize: 'both', color: 'black', border: '1px solid black', }}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textareaField"
            />
        </div>           


        </Modal>
      )}
    </>
  );
}
export default FileUpload;