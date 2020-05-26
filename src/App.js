import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from './components/ChoiceCard'
// import ChoiceCardClass from './components/ChoiceCardClass';

function App() {


  const [isReady,setReady]=useState(false)
  const [prompt, setPrompt] = useState("LET'S GET STARTED")
  const [playerState, setPlayerState] = useState("StartImg")
  const [AIState, setAIState] = useState("StartImg")
  const [gameHistory, setGameHistory] = useState([])
  const [user, setUser] = useState(null)

  function getAIChoose() {
    let array = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3);
    return array[randomIndex]
  }
  function getMatchResult(playerState, AIresult) {
    let result = ""
    if (playerState === "rock") {
      result = AIresult === "scissors" ? "Victory" : "Defeat";
    }
    if (playerState === "paper") {
      result = AIresult === "rock" ? "Victory" : "Defeat";
    }
    if (playerState === "scissors") {
      result = AIresult === "paper" ? "Victory" : "Defeat";
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
    // showWinStreak(result)
    setGameHistory([...gameHistory, result])
    console.log(gameHistory.length, "length")

  }
  console.log(gameHistory)
  // console.log(message)

  // function showWinStreak(result) {

  //   if (result == "Victory") {
  //     playerStreak = playerStreak + 1;
  //     AIResult = 0;
  //     console.log(playerStreak, AIStreak, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  //   }
  //   else if (result == "Defeat") {
  //     playerStreak = 0;
  //     AIResult += 1
  //   }

  //   else {
  //     AIResult = 0
  //     PlayerResult = 0
  //   }
  //   if (playerStreak == 2) {
  //     setMess("Player is on winstreak")
  //   }
  //   else if (AIStreak == 2) {
  //     setMess("AI is on winstreak")
  //   }


  // }
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
    if (prompt === "Victory") {
      return "lose"
    }
    else if (prompt === "Defeat") {
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
    if (prompt === "Victory") {
      return "win"
    }
    else if (prompt === "Defeat") {
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

  function playGame()
  {
    console.log("aaaaaa")
    setReady(true)
  }
   const choices = {
    rock:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
    paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
    question: "https://media.giphy.com/media/jTZVegIrdLCCY/giphy.gif"
  };
  return (

    


    <div className="App">


      {
        user == null ? <div className="form__group">
        <input type="text"  onChange={(e) => getInputChange(e)} onKeyDown={(e) => keyPress(e)} className="form__input" id="name" placeholder="Player name" required="" />
        <label for="name" class="form__label">Player Name</label>
      </div> : <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title={user} winner={PlayerResult()} imgUrl={ImgPlayerChoose()}></ChoiceCard>
            <h1 className={prompt}>{prompt}</h1>
            {
              isReady ?<ul className="btn-section"> 
              <li>
                <a href="#" onClick={()=>Shoot("rock")}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-facebook">ROCK</span>
                </a> 
              </li>
              <li>
                <a href="#"  onClick={()=>Shoot("paper")}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-twitter">PAPER</span>
                </a> 
              </li>
              <li>
                <a href="#"  onClick={()=>Shoot("scissors")}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-instagram">SCISSORS</span>
                </a> 
              </li>
            
            </ul>   :<div id="btn" onClick={playGame}><span className="noselect">Start Game</span><div id="circle"></div></div>
            }
          
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

      }
     
    </div>



  );
}

export default App;
