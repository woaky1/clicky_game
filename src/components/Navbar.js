import React from 'react';

function Navbar(props) {
    return (
            <div className="row fixed-top d-flex justify-content-center text-center" style={{backgroundColor: "red", fontFamily: "'Luckiest Guy', cursive"}}>
                <div className="col-md-4">
                    <h4 className="font-weight-bold">Clicky Game</h4>
                </div>
                <div className="col-md-4">
                    <h4>Click an image to begin!</h4>
                </div>
                <div className="col-md-4">
                    <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
                </div>
             </div>

    )
}

export default Navbar;