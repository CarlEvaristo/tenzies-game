import React from "react"

export default function Dice(props){
    return(
        <div 
            className={ props.isFinished ? "dice" : ["dice", "diceAnimation"].join(' ') }  
            style={{backgroundColor: props.isFinished ? "#59E391" : "#fff"}} 
            onClick={()=>props.handleClick(props.id, props.value)}
            >
                <p>{props.value}</p>
        </div>
    )
}