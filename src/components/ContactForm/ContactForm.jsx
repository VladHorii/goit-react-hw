// import PropTypes from 'prop-types';

import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  addToContacts = e => {
    e.preventDefault();

    const { name, number } = this.state;

    const res = this.props.onSubmit(name, number);

    if (res) {
      this.resetForm();
    }
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.addToContacts} className={css.form}>
        <label className={css.group}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}
