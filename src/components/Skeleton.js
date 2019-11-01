import React from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Gameboard from './Gameboard';

function Skeleton() {
    return (
        <div>
            <div className="container">
                <Navbar />
                <Jumbo />
                <Gameboard />
            </div>
        </div>

    )
}

export default Skeleton;