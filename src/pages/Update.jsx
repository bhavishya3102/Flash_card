import React, { useState } from 'react';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      const data = {};
      if (question) data.question = question;
      if (answer) data.answer = answer;

      if (!Object.keys(data).length) {
        setMessage('Please provide at least one field to update.');
        return;
      }

      const response = await axios.put(`https://flash-card-backend-7qj8.onrender.com/api/v1/update/${id}`, data);
      setMessage(`Entry updated successfully: ${response.data.message}`);
      setId('');
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Error updating data.');
    }
  };

  return (
    <div>
      <h2>Update Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Question:</label>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
          />
        </div>
        <div>
          <label>Answer:</label>
          <input 
            type="text" 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)} 
          />
        </div>
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Update;
