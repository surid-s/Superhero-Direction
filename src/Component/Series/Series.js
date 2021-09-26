import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Series.css';

const Series = (props) => {
    // console.log(props)
    const { name, budget, creator, genre, img, rating } = props.series;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="single-series-container">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>By: {creator}</h4>
            <h4>Genre: {genre}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Budget: {budget}</h4>
            <button onClick={() => props.addToSummery(props.series)} className="fav-btn">{element} <span className="fav-btn-txt">Add to Favourite</span> </button>
        </div>
    );
};

export default Series;