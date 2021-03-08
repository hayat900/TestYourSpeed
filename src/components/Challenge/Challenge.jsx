import React from 'react';
import './Challenge.css';
import "./../Testcontainer/Testcontainer";
import Testcontain from './../Testcontainer/Testcontainer';
const Challenge = () => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">Take the speed test
            </h1>
            <Testcontain words={4} characters={14} wpm={20} />
        </div >
    );
}
export default Challenge;