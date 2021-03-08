import React from 'react';
import './tryagain.css';
const Tryagain = ({
    words, characters, wpm
}) => {
    return (
        <div className="try-again-container">

            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>characters:</b>{characters}

                </p>
                <p>
                    <b>words:</b>{words}

                </p>
                <p>
                    <b>wpm:</b>{wpm}wpm

                </p>
            </div>
            <div>
                <button className="end-button start">
                    retry
    </button>
                <button onClick={() => {
                    window.open("https://www.facecom.com/sharer/sharer.php?u=Checkitout",
                        "facebook-share-dialog", "width=800,height=600");
                }} className="end-button share">
                    share
    </button>
                <button onClick={() => {
                    window.open("https://www.twitter.com/intent/tweet?text=dishadsouza",
                        "twitter-share-dialog", "width=800,height=600");
                }}
                    className="end-button tweet" >
                    tweet
    </button>
            </div>
        </div>
    );
};
export default Tryagain;