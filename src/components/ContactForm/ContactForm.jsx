import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import css from './ContactForm.module.css';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { getContacts } from '../../redux/phoneBook/phoneBook-selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function addToContacts(e) {
    e.preventDefault();

    const isExistsContact = contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    if (isExistsContact) {
      return alert(`${name} or number ${number} is already in contacts.`);
    }

    dispatch(phoneBookActions.addContact(name, number));
    resetForm();
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  function resetForm() {
    setNumber('');
    setName('');
  }

  return (
    <form onSubmit={addToContacts} className={css.form} autoComplete="off">
      <label className={css.group}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.group}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <div className={css.center}>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
