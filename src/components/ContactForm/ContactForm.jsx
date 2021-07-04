// import PropTypes from 'prop-types';

import { useState } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({onSubmit}){
  const [name, setName] = useState();
  const [number, setNumber] = useState('');
  
  function addToContacts(e) {
    e.preventDefault();

    const res = onSubmit(name, number);
    if (res) {
      resetForm();
    }
  };

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
    
      default:
        break;
    }
  };

  function resetForm() {
    setNumber('')
    setName('')
  };


    return (
      <form onSubmit={addToContacts} className={css.form}>
        <label className={css.group}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
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
            autoComplete="off"
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

