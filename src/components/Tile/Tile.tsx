import './Tile.css'

interface Props {
    imagePath: string;
    index: number
}
export default function Tile({imagePath, index}: Props) {
    var tileClassName = "tile white-tile";
    if (index % 2 === 0) {
        tileClassName = "tile black-tile"
    }
    // const tile_id = horizontalAxis[i] + verticalAxis[j]
    // var tileTextToDisplay = debugMode ? tile_id : ""
    // return <div className={tileClassName}>{tileTextToDisplay}</div>
    return <div className={tileClassName}>
        <img src={imagePath}></img>
    </div>;

}