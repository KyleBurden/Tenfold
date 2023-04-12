import React, { useState, useEffect } from 'react';

const StatsPage = () => {
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  useEffect(() => {
    // Load stats from local storage on component mount
    const storedCorrectGuesses = localStorage.getItem('correctGuesses');
    const storedIncorrectGuesses = localStorage.getItem('incorrectGuesses');

    if (storedCorrectGuesses) {
      setCorrectGuesses(parseInt(storedCorrectGuesses));
    }

    if (storedIncorrectGuesses) {
      setIncorrectGuesses(parseInt(storedIncorrectGuesses));
    }
  }, []);

  // Update stats and local storage on correct guess
  const handleCorrectGuess = () => {
    setCorrectGuesses(correctGuesses + 1);
    localStorage.setItem('correctGuesses', correctGuesses + 1);
  };

  // Update stats and local storage on incorrect guess
  const handleIncorrectGuess = () => {
    setIncorrectGuesses(incorrectGuesses + 1);
    localStorage.setItem('incorrectGuesses', incorrectGuesses + 1);
  };

  return (
    <div>
      <h5>Personal Stats Counter using Local Storage</h5>
      <p>Correct Guesses: {correctGuesses}</p>
      <p>Incorrect Guesses: {incorrectGuesses}</p>
      <button onClick={handleCorrectGuess}>Correct Guess</button>
      <button onClick={handleIncorrectGuess}>Incorrect Guess</button>
    </div>
  );
};

export default StatsPage;
