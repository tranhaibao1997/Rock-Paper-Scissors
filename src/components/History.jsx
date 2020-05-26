import React from 'react'
export default function History(props) {
    return (
        <>
            <li>
                <p>Round: {props.index}</p>
                <p>Player Choice: {props.elm.playerChoice}</p>
                <p>AI Choice: {props.elm.AIChoice}</p>
                <p>Final Result: {props.elm.Result}</p>
            </li>
        </>
    )
}