import React from 'react';
import Gamepic from './Gamepic';
import pokedex from '../pokedex.json';

function Gameboard() {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Gamepic name={pokedex[0].name} img={pokedex[0].img} />
                </div>
                <div className="col-md-3">
                    <Gamepic name={pokedex[1].name} img={pokedex[1].img}/>
                </div>
                <div className="col-md-3">
                    <Gamepic name={pokedex[2].name} img={pokedex[2].img}/>
                </div>
                <div className="col-md-3">
                    <Gamepic name={pokedex[3].name} img={pokedex[3].img}/>
                </div>
            </div>
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
        </div>
    )
}
export default Gameboard;