//  <!-- Blank Main Screen with welcome button -->
      // -	clickable button  “ Welcome to FrontEnd-Stack Basics (FES-B) – Are you ready to Ride”  
       // - Dynamically Create a constant called welcomeButton that enables player to click to Enter Game. Then hide button .
    //  use ES6 Backticks i.e Create a constant and add a pair of back-ticks. Write your HTML code exactly as you do inside the HTML page.Assign it to the innerHTML property of the document.body.
        //       const welcomeButton = `
        //      <div class="button">
        //     <button> Welcome to FrontEnd-Stack Basics (FES-B), Are You Ready to Ride? </button>
        //   </div>   
        //   ` ;
        //  document.body.innerHTML = welcomeButton;


//  - Write a function called startGameButton that makes the start quiz button clickable  
// let enterNameP1 =
// let enterNameP2 =
//    const startGameButton = {
//         enterNameP1 = window.prompt(`Welcome Player1 to FES-B ! : Enter Name to Start Game`),
//          console.log(enterNameP1),
//         enterNameP2 = window.prompt(`Welcome Player2 to FES-B ! : Enter Name to Start Game`),
//         console.log(enterNameP2),

//    }

// -	Window-prompt for player (s) to enter name(s)
        // - Write a function called enterName that enables the player(s) type in their name(s).Then hide prompt .

        // let enterNameP1 = window.prompt(`Welcome Player1 to FES-B ! : Enter Name to Start Game`)
        // console.log(enterNameP1)
        // let enterNameP2 = window.prompt(`Welcome Player2 to FES-B ! : Enter Name to Start Game`)
        // console.log(enterNameP2)

// -  Write a funtion called seconds that sets a count down timer from 15 seconds to 0 seconds. Use Math.floor() or Date.now()

         // set date we are counting down to
           const countDownDate = new Date ().getTime();
        // Update the count down every 1 second
          const x = setInterval(function(){

          })
        //Time calculation for seconds
        const seconds = Math.floor( (distance % (1000 * 60)) / 1000);
        //Display result in the element with id="Time Left"
        document.getElementById("Time left").innerHTML = seconds + "s"
        //When count down is finished, write some text
        if (distance < 0 ){
            clearInterval(x);
            document.getElementById("Time left").innerHTML = "Time Up";
        }

        // let milliSeconds = Date.now()
        // document.getElementById(`timer`).innerHTML = milliSeconds

// -	Write a function called nextQuestion that enables player to click and proceed to next question
          //
// -	Write a function called selectAnwser that allows player to click on answer of choice.Next question auto pops up when Ride On button is clicked
                // use  <input type="checkbox" name="" id=""> to get box to click in


// -   Write a gobal fxn called points that allocates points to current player.
// -	Create an array of  5 – 10 questions with multiple choice answers and  Boolean. ( Randomize the array)
// -	Write a function called resetGame  that enables player to restart the game to round One when both rounds are completed with a draw (i.e. players can keep playing until one player wins. - Requirement 4)
// -    Write a function winOrLose that allows questionBox to be replaced with result of winner, ELSE Game over ( i.e. both players loss - requirement 5)   
// - Write a fxn called winner that allows the questionBox to be replaced with text "WINNER" plus background image applause, if a player has more points at the end of round two.
 

//