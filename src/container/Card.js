import React from 'react';
import './Card.css'
function Card({title,imageUrl}) {


        return (
            <div className='card-container' align="center">
                <div className="image-container">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="card-title" align='center"'>
                    <p className="card-text">{title}</p>
                </div>
            </div>
        )
}

export default Card
