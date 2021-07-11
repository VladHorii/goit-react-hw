import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        style={{ position: 'fixed', top: '50%', left: '50%' }}
        type="Circles"
        color="#3f51b5"
        height={150}
        width={150}
        timeout={20000}
      />
    );
  }
}
