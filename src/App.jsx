import { useState } from 'react';
import db from '../db.json';
import TopicSelector from './components/TopicSelector';
import QuestionViewer from './components/QuestionViewer';
import './App.css';

const App = () => {
  const [topic, setTopic] = useState('All');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [random, setRandom] = useState(false);

  const initializeQuestions = () => {
    let allQuestions =
      topic === 'All' ? Object.values(db).flat() : db[topic] || [];
    if (random) {
      allQuestions = allQuestions.sort(() => Math.random() - 0.5);
    }
    setQuestions(allQuestions);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  return (
    <div className='app-container'>
      <h1>Quiz App</h1>
      <TopicSelector
        db={db}
        topic={topic}
        setTopic={setTopic}
        random={random}
        setRandom={setRandom}
        initializeQuestions={initializeQuestions}
      />
      {questions.length > 0 && (
        <QuestionViewer
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          prevQuestion={prevQuestion}
          nextQuestion={nextQuestion}
          canPrev={currentQuestionIndex > 0}
          canNext={currentQuestionIndex < questions.length - 1}
        />
      )}
    </div>
  );
};

export default App;
