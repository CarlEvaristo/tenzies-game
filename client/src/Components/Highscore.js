import React from "react"

export default function Highscore(props){
    let highScoreElements
    if ( props.highScore.length !== undefined) {
        highScoreElements = (props.highScore).map((score,index) => {
             return <li key={index}>{score.name} {score.score}</li>
        })
    } else {
        highScoreElements = "No Scores Yet"
    }


    return(
        <>
            <p>High Score Top 10:</p>
            <ol className="highScore">
                {highScoreElements}
            </ol>
        </>

    )
}