import React from 'react';
import Details from '../details/details';
import FlashCard from '../flashcard/flashcard';

import './typing.css';
const Typing = ({
    words, characters, wpm
}) => {
    return (
        <div className="typing-challenge">
            <div className="details-container">
                <Details cardname="words" cardvalue={words} />
                <Details cardname="characters" cardvalue={characters} />
                <Details cardname="wpm" cardvalue={wpm} />
            </div>
            <div className="typewriter">
                <FlashCard selectedParagraph="Hello World" />
            </div>
        </div>
    );
};
export default Typing;