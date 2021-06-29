import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';
import ContactList from '../ContactList';
import Filter from '../Filter';
import ContactForm from '../ContactForm';

export default class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToContacts = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [
        {
          id: uuidv4(),
          name: name,
          number: number,
        },
        ...prevState.contacts,
      ],
    }));
    return true;
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addToContacts} />
        </Section>

        <Section title="Contacts">
          <Filter filter={filter} onChange={this.handleChange} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
