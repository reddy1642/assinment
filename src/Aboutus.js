import React from 'react';

const About = () => {
  const funFacts = [];
  
  const getRandomFact = () => {
    alert(funFacts[Math.floor(Math.random() * funFacts.length)]);
  };

  return (
    <div>
      <h1>About This App</h1>
      <p>This is a Mystery Number Guessing Game built with React.</p>
      <h3>Features:</h3>
      <ul>
        <li>Interactive Number Guessing Game</li>
        <li>Task List Management</li>
        <li>Contact Form</li>
      </ul>
      <button onClick={getRandomFact}>Get a Fun Fact!</button>
    </div>
  );
};

export default About;
