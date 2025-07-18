import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Optional

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <nav className="navbar">
        <h1>Flashcard Generator</h1>
        {/*<a href="#about">About</a>*/}
      </nav>

      <main className="hero">
        <h2>Boost Your Learning with Flashcards</h2>
        <p>Generate interactive flashcards by choosing category and number of questions.</p>
        <button onClick={() => navigate('/app')}>Get Started</button>
      </main>

      <section id="about" className="about">
        <h3>About</h3>
        <p>
          This tool allows users to create and study flashcards using trivia-based questions.
          Built using React and Open Trivia API.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
