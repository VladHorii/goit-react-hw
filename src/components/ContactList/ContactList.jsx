import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/phoneBook/phoneBook-operations';
import {
  getVisibleContacts,
  getError,
  getIsLoading,
} from '../../redux/phoneBook/phoneBook-selectors';
import { useEffect } from 'react';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}

      {contacts?.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} className={css.li}>
              <span>{contact.name}:</span>
              <span className={css.number}>{contact.number}</span>
              <button
                onClick={() => onDeleteContact(contact.id)}
                type="button"
                className={css.btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
}

// import PropTypes from 'prop-types';

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
