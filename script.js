/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randNum = getRandomIntInclusive(1, 20)
let messageObj = document.querySelector(".message")
let highScoreObj = document.querySelector(".highscore")
let score = document.querySelector(".score")
let guessObj = document.querySelector(".guess")
let numObj = document.querySelector(".number")
guessObj.value = '0'
highScore = 0
curScore = 20


function restart(){
  document.body.style.backgroundColor = '#222'
  randNum = getRandomIntInclusive(1, 20)
  curScore = 20
  score.textContent = curScore
  numObj.textContent = '?';
  messageObj.textContent = "Start guessing!"
  guessObj.value = '0'
}

function limit(){
  if (guessObj.value > 20){
    guessObj.value = '20'
  }
  if (guessObj.value < 0){
    guessObj.value = '0'
  }
}



function check(){
  if (score.textContent == 0){
    document.body.style.backgroundColor = '#8b0000'
    messageObj.textContent = "Game Over"
    
  }else{

  
  
    let guess = Number(document.querySelector(".guess").value)
    if (guess == randNum){
      
      messageObj.textContent = "You win!"
      if (curScore > -1){
        score.textContent = curScore
      }

      if (curScore > highScore){
        highScore = curScore
        highScoreObj.textContent = highScore
      }

      document.body.style.backgroundColor = 'green'
      numObj.textContent = randNum;
    }else if (guess < randNum){
      messageObj.textContent = "Too low"
      curScore -=1
      if (curScore > -1){
        score.textContent = curScore
      }
    }else if (guess >= randNum){
      messageObj.textContent = "Too high"
      curScore -=1
      if (curScore > -1){
        score.textContent = curScore
      }
      
    }
  }
}



//document.querySelector()