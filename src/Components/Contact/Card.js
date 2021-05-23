import React from 'react';

const Card = ({ card }) => {
    const { name, image, info } = card;

    return (
        <div className="col-md-4 col-12 text-center">
            <img src={image} alt="" style={{ height: '100px', width: '100px' }} />
            <p>{name}</p>
            <p>{info}</p>
        </div>
    );
};

export default Card;