import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from '../Slider';


const Home = () => {
  const [flashcards,setFlashcards] = useState([""]);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://flash-card-backend-7qj8.onrender.com/api/v1/data');
      console.log(response.data);
      setFlashcards(response.data.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
   fetchData();
  }, []); 

  console.log(flashcards)
  return (
    <div className="app">
      <h1>Flashcard Slider</h1>
      <Slider flashcards={flashcards} />
    </div>
  );
};

export default Home;
