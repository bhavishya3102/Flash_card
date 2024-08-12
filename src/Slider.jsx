import React, { useState } from 'react';
import Flipcard from './Flipcard';

const Slider = ({ flashcards }) => {
    console.log(flashcards)
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      
      <Flipcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
      />
      <div className='btn'>
      <button onClick={prevCard} className="nav-button">Previous</button>
      <button onClick={nextCard} className="nav-button">Next</button>

      </div>
     
    </div>
  );
};

export default Slider;
