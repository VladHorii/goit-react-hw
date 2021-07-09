import css from './Filter.module.css';

function Filter({ filter, onChange }) {
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
