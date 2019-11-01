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



        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Features</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default Navbar;