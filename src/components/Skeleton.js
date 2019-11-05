import React from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Gameboard from './Gameboard';
import pokedex from '../pokedex.json';
import Footer from './Footer';

// Skeleton is the core of this app. It sets out the general structure of the page and holds the core logic of the game. By having that logic hear, necessary information can be pass to and between the children components.
class Skeleton extends React.Component {

    // Here we establish some key variables within the state of this component so that can be updated and passed to different children components
    state = {
        score: 0,
        topScore: 0,
        guessedPokemon: [],
        pokedex: pokedex
    };

    // This is the logic that drives the game. If the pokemon has been clicken in the past, the score resets. Otherwise, the user gains a point and we check to see if there's a new high score.
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

    // This function shuffles the data within the pokedex array so that the pokemon appear in a random order.
    shuffle = () => {
        // Shuffling my pictures with a Fisher-Yates algorithm I learned here: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
        for (let i = pokedex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = pokedex[i]
            pokedex[i] = pokedex[j]
            pokedex[j] = temp
        }
    }

    // Here we set out the general layout of the page and pass needed info to children compents via props.
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