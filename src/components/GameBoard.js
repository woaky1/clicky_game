import React from 'react';
import GamePic from "./GamePic";

function GameBoard () {
    return(
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <row>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                </row>
                <row>
                <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                </row>
                <row>
                <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                    <div className="col-md-3">
                        <GamePic />
                    </div>
                </row>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default GameBoard;