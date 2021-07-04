import { useState } from 'react';

import {
  Header,
  Form,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('')

  function onFormSubmit(e) {
    e.preventDefault();
    onSubmit(query)
  };

  function onChangeQuery({ currentTarget }) {
    setQuery(currentTarget.value)
  };

  return (
    <Header>
      <Form onSubmit={onFormSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChangeQuery}
        />
      </Form>
    </Header>
  );
}
