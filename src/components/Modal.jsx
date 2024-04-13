// Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'; // Importăm stilurile pentru Modal

const Modal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null; // Returnăm null dacă modalul nu este deschis

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageUrl} alt="Large" />
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // indicatorul pentru deschiderea sau închiderea modalului
  imageUrl: PropTypes.string.isRequired, // adresa URL a imaginii mari
  onClose: PropTypes.func.isRequired, // funcția de închidere a modalului
};

export default Modal;
