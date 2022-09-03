import React from "react";

import './Chessboard.css';

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]

export default function Chessboard() {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const index = i + j + 2;
            var tileClassName = "tile white-tile"
            if (index % 2 === 0) {
                tileClassName = "tile black-tile"
            }
            const tile_id = horizontalAxis[i] + verticalAxis[j]
            var tileTextToDisplay = ""

            if (horizontalAxis[i] == "a") {
                tileTextToDisplay = verticalAxis[j]
            }
            
            board.push(<div className={tileClassName}>{tileTextToDisplay}</div>)
        }
    }
    return <div id="chessboard">{board}</div>;
}