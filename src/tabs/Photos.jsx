import { useEffect, useState } from 'react';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Button from '../components/Button/Button';
import ImageModal from '../components/ImageModal/ImageModal';
import Loader from '../components/Loader/Loader';

import { getPhotos } from '../apiService/photos';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { photos } = await getPhotos(query, page);
        setImages(prevImages =>
          page === 1 ? photos : [...prevImages, ...photos]
        ); // Додаємо фото або перезаписуємо
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const getQuery = inputValue => {
    console.log(`Значення інпуту під час сабміту форми - ${inputValue}`);
    if (!inputValue.trim()) {
      window.alert('Введіть пошукове слово');
      return;
    }

    setQuery(inputValue); // Оновлюємо пошуковий запит
    setPage(1); // Починаємо з першої сторінки
    setImages([]); // Очищаємо попередні результати
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // Збільшуємо номер сторінки
  };

  useEffect(() => {
    console.log(`Поточний номер сторінки: ${page}`);
  }, [page]); // Логування актуального значення сторінки

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={getQuery} />

      {error && <Text textAlign="center">Something happened</Text>}
      <PhotosGallery
        images={images}
        onLoadMore={handleLoadMore}
        page={page}
        onImageClick={openModal}
      />
      {images.length > 0 && (
        <Button onClick={handleLoadMore} type="button">
          Load More
        </Button>
      )}
      {isLoading && <Loader />}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </>
  );
};

export default Photos;
