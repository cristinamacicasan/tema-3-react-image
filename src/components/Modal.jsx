import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'; 

const Modal = ({ isOpen, imageUrl, onClose }) => {
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); 
    }
  };

  if (!isOpen) return null; 

  return (
    <div className={styles.overlay} onClick={handleCloseModal}>
      <div className={styles.modal}>
        <img src={imageUrl} alt="Large" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired, 
};

export default Modal;
