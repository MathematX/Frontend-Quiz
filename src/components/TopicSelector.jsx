import PropTypes from 'prop-types';

const TopicSelector = ({
  db,
  topic,
  setTopic,
  random,
  setRandom,
  initializeQuestions,
}) => {
  return (
    <div className='controls'>
      <label>
        Select Topic:
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value='All'>All</option>
          {Object.keys(db).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input
          type='checkbox'
          checked={random}
          onChange={(e) => setRandom(e.target.checked)}
        />
        Random Order
      </label>
      <button onClick={initializeQuestions}>Start</button>
    </div>
  );
};

TopicSelector.propTypes = {
  db: PropTypes.object.isRequired,
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
  random: PropTypes.bool.isRequired,
  setRandom: PropTypes.func.isRequired,
  initializeQuestions: PropTypes.func.isRequired,
};

export default TopicSelector;
