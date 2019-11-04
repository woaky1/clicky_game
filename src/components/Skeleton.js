import React from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Gameboard from './Gameboard';
import pokedex from '../pokedex.json';
import Footer from './Footer';


class Skeleton extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        guessedPokemon: [],
        pokedex: pokedex
    };

    pokeClick = event => {
        if (this.state.guessedPokemon.includes(event.target.alt)) {
            this.setState({
                score: 0,
                guessedPokemon: []
            });
        } else {
            this.state.guessedPokemon.push(event.target.alt);
            let newScore = this.state.score + 1;
            if (newScore > this.state.topScore) {
                this.setState({
                    score: newScore,
                    topScore: newScore
                })
            } else {
                this.setState({ score: newScore })
            };
        };
    }

    shuffle = () => {
        // Shuffling my pictures with a Fisher-Yates algorithm I learned here: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
        for (let i = pokedex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = pokedex[i]
            pokedex[i] = pokedex[j]
            pokedex[j] = temp
        }
    }

    render() {
        this.shuffle();
        return (
            <div>
                <div className="container-fluid">
                    <Navbar score={this.state.score} topScore={this.state.topScore} />
                    <Jumbo />
                    <Gameboard pokeClick={this.pokeClick} pokedex={this.state.pokedex}/>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Skeleton;