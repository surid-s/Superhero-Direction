import React from 'react';
import Selected from '../Selected/Selected';
import './Summery.css';

const Summery = (props) => {
    // console.log(props)
    const { cart } = props;
    let total = 0;
    for (const budget of cart) {
        total = total + budget.budget;
    }
    return (
        <div>
            <h2>Series Summery</h2>
            <h3>Favourite Items: {props.cart.length}  </h3>
            <h2>Total: {total}</h2>
            <h4>Added Series: </h4>
            {
                cart.map(nameImg => <Selected nameImg={nameImg}></Selected>)
            }
        </div>
    );
};

export default Summery;