import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from '../Slider';


const Home = () => {
  const [flashcards,setFlashcards] = useState([""]);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/data');
      console.log(response.data);
      setFlashcards(response.data.data);
       // Assuming response.data is an array of flashcards
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
   fetchData();
  }, []); // Empty dependency array to run this effect only once on component mount

  console.log(flashcards)
  return (
    <div className="app">
      <h1>Flashcard Slider</h1>
      <Slider flashcards={flashcards} />
    </div>
  );
};

export default Home;
