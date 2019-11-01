import React from 'react';

function Navbar() {
    return (
            <div className="row">
                <div className="col-md-4">
                    <h3 className="font-weight-bold">Clicky Game</h3>
                </div>
                <div className="col-md-4">
                    <h3>Click an image to begin!</h3>
                </div>
                <div className="col-md-4">
                    <h3>Score: 0 | Top Score: 0</h3>
                </div>
             </div>

    )
}

export default Navbar;