import React, { useEffect } from "react";
import { useState } from "react";


function Tile(props) {
    const colors = { "black": "#000000", "white": "#FFFFFF", "active": "#eded18", "highlight": "#0ff50f", "lastMove": "#1cd9d5" }

    const [piece, setPiece] = useState(props.piece)
    const [color, setColor] = useState(props.active || props.highlight || props.lastMove || props.color)

    useEffect(() => {
        setPiece(props.piece)
        setColor(props.active || props.lastMove || props.color)
    }, [props.piece, props.active, props.highlight, props.lastMove])

    return (
        <div style={{
            width: '6.25rem',
            height: '6.25rem',
            backgroundColor: colors[color],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '0.0625em solid black'
        }}
            square={props.square.toString()}>
            {piece && <img src={`images/${piece}.png`} style={{ width: '50%', height: '50%', pointerEvents: 'none', marginRight: "4px" }} />}
            {props.highlight && <div style={{ backgroundColor: `lightgreen`, width: "3rem", height: "3rem", borderRadius: "50%", marginRight: "4px", marginBottom: "4px", pointerEvents: 'none' }}>
                
                </div>}
        </div>
    )
}

export default Tile