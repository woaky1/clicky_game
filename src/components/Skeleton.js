import React from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Gameboard from './Gameboard';

function Skeleton() {
    return (
        <div>
            <div className="container-fluid">
                <Navbar />
                <Jumbo />
                <Gameboard />
                <div className="row fluid" style={{backgroundColor: "red"}}>
                    <div className="col-md-12">
                        <br />
                        <br />
                        <p>Clicky Game</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skeleton;