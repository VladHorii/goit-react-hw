import { useEffect, useState } from 'react';

import Searchbar from './components/Searchbar';
import LoadMoreBtn from './components/Button';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import LoaderSpinner from './components/LoaderSpinner';

import { fetchPicture } from './services/pixabayApi';

export default function App() {
  const [imageGalleryItems, setImageGalleryItems] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalImageData, setModalImageData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    if (page === 1) {
      setImageGalleryItems([]);
    }

    const searchPicture = async () => {
      toggleLoaderSpinner();
      const response = await fetchPicture(searchQuery, page);
      const imageInfo = response.map(
        ({ id, largeImageURL, webformatURL, tags }) => ({
          id,
          largeImageURL,
          webformatURL,
          tags,
        }),
      );
      toggleLoaderSpinner();
      return imageInfo;
    };

    searchPicture().then(imageInfo => {
      setImageGalleryItems(prevState => [...prevState, ...imageInfo]);

      if (page !== 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  }, [page, searchQuery]);

  const onSubmitSearchForm = async query => {
    setSearchQuery(query);
    setPage(1);
  };

  const toggleModal = (modalImageData = {}) => {
    setIsModalActive(prevState => !prevState);
    setModalImageData(modalImageData);
  };

  const toggleLoaderSpinner = () => {
    setIsLoading(prevState => !prevState);
  };

  return (
    <>
      <div className="App">
        <Searchbar onSubmit={onSubmitSearchForm} />

        {imageGalleryItems.length > 0 && (
          <>
            <ImageGallery
              imagesData={imageGalleryItems}
              toggleModal={toggleModal}
            />
            <LoadMoreBtn onClick={() => setPage(page => page + 1)} />
          </>
        )}
      </div>
      <>
        {isLoading && <LoaderSpinner />}
        {isModalActive && (
          <Modal data={modalImageData} toggleModal={toggleModal} />
        )}
      </>
    </>
  );
}
