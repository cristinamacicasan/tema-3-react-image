import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; // Importăm stilurile pentru Button

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired, // textul butonului
  onClick: PropTypes.func.isRequired, // funcția de tratare a evenimentului de click
};

export default Button;
