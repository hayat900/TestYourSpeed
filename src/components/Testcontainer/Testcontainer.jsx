import React from 'react';
import Tryagain from '../tryagain/tryagain';
import './Testcontainer.css';
const Testcontain = ({
    words, characters, wpm
}) => {
    return (
        <div className="test-container">
            <div className="try-again">
                <Tryagain words={words} characters={characters} wpm={wpm} />
            </div>
        </div>
    );
};
export default Testcontain;