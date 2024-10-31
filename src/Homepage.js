import React, { useState } from 'react';

const Home = () => {
  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    setAttempts(attempts + 1);
    if (parseInt(guess) === number) {
      setMessage(`Correct! It took you ${attempts + 1} attempts.`);
    } else if (parseInt(guess) < number) {
      setMessage('Too low!');
    } else {
      setMessage('Too high!');
    }
    setGuess('');
  };

  const resetGame = () => {
    setNumber(generateRandomNumber());
    setAttempts(0);
    setMessage('');
  };

  return (
    <div>
      <h1>Welcome to the Mystery Number Guessing Game!</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <button onClick={resetGame}>Play Again</button>
      <p>{message}</p>
    </div>
  );
};

export default Home;
