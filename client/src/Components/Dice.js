import React from "react"

export default function Dice(props){
    let diceValueChar = ""
    if (props.value === 1) {
        diceValueChar = "one"
    } else if (props.value === 2) {
        diceValueChar = "two"
    } else if (props.value === 3) {
        diceValueChar = "three"
    } else if (props.value === 4) {
        diceValueChar = "four"
    } else if (props.value === 5) {
        diceValueChar = "five"
    } else {
        diceValueChar = "six"
    }

    return(
        <div 
            className="dice" 
            style={{backgroundColor: props.isFinished ? "#59E391" : "#fff"}} 
            onClick={()=>props.handleClick(props.id, props.value)}
            >
            {/* <p>{props.value}</p> */}
            <i class="fa-solid fa-dice-{diceValueChar}"></i>
        </div>
    )
}