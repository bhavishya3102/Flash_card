import React, { useState } from 'react';
import axios from 'axios';
import './Add.css'
const Add = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/add', {
                question,
                answer,
            });
            setMessage(`Data added successfully with ID: ${response.data.id}`);
            setQuestion('');
            setAnswer('');
        } catch (error) {
            console.error('There was an error adding the data!', error);
            setMessage('Error adding data.');
        }
    };

    return (
        <div>
            <h2>Add a New Question and Answer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question:</label>
                    <input 
                        type="text" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Answer:</label>
                    <input 
                        type="text" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Add;
