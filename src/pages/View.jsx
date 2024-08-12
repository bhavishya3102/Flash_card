import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './View.css';

const View = () => {
  const [flashcards, setFlashcards] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/data');
        setFlashcards(response.data.data); // Assuming response.data is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view-container">
      <h2 className="view-title">All Flashcards</h2>
      <ul className="flashcards-list">
        {flashcards.map((flashcard) => (
          <li key={flashcard.id} className="flashcard-item">
            <strong className="flashcard-id">ID: {flashcard.id}</strong>
            <strong className="flashcard-question">Question:</strong>
            <p className="flashcard-text">{flashcard.question}</p>
            <strong className="flashcard-answer">Answer:</strong>
            <p className="flashcard-text">{flashcard.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
