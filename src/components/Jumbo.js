import React from 'react';

function Jumbo() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Clicky Game!</h1>
                        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbo;