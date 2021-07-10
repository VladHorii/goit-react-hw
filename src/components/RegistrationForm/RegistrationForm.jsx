//
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import css from './RegistrationForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();

  function onFormSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const email = elements.email.value;
    const name = elements.name.value;
    const password = elements.password.value;
    console.log(email, name, password);

    dispatch(authOperations.registration({ name, email, password }));
  }

  return (
    <form onSubmit={onFormSubmit} className={css.form} autoComplete="off">
      <h3>Registration</h3>
      <label className={css.group}>
        Email
        <input type="mail" name="email" />
      </label>

      <label className={css.group}>
        Name
        <input type="text" name="name" />
      </label>

      <label className={css.group}>
        Password
        <input type="password" name="password" />
      </label>
      <div className={css.center}>
        <button type="submit" className={css.btn}>
          Registration
        </button>
      </div>
      <Link to="/login">Already have an account? Login</Link>
    </form>
  );
}

export default ContactForm;
