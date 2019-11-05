import React from 'react';

// This component creates the main title area of the page.
function Jumbo() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid text-center" style={{fontFamily: "'Luckiest Guy', cursive", backgroundColor: "black"}}>
                    <div className="container">
                        <h1 className="display-4 text-danger font-weight-bold">Pok&#233;Click!</h1>
                        <p className="lead text-danger font-weight-bold">Click on a Pok&#233;mon to earn points, but don't click on a Pok&#233;mon more than once!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Jumbo;