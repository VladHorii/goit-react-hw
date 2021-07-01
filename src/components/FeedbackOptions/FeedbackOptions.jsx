import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ optoins, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(optoins).map(option => (
        <Button
          option={option}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
}

export default FeedbackOptions;
