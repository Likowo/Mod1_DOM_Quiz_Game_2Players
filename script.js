//  <!-- Blank Main Screen with welcome button -->
      // -	clickable button  “ Welcome to FrontEnd-Stack Basics (FES-B) – Are you ready to Ride”  
       // - Dynamically Create a constant called welcomeButton that enables player to click to Enter Game. Then hide button .
    //  use ES6 Backticks i.e Create a constant and add a pair of back-ticks. Write your HTML code exactly as you do inside the HTML page.Assign it to the innerHTML property of the document.body..ie.
      // const welcomeScreen ` <div class="welcomeScreen">
                  // <button class="welcomeButton" > Welcome to FrontEnd-Stack Basics (FES-B), Are You Ready to Ride? <br> <img class="pointingFinger" src="https://media.tenor.com/xCuN8F7U2TEAAAAC/pointing-finger.gif" alt=""> RIDE ON!! </button>
                  // </div>  `
                  // welcomeScreen.document.body.innerHTML

 // These are the variables for my screens (i.e any div given the class, hidden,  needs to be made a variable and accessed via an event listenner) ( i.e. I will need to update the inner HTML of my elements(tags) e.g divs, id,img, etc using the document.querySelector method or  document.getElementById)
    let welcomeScreen = document.querySelector(".welcomeScreen");
    let gameRuleScreen = document.querySelector(".gameRules");
    let gameBoardContainerScreen = document.querySelector(".gameBoardContainer");
    // console.log(gameRuleScreen,gameBoardContainerScreen);
    let startGameButton = document.querySelector(`.startGameButton`);
    let gameScreen =document.querySelector(`.gameScreen`);
    let winLoseState =document.querySelector(`.winLoseState`);
    let quizScreen = document.querySelector(`.quizScreen`);
    let counter = document.getElementById(`counter`);
    let gameOver = document.querySelector(`.gameOver `);
    let questionBox = document.querySelector(`.questionBox`);
    let questionDisplay = document.querySelector(`.questionDisplay`);
    let answerOptions = document.querySelector(`.answerOptions`);
    let answer1 = document.getElementById(`1`);
    let answer2 = document.getElementById(`2`);
    let answer3 = document.getElementById(`3`);
    let player1Points = document.querySelector(`.player1Points`);
    let player2Points = document.querySelector(`.player2Points`);


// Button Variables
let welcomeButton = document.querySelector(`.welcomeButton`);
let startQuizButton = document.querySelector(`.startQuizButton`);
let quitQuizButton1 = document.querySelector(`.quitQuizButton1`);
let round1resultButton = document.querySelector(`.round1resultButton`);
let quitQuizButton2 = document.querySelector(`.quitQuizButton2`);
let nextQuestionButton = document.querySelector(`.nextQuestionButton`);

// Creating an array to pass the questions,answer options and correct answer  
let questions = [
    {
        question: " A git command and function is?", 
        answer1: "Git Open: Initialize a local Git repository",
        answer2: "Git Pull: Fetch and download content from a remote repository",
        answer3: "Git Upload:  Upload content from the local repository to a remote repository ",
            img: " ",
        correctAnswer:2
        
    },{
        question: "CSS  stands for?",
        answer1: "Colorful Style Sheet",
        answer2: "Cascading Style Sheet",
        answer3: "Computer style Sheet", 
        correctAnswer:2        
    },{
        question: " Which is not a valid data type in Javascript?",
        answer1: "Undefined ",
        answer2: "Boolean",
        answer3: "float",
        correctAnswer:3
    },{
        question: " What does the  = = =  comparison operator do??",
        answer1:"It sets one variable equal to another in both value and Data type",
        answer2:"It test for equality of value and data type",
        answer3:"It test for equality of value only",
        correctAnswer:2
    }, {
        question: "Which function removes the last element from an array object and returns that element?",
       answer1: "pop() ",
       answer2: "Push() ", 
       answer3: "Delete() ",
       correctAnswer:1
    },{
        question: " HTML stands for?",
            answer1: "Hypermark language",
            answer2: "Hypertext Markup language",
            answer3: "Hypertension language",
        correctAnswer:2
    },
  ];

//* -	Write a function called nextQuestion that enables player to click and proceed to next question,but hides answer icons untill answer clicked.
let indexOfLastQuestion = questions.length - 1;
let indexOfCurrentQuestion = 0;
let newIndex = indexOfCurrentQuestion+1
  nextQuestionButton.setAttribute("onclick",`showQuestion(${newIndex})`,`showQuestion()`);
  console.log(welcomeButton,startQuizButton,quitQuizButton1)

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

     // Event listenner for quitQuizButton1 on Start Quiz page
     quitQuizButton1.addEventListener(`click`, () => {
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

   // Event listenner for quitQuizButton2 to show Game over state when Quit Quiz button click during the game.
    quitQuizButton2.addEventListener(`click`, () => {
      //Hide questionBox
    questionBox.classList.add(`hidden`) 
      // Show gameOver text ( This replaces the questionBox) 
    gameOver.classList.remove(`hidden`)     
  } )
  //****** */
 // Write and call a function for quitQuizButton2 (using ondblclick ( double click) Event in html that makes the paragraph clickable) to return to Welcome screen.
      const returnToWelcomescreen = () => {
      // Hide  startGameButton, gameRuleScreen and gameBoardContainerScreen (must be hidden in other to go back to the Welcome screen)
        gameBoardContainerScreen.classList.add(`hidden`)
        gameRuleScreen.classList.add(`hidden`)
        quizScreen.classList.add(`hidden`)
        gameOver.classList.add(`hidden`)   
    // Show welcomeScreen  ( This takes you back to the Welcome screen!)
        welcomeScreen.classList.remove(`hidden`)     
    } 
//********* */
// console.log(gameBoardContainerScreen.classList.value)

// - Write a function called enterName that enables the player(s) type in their name(s).Then hide prompt . ( This has been done in html using input tags under; <div class="startGameButton hidden"> )

//*** Create TIMER */
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
//********   End of Create TIMER *****/

// -	Write a function called selectAnwser that allows player to click on answer of choice.Next question pops up when Ride On button is clicked
// -   Write a gobal fxn called points that allocates points to current player.
// -	Create an array of  5 – 10 questions with multiple choice answers and  Boolean. ( Randomize the array)
// -	Write a function called resetGame  that enables player to restart the game to round One when both rounds are completed with a draw (i.e. players can keep playing until one player wins. - Requirement 4)
// -    Write a function winOrLose that allows questionBox to be replaced with result of winner, ELSE Game over ( i.e. both players loss - requirement 5)   
// - Write a fxn called winner that allows the questionBox to be replaced with text "WINNER" plus background image applause, if a player has more points at the end of round two.

//*** */
// To access the properties in every element of the array, use the dot(.) notation. Remember array begins with index zero(0) i.e. questions[0].question is question number 1.

// To display a question to player: create a variable for the last question using the index of the array i.e. array.length - 1 ( -1 because an array begins with index zero (0). so an array = [a,b,c,d] will have a length of 4 but an index of 3)
// write a function called showQuestion that returns current question and answer options.Then hides the answer Icons.
function showQuestion(){
  let quest = questions[indexOfCurrentQuestion];
  questionDisplay.innerHTML = `<p>` + quest.question + ` ` + `Click on Correct Answer` + `<p>`;
  answer1.innerHTML = `1. ` + quest.answer1;
  answer2.innerHTML = `2. ` + quest.answer2;
  answer3.innerHTML = `3. ` + quest.answer3;
  let img1 = document.getElementById(`answer1`);
  let img2 = document.getElementById(`answer2`);
  let img3 = document.getElementById(`answer3`);
  img1.setAttribute(`class`,`checkMark hide`);
  img2.setAttribute(`class`,`checkMark hide`);
  img3.setAttribute(`class`,`checkMark hide`);
}
indexOfCurrentQuestion = 0;
showQuestion();

 //To switch to next question
// indexOfCurrentQuestion++
// console.log(showQuestion())

//******* */
// show time counter
// const timeToAnswerQuestion = 15; //15 secs for every question
// const gaugeWidth = 150;
// let count = 0;
// const guageProgressUnit = gaugeWidth /timeToAnswerQuestion;

// function showTimeCounter(){
//   if(count <= timeToAnswerQuestion){
//     counter.innerHTML = count;
//     timeGauge.style.width = guageProgressUnit * count +`px`;
//     count++;
//   }else{
//     count = 0;
//     answerIsWrong();
//   } if ( indexOfCurrentQuestion < indexOfLastQuestion){
//     indexOfCurrentQuestion++
//     showQuestion();
//   }else{
//     clearInterval(TIMER);
//     showScore();
//   }
// }

// showTimeCounter()

//Timer -- use setInvernal fxn
// let TIMER = setInterval(showTimeCounter,1000); // 1000 milliseconds equals to 1 sec. i.e. the setInterval will call the counter every 1 second
//**** */

// using the checkAnswer() fxn //
const checkAnswer = (num) => {
  //sets answer value

  let answer = questions[indexOfCurrentQuestion].correctAnswer;

  //make a new variable and set it to img infor depending on click
  let displayImg;
  if(num===1){
    displayImg = document.getElementById(`answer1`);
  }else if (num===2){
    console.log(`test`)
    displayImg = document.getElementById(`answer2`);
  }else if (num===3){
    displayImg = document.getElementById(`answer3`);
  }
   if(indexOfCurrentQuestion < indexOfLastQuestion){
    counter = 0;
    // indexOfCurrentQuestion++;
    showQuestion();
    indexOfCurrentQuestion++;
    console.log(`this is the next question`)
  } else{
    clearInterval(TIMER)
  }  
  if(answer===num){
    console.log(`test2`)
    displayImg.setAttribute(`src`,`https://p7.hiclipart.com/preview/999/840/970/check-mark-computer-icons-symbol-clip-art-green-tick-mark.jpg`);
    displayImg.setAttribute(`class`,`checkMark`);
  } else {
    displayImg.setAttribute(`src`,`https://w7.pngwing.com/pngs/175/854/png-transparent-computer-icons-button-check-mark-cross-red-cross-photography-trademark-logo.png`);
    displayImg.setAttribute(`class`,`checkMark`)
  }
  console.log(`click`)


  }

  //sets img tag source to whichever image is correct for the click

  // if(answer===num){
  //   console.log(`test2`)
  //   displayImg.setAttribute(`src`,`https://p7.hiclipart.com/preview/999/840/970/check-mark-computer-icons-symbol-clip-art-green-tick-mark.jpg`);
  //   displayImg.setAttribute(`class`,`checkMark`);
  // } else {
  //   displayImg.setAttribute(`src`,`https://w7.pngwing.com/pngs/175/854/png-transparent-computer-icons-button-check-mark-cross-red-cross-photography-trademark-logo.png`);
  //   displayImg.setAttribute(`class`,`checkMark`)
  // }
  // console.log(`click`)


// let score = 0;
// if(questions[indexOfCurrentQuestion].correctAnswer === answer){
//   score++
//   console.log(`worked`)
  // answerIsCorrect();
// }else{
  // answerIsWrong();
// }





 

//// ********************************* Funtions to check out later  **********************************************/////
//  - Write a function called startGameButton that makes the start quiz button clickable  
// let enterNameP1 
// let enterNameP2 
//    const startGameButton = () => {
//         enterNameP1 = window.prompt(`Welcome Player1 to FES-B ! : Enter Name to Start Game`);
        
//         enterNameP2 = window.prompt(`Welcome Player2 to FES-B ! : Enter Name to Start Game`);      
//    }
//    startGameButton()                                                 