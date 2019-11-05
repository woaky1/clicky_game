import React from 'react';

// This component creates the bar at the top of the page.
function Navbar(props) {
    return (
            <div className="row sticky-top d-flex justify-content-center text-center poketext" style={{backgroundColor: "red", fontFamily: "'Luckiest Guy', cursive"}}>
                <div className="col-md-4">
                    <h3 className="font-weight-bold">Pok&#233;Click!</h3>
                </div>
                <div className="col-md-4">
                    <h3>Click an image to begin!</h3>
                </div>
                <div className="col-md-4">
                    {/* The compent gets the current score and high score from Skeleton via props. */}
                    <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
                </div>
             </div>

    )
}

export default Navbar;