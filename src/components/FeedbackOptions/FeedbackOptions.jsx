import css from './FeedbackOptions.module.css';

function FeedbackOptions({ optoins, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(optoins).map(option => (
        <button
          className={`${css.btn} ${css[option]}`}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default FeedbackOptions;
