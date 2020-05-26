import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from './components/ChoiceCard'
// import ChoiceCardClass from './components/ChoiceCardClass';
import History from './components/History'

function App() {


  const [prompt, setPrompt] = useState("LET'S GET STARTED")
  const [playerState, setPlayerState] = useState("StartImg")
  const [AIState, setAIState] = useState("StartImg")
  const [gameHistory, setGameHistory] = useState([])
  const [message, setMess] = useState("")

  function getAIChoose() {
    let array = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3);
    return array[randomIndex]
  }
  function getMatchResult(playerState, AIresult) {
    let result = ""
    if (playerState === "rock") {
      result = AIresult === "scissors" ? "Victory!" : "Defeat!";
    }
    if (playerState === "paper") {
      result = AIresult === "rock" ? "Victory!" : "Defeat!";
    }
    if (playerState === "scissors") {
      result = AIresult === "paper" ? "Victory!" : "Defeat!";
    }

    if (playerState === AIresult) result = "Tie game!";
    return result
  }

  function Shoot(shootName) {
    let playerState = shootName
    let AIchoose = getAIChoose()
    let result = getMatchResult(playerState, AIchoose)
    setPrompt(result)
    PlayerResult(result)
    AIResult(result)
    setAIState(AIchoose)
    setPlayerState(playerState)
    let matchInfo = {
      "playerChoice": playerState,
      "AIChoice": AIchoose,
      "Result": result
    }
    setGameHistory([...gameHistory, matchInfo])

  }
  console.log(gameHistory)


  function ImgPlayerChoose() {
    if (playerState === "rock") {
      return choices.rock
    }
    if (playerState === "paper") {
      return choices.paper
    }
    if (playerState === "scissors") {
      return choices.scissors
    }
    else {
      return choices.question
    }
  }
  function ImgAIChoose() {
    if (AIState === "rock") {
      return choices.rock
    }
    if (AIState === "paper") {
      return choices.paper
    }
    if (AIState === "scissors") {
      return choices.scissors
    }
    else {
      return choices.question
    }
  }
  function AIResult() {
    if (prompt === "Victory!") {
      return "lose"
    }
    else if (prompt === "Defeat!") {
      return "win"
    }
    else if (prompt === "Tie game!") {
      return "tie"
    }
    else {
      return "notStarted"
    }
  }
  function PlayerResult() {
    if (prompt === "Victory!") {
      return "win"
    }
    else if (prompt === "Defeat!") {
      return "lose"
    }
    else if (prompt === "Tie game!") {
      return "tie"
    }
    else {
      return "notStarted"
    }
  }





  const choices = {
    rock:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
    paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
    question: "https://pngimg.com/uploads/question_mark/question_mark_PNG134.png"
  };
  return (

    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            {/* 
    <ChoiceCardClass title="you" winner={false} imgUrl={choices.rock}></ChoiceCardClass>
    <ChoiceCardClass  title="Computer" winner={true} imgUrl={choices.paper}></ChoiceCardClass> */}

            <ChoiceCard title="you" winner={PlayerResult()} imgUrl={ImgPlayerChoose()}></ChoiceCard>
            <h1>{prompt}</h1>
            <h1>{message}</h1>
            <div className="container">
              <button
                className="btn btn-success btn-lg"
                onClick={() => Shoot("rock")}>
                Rock</button>
              <button
                className="btn btn-success btn-lg"
                onClick={() => Shoot("paper")}
              >
                Paper
  </button>
              <button
                className="btn btn-success btn-lg"
                onClick={() => Shoot("scissors")}
              >
                Scissors
  </button>
            </div>
            <ChoiceCard title="Computer" winner={AIResult()} imgUrl={ImgAIChoose()}></ChoiceCard>



          </div>
          <div className="col-md-4 themed-grid-col">
            <ul>
              {

                gameHistory.map((elm, index) => {
                  return <History elm={elm} index={index}></History>
                })

              }
            </ul>
          </div>
        </div>
      </div>
    </div>



  );
}

export default App;
