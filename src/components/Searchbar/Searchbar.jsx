import { Component } from 'react';

import {
  Header,
  Form,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  onChangeQuery = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onChangeQuery}
          />
        </Form>
      </Header>
    );
  }
}
