import React, { useState } from "react";
import "./App.css";
const Flipcard = ({question,answer}) => {
 
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className="App">
            
            <h3>Flip the Card</h3>
            <div className="container">
                <div
                    className={`flip-card ${
                        isFlipped ? "flipped" : ""
                    }`}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                {question}
                            </div>
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                        <div className="flip-card-back">
                            <div className="card-content">
                                {answer}
                            </div>
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flipcard;