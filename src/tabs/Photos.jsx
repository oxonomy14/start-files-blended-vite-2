import { useEffect, useState } from 'react';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Loader from '../components/Loader/Loader';

import { getPhotos } from '../apiService/photos';

const Photos = () => {
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

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
      <Form
        getQuery={getQuery}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {error && <Text textAlign="center">Something happened</Text>}
      <PhotosGallery images={images} onLoadMore={handleLoadMore} page={page} />
      {isLoading && <Loader />}
    </>
  );
};

export default Photos;
