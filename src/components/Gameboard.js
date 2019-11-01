import React from 'react';
import Gamepic from './Gamepic';

function Gameboard() {
    return (
        <div className="row">
            <div className="col-md-3">
                <Gamepic />
            </div>
            <div className="col-md-3">
                <Gamepic />
            </div>
            <div className="col-md-3">
                <Gamepic />
            </div>
            <div className="col-md-3">
                <Gamepic />
            </div>
        </div>
    )
}
export default Gameboard;