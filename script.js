//  <!-- Blank Main Screen with welcome button -->
      // -	clickable button  “ Welcome to FrontEnd-Stack Basics (FES-B) – Are you ready to Ride”  
       // - Dynamically Create a constant called welcomeButton that enables player to click to Enter Game. Then hide button .
    //  use ES6 Backticks i.e Create a constant and add a pair of back-ticks. Write your HTML code exactly as you do inside the HTML page.Assign it to the innerHTML property of the document.body..ie.
      // const welcomeScreen ` <div class="welcomeScreen">
                  // <button class="welcomeButton" > Welcome to FrontEnd-Stack Basics (FES-B), Are You Ready to Ride? <br> <img class="pointingFinger" src="https://media.tenor.com/xCuN8F7U2TEAAAAC/pointing-finger.gif" alt=""> RIDE ON!! </button>
                  // </div>  `
                  // welcomeScreen.document.body.innerHTML

 // These are the variables for my screens (i.e any div given the class, hidden,  needs to be made a variable and accessed via an event listenner)
    let welcomeScreen = document.querySelector(".welcomeScreen")
    let gameRuleScreen = document.querySelector(".gameRules")
    let gameBoardContainerScreen = document.querySelector(".gameBoardContainer")
    console.log(gameRuleScreen,gameBoardContainerScreen)
    let startGameButton = document.querySelector(`.startGameButton`)
    let gameScreen =document.querySelector(`.gameScreen`)
    let winLoseState =document.querySelector(`.winLoseState`)

// Button Variables
  const welcomeButton = document.querySelector(".welcomeButton")
  const startQuizButton = document.querySelector(`.startQuizButton`)
  const quitQuizButton = document.querySelector(`.quitQuizButton`)
  const round1resultButton = document.querySelector(`.round1resultButton`)

  
  console.log(welcomeButton,startQuizButton,quitQuizButton)

  // To show the next screens, use an event listener method
    welcomeButton.addEventListener(`click`, () => {
        // Hide Welcome Screen
        welcomeScreen.classList.add(`hidden`)
        // Show Game Rules,gameBoardContainer Screens and startGameButton
      gameRuleScreen.classList.remove(`hidden`)
      gameBoardContainerScreen.classList.remove(`hidden`)
      startGameButton.classList.remove(`hidden`)
    })
      //Event Listenner for startQuizButton
    startQuizButton.addEventListener(`click`, () => {
       //Hide startGameButton
    startGameButton.classList.add(`hidden`)
       // show gameScreen
    gameScreen.classList.remove(`hidden`)
    })

     // Event listenner for quitQuizButton
     quitQuizButton.addEventListener(`click`, () => {
         // Hide  startGameButton, gameRuleScreen and gameBoardContainerScreen (must be hidden in other to go back to the Welcome screen)
     startGameButton.classList.add(`hidden`)
     gameRuleScreen.classList.add(`hidden`)
     gameBoardContainerScreen.classList.add(`hidden`)
         // Show welcomeScreen  ( This takes you back to the Welcome screen!)
     welcomeScreen.classList.remove(`hidden`)     
     } )

     //1st Event listenner for round1resultButton
    round1resultButton.addEventListener(`click`, () => {
        // Show winLoseState text
      winLoseState.classList.remove(`hidden`)
    }) 
    // 2nd Event listenner for round1resultButton  
    // round1resultButton.addEventListener(`click`, () => {
    //    // Hide winLoseState text
    //   winLoseState.classList.add(`hidden`)
    // })
// console.log(gameBoardContainerScreen.classList.value)

// - Write a function called enterName that enables the player(s) type in their name(s).Then hide prompt . ( This has been done in html using input tags under; <div class="startGameButton hidden"> )

// -  Write a funtion called seconds that sets a count down timer from 15 seconds to 0 seconds. Use Math.floor() or Date.now()

         // set date we are counting down to
        //    const countDownDate = new Date ().getTime();
        // Update the count down every 1 second
        //   const x = setInterval(function(){

        //   })
        //Time calculation for seconds
        // const seconds = Math.floor( (distance % (1000 * 60)) / 1000);
        //Display result in the element with id="Time Left"
        // document.getElementById("Time left").innerHTML = seconds + "s"
        //When count down is finished, write some text
        // if (distance < 0 ){
        //     clearInterval(x);
        //     document.getElementById("Time left").innerHTML = "Time Up";
        // }

        // let milliSeconds = Date.now()
        // document.getElementById(`timer`).innerHTML = milliSeconds

// -	Write a function called nextQuestion that enables player to click and proceed to next question
// -	Write a function called selectAnwser that allows player to click on answer of choice.Next question auto pops up when Ride On button is clicked
                // use  <input type="checkbox" name="" id=""> to get box to click in
// -   Write a gobal fxn called points that allocates points to current player.
// -	Create an array of  5 – 10 questions with multiple choice answers and  Boolean. ( Randomize the array)
// -	Write a function called resetGame  that enables player to restart the game to round One when both rounds are completed with a draw (i.e. players can keep playing until one player wins. - Requirement 4)
// -    Write a function winOrLose that allows questionBox to be replaced with result of winner, ELSE Game over ( i.e. both players loss - requirement 5)   
// - Write a fxn called winner that allows the questionBox to be replaced with text "WINNER" plus background image applause, if a player has more points at the end of round two.

// Creating an array to pass the questions, correct answer and answer options
let questions = [
  {
      Q1: " A git command and function is?",
      CorrectAnswer: "Git Pull:  Fetch and download content from a remote repository",
      ansOptions: [
          " 1)	Git Open: Initialize a local Git repository",
          " 2)	Git Pull: Fetch and download content from a remote repository",
          " 3)	Git Upload:  Upload content from the local repository to a remote repository "
      ]
  },
  {
      Q2: " CSS  stands for ?",
      CorrectAnswer: "Cascading Style Sheet ",
      ansOptions: [
          " 1) Colorful Style Sheet ",
          " 2) Cascading Style Sheet",
          " 3) Computer style Sheet"
      ]
  },
  {
      Q3: " Which is not a valid data type in Javascript?",
      CorrectAnswer: "float",
      ansOptions: [
          " 1) Undefined ",
          " 2) Boolean",
          " 3) float"
      ]
  },
  {
      Q4: " what tag is used to write the Javascript code?",
      CorrectAnswer: "<script>",
      ansOptions: [
          " 1)<sp> ",
          " 2) <script>",
          " 3) <javascript>"
      ]
  },
  {
      Q5: "Which function removes the last element from an array object and returns that element?",
      CorrectAnswer: pop(),
      ansOptions: [
          " 1)pop() ",
          " 2) Push() ",
          " 3) Delete() "
      ]
  },
  {
      Q6: " HTML stands for?",
      CorrectAnswer: "Hypertext Markup Language",
      ansOptions: [
          " 1) Hypermark language ",
          " 2) Hypertext Markup language ",
          " 3) c)	Hypertension language"
      ]
  },
];

// To display question and answers from the array, write a function called showQuestions


 

//// ********************************* Funtions to check out later  **********************************************/////
//  - Write a function called startGameButton that makes the start quiz button clickable  
// let enterNameP1 
// let enterNameP2 
//    const startGameButton = () => {
//         enterNameP1 = window.prompt(`Welcome Player1 to FES-B ! : Enter Name to Start Game`);
        
//         enterNameP2 = window.prompt(`Welcome Player2 to FES-B ! : Enter Name to Start Game`);      
//    }
//    startGameButton()                                                 