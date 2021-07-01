import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ item, toggleModal }) {
  return (
    <GalleryItem key={item.id}>
      <GalleryItemImage
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => toggleModal(item)}
      />
    </GalleryItem>
  );
}
