import React from 'react';

function Navbar(props) {
    return (
            <div className="row sticky-top d-flex justify-content-center text-center poketext" style={{backgroundColor: "red", fontFamily: "'Luckiest Guy', cursive"}}>
                <div className="col-md-4">
                    <h3 className="font-weight-bold">Clicky Game</h3>
                </div>
                <div className="col-md-4">
                    <h3>Click an image to begin!</h3>
                </div>
                <div className="col-md-4">
                    <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
                </div>
             </div>

    )
}

export default Navbar;