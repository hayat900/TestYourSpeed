import React from 'react';
import Testletter from '../testletter/testletter';
import './flashcard.css';
const FlashCard = ({ selectedParagraph,timeremaining,timerstarted,testinfo,input }) => {
    
    return (
        <div className="typing">
            <div className="timer-container">
                <p className="timer">
                    00:{timeremaining>=10?timeremaining:`0${timeremaining}`}
               </p>
                <p className="timer-info">
                    {(!timerstarted)?
                    "The test will stop the moment you type an incorrect letter or when the timer zeros down.The sample text changes everything you refresh the screen.Start typing to start the test.":undefined}

               </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea textparagraph">
                        {/* {selectedParagraph} */}
                       {
                           testinfo.map((letter,index)=>{

                              return (<Testletter key={index} letter={letter}/>);
                           })
                       }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea 
                    onChange={(e)=>input(e.target.value)}
                    className="textarea"
                        placeholder="start typing here...."
                    >


                    </textarea>
                </div>
            </div>
        </div>
    );
}
export default FlashCard;