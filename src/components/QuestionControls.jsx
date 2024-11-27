import PropTypes from 'prop-types';

const QuestionControls = ({
  showAnswer,
  setShowAnswer,
  prevQuestion,
  nextQuestion,
  canPrev,
  canNext,
}) => {
  return (
    <div className='navigation-buttons'>
      <button onClick={prevQuestion} disabled={!canPrev}>
        Previous
      </button>
      <button onClick={() => setShowAnswer((prev) => !prev)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      <button onClick={nextQuestion} disabled={!canNext}>
        Next
      </button>
    </div>
  );
};

QuestionControls.propTypes = {
  showAnswer: PropTypes.bool.isRequired,
  setShowAnswer: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  canPrev: PropTypes.bool.isRequired,
  canNext: PropTypes.bool.isRequired,
};

export default QuestionControls;
