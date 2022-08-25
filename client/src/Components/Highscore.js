import React from "react"

export default function Highscore(props){
    let highScoreElements
    if ( props.highScore.length !== undefined) {
        highScoreElements = (props.highScore).map((score,index) => {
             return <li key={index}>{score.name} {score.score}</li>
        })
    } else {
        highScoreElements = "test"
    }


    return(
        <>
            <p>High Score:</p>
            <ol className="highScore">
                {highScoreElements}
            </ol>
        </>

    )
}