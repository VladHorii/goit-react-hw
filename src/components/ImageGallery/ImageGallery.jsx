import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ imagesData, toggleModal }) {
  return (
    <Gallery>
      {imagesData.map(image => (
        <ImageGalleryItem
          key={image.id}
          item={image}
          toggleModal={toggleModal}
        />
      ))}
    </Gallery>
  );
}
