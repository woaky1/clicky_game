import React from 'react';

function Gamepic(props) {
    return (
        <div className="col-md-3">
            <div className="card" >
                <img src={props.img} className="card-img-top" alt={props.name} onClick={props.pokeClick}/>
            </div>
        </div>
    )
}

export default Gamepic;