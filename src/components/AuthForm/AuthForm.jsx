//
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import css from './AuthForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();

  function onFormSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    dispatch(authOperations.login({ email, password }));
  }

  return (
    <form onSubmit={onFormSubmit} className={css.form} autoComplete="off">
      <h3>Authorization</h3>
      <label className={css.group}>
        Email
        <input type="mail" name="email" />
      </label>

      <label className={css.group}>
        Password
        <input type="password" name="password" />
      </label>

      <div className={css.center}>
        <button type="submit" className={css.btn}>
          Login
        </button>
      </div>
      <Link to="/register">Create a new account</Link>
    </form>
  );
}

export default ContactForm;
