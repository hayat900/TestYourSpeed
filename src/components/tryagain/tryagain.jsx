import React from 'react';
import './tryagain.css';
const Tryagain = ({
    words, characters, wpm,startagain
}) => {
    return (
        <div className="try-again-container">

            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters: </b>{characters}

                </p>
                <p>
                    <b>Words: </b>{words}

                </p>
                <p>
                    <b>Wpm: </b>{wpm}

                </p>
            </div>
            <div>
                <button onClick={()=>startagain()
                }
                className="end-button start">
                    retry
    </button>
                <button onClick={() => {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=example.org",
                        "facebook-share-dialog", "width=800,height=600");
                }} className="end-button share">
                    Share
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