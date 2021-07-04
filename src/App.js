import { useState } from 'react';

import Searchbar from './components/Searchbar';
import LoadMoreBtn from './components/Button';
// import Container from './components/Container';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import LoaderSpinner from './components/LoaderSpinner';

import PixabayApi from './services/pixabayApi';
const pixabayApi = new PixabayApi();

export default function App() {
  const [imageGalleryItems, setImageGalleryItems] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalImageData, setModalImageData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const searchPicture = async () => {
    toggleLoaderSpinner();
    const response = await pixabayApi.fetchPicture();
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

  const onSubmitSearchForm = async query => {
    pixabayApi.query = query;
    pixabayApi.resetPage();
    const imageInfo = await searchPicture();
    setImageGalleryItems(imageInfo);
  };
  const onClickLoadMoreBtn = async () => {
    pixabayApi.incrementPage();
    const imageInfo = await searchPicture();

    setImageGalleryItems(prevState => [...prevState, ...imageInfo]);

    return true;
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
            <LoadMoreBtn onClick={onClickLoadMoreBtn} />
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
