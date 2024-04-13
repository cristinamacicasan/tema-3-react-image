import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSubmit = async (searchTerm) => {
    try {
      setSearchTerm(searchTerm); 
      setLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchTerm}&page=1&key=42285080-c22d5f6a90f49c0ab863c2d8a&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchTerm}&page=2&key=42285080-c22d5f6a90f49c0ab863c2d8a&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImages(prevImages => [...prevImages, ...data.hits]);
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Loader loading={loading} />
      <ImageGallery images={images} onImageClick={handleOpenModal} />
      {images.length > 0 && <Button text="Load More" onClick={handleLoadMore} />}
      <Modal isOpen={modalOpen} imageUrl={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
