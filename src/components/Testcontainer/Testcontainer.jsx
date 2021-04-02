import React from 'react';
import Tryagain from '../tryagain/tryagain';
import Typing from '../typing/typing';
import './Testcontainer.css';
const Testcontain = ({
    words, characters, wpm,selectedparagraph,timeremaining,timerstarted,testinfo,input,startagain
}) => {
    // console.log(testinfo);
    return (
        <div className="test-container">
            {
                timeremaining > 0 ? (
                    <div data-aos="fade-up" className="typing">
                        <Typing words={words} characters={characters} wpm={wpm}
                        selectedparagraph={selectedparagraph}
                        timeremaining={timeremaining}
                        timerstarted={timerstarted}
                        testinfo={testinfo}
                        input={input}
                        
                        />
                    </div>
                ) : (
                    <div className="try-again">
                        <Tryagain words={words} characters={characters} wpm={wpm}
                        startagain={startagain}
                        />
                    </div>
                )
            }







        </div>
    );
};
export default Testcontain;