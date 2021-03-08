import React from 'react';
import Tryagain from '../tryagain/tryagain';
import Typing from '../typing/typing';
import './Testcontainer.css';
const Testcontain = ({
    words, characters, wpm
}) => {
    const timeremaining = 0;
    return (
        <div className="test-container">
            {
                timeremaining > 0 ? (
                    <div data-aos="fade-up" className="typing">
                        <Typing words={words} characters={characters} wpm={wpm}
                        />
                    </div>
                ) : (
                    <div className="try-again">
                        <Tryagain words={words} characters={characters} wpm={wpm} />
                    </div>
                )
            }







        </div>
    );
};
export default Testcontain;