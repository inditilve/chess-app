import React, { NewLifecycle } from "react";
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

for (let p = 0; p < 2; p++){
    const color = (p === 0) ? "b" : "w"
    const y = (p === 0) ? 7 : 0
    
    pieces.push({image: `assets/images/rook_${color}.png`, x:0, y})
    pieces.push({image: `assets/images/rook_${color}.png`, x:7, y})
    pieces.push({image: `assets/images/knight_${color}.png`, x:1, y})
    pieces.push({image: `assets/images/knight_${color}.png`, x:6, y})
    pieces.push({image: `assets/images/bishop_${color}.png`, x:2, y})
    pieces.push({image: `assets/images/bishop_${color}.png`, x:5, y})
    pieces.push({image: `assets/images/queen_${color}.png`, x:3, y})
    pieces.push({image: `assets/images/king_${color}.png`, x:4, y})
}


for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/pawn_b.png", x: i, y: 6})

}
for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/pawn_w.png", x: i, y: 1})

}

let activePiece: HTMLElement | null = null;

function grabPiece(e: React.MouseEvent<HTMLDivElement>): void {
    const element = e.target as HTMLElement;
    if(element.classList.contains("chess-piece")){
        console.log(e);
        const x = e.clientX - 40;
        const y = e.clientY - 40;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        activePiece = element;
    }
}

function movePiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if(activePiece){
        const x = e.clientX - 40;
        const y = e.clientY - 40;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`;
        activePiece.style.top = `${y}px`;
    }
}

function dropPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if(activePiece){
        activePiece = null;
    }
}
export default function Chessboard() {
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
            board.push(<Tile key={`${j}, ${i}`} imagePath={image} index={index} />);
        }
    }
    return <div 
                onMouseMove={(e) => movePiece(e)} 
                onMouseDown={e => grabPiece(e)} 
                onMouseUp={(e) => dropPiece(e)}
                id="chessboard">{board}</div>;
}



