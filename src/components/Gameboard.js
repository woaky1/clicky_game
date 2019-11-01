import React from 'react';
import Gamepic from './Gamepic';
import pokedex from '../pokedex.json';

// Shuffling my pictures with a Fisher-Yates algorithm I learned here: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
for(let i = pokedex.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = pokedex[i]
    pokedex[i] = pokedex[j]
    pokedex[j] = temp
  }

function Gameboard() {
    return (
        <div>
            <div className="row">
                    <Gamepic name={pokedex[0].name} img={pokedex[0].img}/>
                    <Gamepic name={pokedex[1].name} img={pokedex[1].img}/>
                    <Gamepic name={pokedex[2].name} img={pokedex[2].img}/>
                    <Gamepic name={pokedex[3].name} img={pokedex[3].img}/>
            </div>
            <div className="row">
                    <Gamepic name={pokedex[4].name} img={pokedex[4].img}/>
                    <Gamepic name={pokedex[5].name} img={pokedex[5].img}/>
                    <Gamepic name={pokedex[6].name} img={pokedex[6].img}/>
                    <Gamepic name={pokedex[7].name} img={pokedex[7].img}/>
            </div>
            <div className="row">
                    <Gamepic name={pokedex[8].name} img={pokedex[8].img}/>
                    <Gamepic name={pokedex[9].name} img={pokedex[9].img}/>
                    <Gamepic name={pokedex[10].name} img={pokedex[10].img}/>
                    <Gamepic name={pokedex[11].name} img={pokedex[11].img}/>
            </div>
        </div>
    )
}
export default Gameboard;