import React from 'react';

function Gamepic (props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt={props.name} />
        </div>
    )
}

export default Gamepic;