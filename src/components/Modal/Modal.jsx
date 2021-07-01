import { Component } from 'react';

import { ModalWindow, Overlay } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.data;
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
