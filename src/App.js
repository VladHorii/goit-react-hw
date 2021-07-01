import { Component } from 'react';

import Searchbar from './components/Searchbar';
import LoadMoreBtn from './components/Button';
// import Container from './components/Container';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import LoaderSpinner from './components/LoaderSpinner';

import PixabayApi from './services/pixabayApi';
const pixabayApi = new PixabayApi();

export default class App extends Component {
  state = {
    imageGalleryItems: [],
    isModalActive: false,
    modalImageData: {},
    isLoading: false,
    spinner: true,
  };

  /**
   * Функция для поиска картинок
   * Возвращает массив обьектов стостоящих из id, largeImageURL, webformatURL, tags
   */
  searchPicture = async () => {
    this.toggleLoaderSpinner();
    const response = await pixabayApi.fetchPicture();
    const imageInfo = response.map(
      ({ id, largeImageURL, webformatURL, tags }) => ({
        id,
        largeImageURL,
        webformatURL,
        tags,
      }),
    );
    this.toggleLoaderSpinner();
    return imageInfo;
  };

  onSubmitSearchForm = async query => {
    pixabayApi.query = query;
    pixabayApi.resetPage();
    const imageInfo = await this.searchPicture();

    this.setState({ imageGalleryItems: imageInfo });
  };
  onClickLoadMoreBtn = async () => {
    pixabayApi.incrementPage();
    const imageInfo = await this.searchPicture();

    this.setState(prevState => ({
      imageGalleryItems: [...prevState.imageGalleryItems, ...imageInfo],
    }));
    return true;
  };

  toggleModal = (modalImageData = {}) => {
    this.setState(prevState => ({
      isModalActive: !prevState.isModalActive,
      modalImageData,
    }));
  };

  toggleLoaderSpinner = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  render() {
    const { imageGalleryItems, isModalActive, modalImageData, isLoading } =
      this.state;
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.onSubmitSearchForm} />

          {imageGalleryItems.length > 0 && (
            <>
              <ImageGallery
                imagesData={imageGalleryItems}
                toggleModal={this.toggleModal}
              />
              <LoadMoreBtn onClick={this.onClickLoadMoreBtn} />
            </>
          )}
        </div>
        <>
          {isLoading && <LoaderSpinner />}
          {isModalActive && (
            <Modal data={modalImageData} toggleModal={this.toggleModal} />
          )}
        </>
      </>
    );
  }
}
