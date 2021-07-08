import { useDispatch, useSelector } from 'react-redux';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import css from './Filter.module.css';
import { getFilter } from '../../redux/phoneBook/phoneBook-selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => dispatch(phoneBookActions.changeFilter(e.target.value));

  return (
    <>
      <label className={css.group}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          autoComplete="off"
          value={filter}
          onChange={onChange}
        />
      </label>
    </>
  );
}

export default Filter;
