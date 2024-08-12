import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './View.css';

const Delete = () => {
  const [flashcards, setFlashcards] = useState([""]);
  const [msg,setmsg]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://flash-card-backend-7qj8.onrender.com/api/v1/data');
        setFlashcards(response.data.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
        console.log(id)
      await axios.delete(`https://flash-card-backend-7qj8.onrender.com/api/v1/delete/${id}`);
      setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
      setmsg(`FlashCard having id${id} deleted successfully!! `)
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  return (
    <div>
 <div className="view-container">
      <h2 className="view-title">All Flashcards</h2>
      <ul className="flashcards-list">
        {flashcards.map((flashcard) => (
          <li key={flashcard.id} className="flashcard-item">
            <strong className="flashcard-question">Question:</strong>
            <p className="flashcard-text">{flashcard.question}</p>
            <strong className="flashcard-answer">Answer:</strong>
            <p className="flashcard-text">{flashcard.answer}</p>
            <button
              className="delete-button"
              onClick={() => handleDelete(flashcard.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
      <p>{msg}</p>
    </div>
   
  );
};

export default Delete;
