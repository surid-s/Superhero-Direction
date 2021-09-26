import React from 'react';
import './Series.css';

const Series = (props) => {
    // console.log(props)
    const { name, budget, creator, genre, img, rating } = props.series;
    return (
        <div className="single-series-container">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>By: {creator}</h4>
            <h4>Genre: {genre}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Budget: {budget}</h4>
            <button onClick={() => props.addToSummery(props.series)} className="fav-btn">Add to Favourite</button>
        </div>
    );
};

export default Series;