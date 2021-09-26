import React, { useEffect, useState } from 'react';
import Series from '../Series/Series';
import './Serieses.css'

const Serieses = () => {
    const [serieses, setSerieses] = useState([]);
    useEffect(() => {
        fetch('./series.JSON')
            .then(res => res.json())
            .then(data => setSerieses(data))
    }, [])
    return (
        <div className="details-container">
            <div className="series-container">

                {
                    serieses.map(series => <Series
                        key={series.creator}
                        series={series}></Series>)
                }

            </div>
            <div className="review-container">
                <h2>Series Summery</h2>
                <h3>Ordered CD: </h3>
            </div>
        </div>
    );
};

export default Serieses;