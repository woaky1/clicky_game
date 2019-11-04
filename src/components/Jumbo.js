import React from 'react';

function Jumbo() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid text-center" style={{fontFamily: "'Luckiest Guy', cursive", backgroundColor: "black"}}>
                    <div className="container">
                        <h1 className="display-4 text-danger font-weight-bold">Clicky Game!</h1>
                        <p className="lead text-danger font-weight-bold">Click on an image to earn points, but don't click on any more than once!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Jumbo;