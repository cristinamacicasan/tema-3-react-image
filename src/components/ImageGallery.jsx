// ImageGallery.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem'; // Importăm componenta ImageGalleryItem
import styles from './ImageGallery.module.css'; // Importăm stilurile pentru ImageGallery

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onClick={onImageClick} // Transmitem funcția onImageClick la fiecare ImageGalleryItem
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired, // Lista de imagini
  onImageClick: PropTypes.func.isRequired, // Funcția care trebuie apelată când utilizatorul face clic pe imagine
};

export default ImageGallery;
