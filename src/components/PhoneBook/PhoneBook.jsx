import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';
import ContactList from '../ContactList';
import Filter from '../Filter';
import ContactForm from '../ContactForm';

import useLocalStorage from '../../hooks/useLocalStorage';
const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export default function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const addToContacts = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    setContacts(prevContacts => [
      {
        id: uuidv4(),
        name,
        number,
      },
      ...prevContacts,
    ]);

    return true;
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  function visibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmit={addToContacts} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onChange={handleChange} />
        <ContactList
          contacts={visibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}
