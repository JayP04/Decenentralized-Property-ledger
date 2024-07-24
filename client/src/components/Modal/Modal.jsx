// components/Modal/Modal.jsx
import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button className='closebutton' onClick={onClose} style={{ position: 'absolute', bottom: '30', right: '33' }}>Close</button>
      </div>
    </div>
  );
};

export default Modal;