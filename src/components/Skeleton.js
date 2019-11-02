import React from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Gameboard from './Gameboard';


class Skeleton extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        guessedPokemon: []
    };

    pokeClick = event => {
        if (this.state.guessedPokemon.includes(event.target.alt)) {
            this.setState({
                score: 0,
                guessedPokemon: []
            })
        } else {
            this.state.guessedPokemon.push(event.target.alt)
            console.log(this.state.guessedPokemon);
            
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Navbar score={this.state.score} topScore={this.state.topScore}/>
                    <Jumbo />
                    <Gameboard pokeClick={this.pokeClick}/>
                    <div className="row fluid" style={{ backgroundColor: "red" }}>
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
}
export default Skeleton;