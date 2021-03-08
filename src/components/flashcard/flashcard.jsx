import React from 'react';
import './flashcard.css';
const FlashCard = ({ selectedParagraph }) => {
    return (
        <div className="typing">
            <div className="timer-container">
                <p className="timer">
                    00.60
               </p>
                <p className="timer-info">
                    Start typing to start the test
               </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea textparagraph">
                        {selectedParagraph}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea"
                        placeholder="start typing"
                    >


                    </textarea>
                </div>
            </div>
        </div>
    );
}
export default FlashCard;