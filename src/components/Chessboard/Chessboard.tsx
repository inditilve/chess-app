import React from "react";
import Tile from "../Tile/Tile";

import './Chessboard.css';

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]

interface Piece {
    image: string
    x: number
    y: number
}

const pieces: Piece[] = []

for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/pawn_b.png", x: i, y: 6})

}
for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/pawn_w.png", x: i, y: 1})

}export default function Chessboard() {
    let debugMode = true;
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const index = i + j + 2;
            // const tile_id = horizontalAxis[i] + verticalAxis[j];
            // var tileTextToDisplay = debugMode ? tile_id : "";
            let image = "";
            pieces.forEach( p => {
                if(p.x === i && p.y === j) {
                    image = p.image;
                }
            })
            board.push(<Tile imagePath={image} index={index} />);
        }
    }
    return <div id="chessboard">{board}</div>;
}