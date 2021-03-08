import React from 'react';
import './details.css';
const Details = ({ cardname, cardvalue }) => {
    return (
        <div className="details-card">
            <div className="card-name">
                {cardname}
            </div>
            <div className="card-value">
                {cardvalue}
            </div>
        </div>
    )
}
export default Details;