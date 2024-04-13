import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css'; // Importăm stilurile pentru Loader

const Loader = ({ loading }) => {
  return loading ? (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  ) : null;
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired, // Proprietatea 'loading' indică dacă se încarcă sau nu
};

export default Loader;
