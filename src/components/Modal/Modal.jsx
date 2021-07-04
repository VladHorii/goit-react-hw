import { useEffect } from 'react';

import { ModalWindow, Overlay } from './Modal.styled';

export default function Modal({ toggleModal, data: { largeImageURL, tags } }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [toggleModal])


  function onOverlayClick(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
}