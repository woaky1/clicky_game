import React from 'react';
import Gamepic from './Gamepic';
// import pokedex from '../pokedex.json';

// Shuffling my pictures with a Fisher-Yates algorithm I learned here: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
// for(let i = pokedex.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i)
//     const temp = pokedex[i]
//     pokedex[i] = pokedex[j]
//     pokedex[j] = temp
//   }

function Gameboard(props) {
    return (
        <div>
            <div className="row">
                    <Gamepic name={props.pokedex[0].name} img={props.pokedex[0].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[1].name} img={props.pokedex[1].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[2].name} img={props.pokedex[2].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[3].name} img={props.pokedex[3].img} pokeClick={props.pokeClick}/>
            </div>
            <div className="row">
                    <Gamepic name={props.pokedex[4].name} img={props.pokedex[4].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[5].name} img={props.pokedex[5].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[6].name} img={props.pokedex[6].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[7].name} img={props.pokedex[7].img} pokeClick={props.pokeClick}/>
            </div>
            <div className="row">
                    <Gamepic name={props.pokedex[8].name} img={props.pokedex[8].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[9].name} img={props.pokedex[9].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[10].name} img={props.pokedex[10].img} pokeClick={props.pokeClick}/>
                    <Gamepic name={props.pokedex[11].name} img={props.pokedex[11].img} pokeClick={props.pokeClick}/>
            </div>
        </div>
    )
}
export default Gameboard;