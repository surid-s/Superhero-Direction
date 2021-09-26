import React, { useEffect, useState } from 'react';
import Series from '../Series/Series';
import Summery from '../Summery/Summery';
import './Serieses.css'

const Serieses = () => {
    const [serieses, setSerieses] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./series.JSON')
            .then(res => res.json())
            .then(data => setSerieses(data))
    }, [])
    const addToSummery = (series) => {
        const newCart = [...cart, series];
        setCart(newCart)
    }

    return (
        <div className="details-container">
            <div className="series-container">

                {
                    serieses.map(series => <Series
                        key={series.creator}
                        series={series}
                        addToSummery={addToSummery}
                    ></Series>)
                }

            </div>
            <div className="review-container">
                <Summery cart={cart}></Summery>
            </div>
        </div>
    );
};

export default Serieses;