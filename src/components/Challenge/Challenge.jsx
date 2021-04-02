import React from 'react';
import './Challenge.css';
import "./../Testcontainer/Testcontainer";
import Testcontain from './../Testcontainer/Testcontainer';
const Challenge = (props) => {
    // console.log(props.testinfo);
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">Take the speed test
            </h1>
            <Testcontain words={props.words} characters={props.characters} wpm={props.wpm} 
            timeremaining={props.timeremaining} timerstarted={props.timerstarted} selectedparagraph=
            {props.selectedparagraph} testinfo={props.testinfo} input={props.input} 
            startagain={props.startagain}
            />
        </div >
    );
}
export default Challenge;