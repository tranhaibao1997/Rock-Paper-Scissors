import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from './components/ChoiceCard'
import ChoiceCardClass from './components/ChoiceCardClass';

function App() {

  useEffect(()=>{
   return 
  },[])
 const [prompt,setPrompt]=useState("1,2,3 GO") 
const [playerState,setPlayerState]=useState("StartImg")

const [AIState,setAIState]=useState("StartImg")

function Shoot(shootName){
let playerState=shootName
let array=["rock","paper","scissors"]
let randomIndex=Math.floor(Math.random() * 3);
let AIresult=array[randomIndex]
let result=""
console.log(playerState,AIresult)
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

setPrompt(result)
PlayerResult(result)
AIResult(result)
setAIState(AIresult)
setPlayerState(playerState)

}
function ImgPlayerChoose()
{
  if(playerState==="rock")
  {
    return choices.rock
  }
  if(playerState==="paper")
  {
    return choices.paper
  }
  else
  {
    return choices.scissors
  }
}
function ImgAIChoose()
{
  if(AIState==="rock")
  {
    return choices.rock
  }
  if(AIState==="paper")
  {
    return choices.paper
  }
  else
  {
    return choices.scissors
  }
}
function AIResult()
{
if(prompt==="Victory!")
{
  return false
}
else if(prompt==="Defeat!")
{
  return true
}
else
{
  return 
}
}
function PlayerResult(result)
{
  if(prompt==="Victory!")
  {
    return true
  }
  else if(prompt==="Defeat!")
  {
    return false
  }
  else
  {
    return 
  }
}

console.log(playerState,"player",AIState,"AI")



  const choices = {
    rock:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
    paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
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
   <div>
     <button onClick={()=>Shoot("rock")}>Rock</button>
     <button onClick={()=>Shoot("paper")}>Paper</button>
     <button onClick={()=>Shoot("scissors")}>Scissors</button>
   </div>
   <ChoiceCard title="Computer" winner={AIResult()} imgUrl={ImgAIChoose()}></ChoiceCard>
      </div>
    </div>
  </div>
</div>
    

   
  );
}

export default App;
