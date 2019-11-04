import React from 'react';

function Gamepic(props) {
    return (
        <div className="col-md-3">
            <div className="card shadow p-3 mb-5 bg-white rounded" style={{maxHeight: "225px", maxWidth: "225px"}}>
                <img src={props.img} className="card-img-top" alt={props.name} onClick={props.pokeClick}/>
            </div>
        </div>
    )
}

export default Gamepic;