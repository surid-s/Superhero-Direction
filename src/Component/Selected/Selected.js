import React from 'react';
import './Selected.css'


const Selected = (props) => {
    // console.log(props.nameImg)
    const { name, img } = props.nameImg;
    return (
        <>
            {/* /* selected series showing */}
            <div className="selected-series">
                <img src={img} alt="" />
                <h6>{name}</h6>
            </div>
        </>
    );
};

export default Selected;