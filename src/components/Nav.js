import React from 'react';


function Nav() {
    return (
        <div className="fixed-top">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="font-name-bold">Clicky Game</h1>
                </div>
                <div className="col-md-4">
                    <h1>Click an image to begin</h1>
                </div>
                <div className="col-md-4">
                    <h1>Score: 0 | Top Score: 0</h1>
                </div>
            </div>
        </div>
    )
}

export default Nav;