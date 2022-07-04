import React from 'react';
import { useSelector } from 'react-redux';

const Card = () => {
    const cards = useSelector((state) => state.cards);

    console.log(cards);
    
    return(
        <h1>cards</h1>
    );
}

export default Card;