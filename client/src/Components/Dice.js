import React from "react"

export default function Dice(props){
    let diceValueChar = ""
    if (props.value === 1) {
        diceValueChar = "fa-solid fa-dice-one"
    } else if (props.value === 2) {
        diceValueChar = "fa-solid fa-dice-two"
    } else if (props.value === 3) {
        diceValueChar = "fa-solid fa-dice-three"
    } else if (props.value === 4) {
        diceValueChar = "fa-solid fa-dice-four"
    } else if (props.value === 5) {
        diceValueChar = "fa-solid fa-dice-five"
    } else {
        diceValueChar = "fa-solid fa-dice-six"
    }

    return(
        <div 
            className={["dice", "diceAnimation"].join(' ')}
            style={{backgroundColor: props.isFinished ? "#59E391" : "#fff"}} 
            onClick={()=>props.handleClick(props.id, props.value)}
            key={!props.isFinished ? new Date().getTime() : false}  // if prop is not finished then give it a unique key (time) => to make sure it will get re-rendered => else false makes sure react doesnt render the key attr
            >
            {/* <p>{props.value}</p> */}
            <i class={diceValueChar}></i>
        </div>
    )
}