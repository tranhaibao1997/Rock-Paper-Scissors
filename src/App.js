import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from './components/ChoiceCard'
// import ChoiceCardClass from './components/ChoiceCardClass';
import History from './components/History'
let playerStreak = 0;
function App() {


  let AIStreak = 0;
  const [prompt, setPrompt] = useState("LET'S GET STARTED")
  const [playerState, setPlayerState] = useState("StartImg")
  const [AIState, setAIState] = useState("StartImg")
  const [gameHistory, setGameHistory] = useState([])
  const [message, setMess] = useState("Không có gì")
  const [user, setUser] = useState(null)

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
    showWinStreak(result)
    setGameHistory([...gameHistory, result])
    console.log(gameHistory.length, "length")

  }
  console.log(gameHistory)
  console.log(message)

  function showWinStreak(result) {

    if (result == "Victory!") {
      playerStreak = playerStreak + 1;
      AIResult = 0;
      console.log(playerStreak, AIStreak, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    }
    else if (result == "Defeat!") {
      playerStreak = 0;
      AIResult += 1
    }

    else {
      AIResult = 0
      PlayerResult = 0
    }
    if (playerStreak == 2) {
      setMess("Player is on winstreak")
    }
    else if (AIStreak == 2) {
      setMess("AI is on winstreak")
    }


  }
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

  let name = ""
  function getInputChange(e) {

    name = e.target.value


  }
  function keyPress(e) {
    if (e.keyCode == 13) {
      setUser(name)
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

            {
              user == null ? <div><input onChange={(e) => getInputChange(e)} onKeyDown={(e) => keyPress(e)} type="text" placeholder="input player name" ></input>

              </div> : <h1>{user}</h1>
            }

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
                  return <li>
                    <p>{elm}</p>
                  </li>
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
