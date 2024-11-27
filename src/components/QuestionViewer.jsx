import PropTypes from 'prop-types';
import MarkdownRenderer from './MarkdownRenderer';
import QuestionControls from './QuestionControls';

const QuestionViewer = ({
  question,
  answer,
  showAnswer,
  setShowAnswer,
  prevQuestion,
  nextQuestion,
  canPrev,
  canNext,
}) => {
  return (
    <div className='question-section'>
      <h3>Question:</h3>
      <MarkdownRenderer content={question} />
      <QuestionControls
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        prevQuestion={prevQuestion}
        nextQuestion={nextQuestion}
        canPrev={canPrev}
        canNext={canNext}
      />
      <div className={`answer ${showAnswer ? 'active' : ''}`}>
        <h3>Answer:</h3>
        <MarkdownRenderer content={answer} />
      </div>
    </div>
  );
};

QuestionViewer.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  setShowAnswer: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  canPrev: PropTypes.bool.isRequired,
  canNext: PropTypes.bool.isRequired,
};

export default QuestionViewer;
