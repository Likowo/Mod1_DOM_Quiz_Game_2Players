//  <!-- Blank Main Screen with welcome button -->
      // -	clickable button  “ Welcome to FrontEnd-Stack Basics (FES-B) – Enter Game”  
       // - Dynamically Create a constant called welcomeButton that enables player to click to Enter Game .
    //  use ES6 Backticks
    const welcomeButton = `
    <div class="button">
    <button>   Welcome to FrontEnd-Stack Basics (FES-B), Enter Game </button>
   </div>   
    ` ;
    document.body.innerHTML = welcomeButton;
    


// -	Window-prompt for player (s) to enter name(s)
        // - Write a function called enterName that enables the player(s) type in their name(s) .
        let enterName = window.prompt(`Welcome to FrontEnd-Stack Basics : Enter Name to Start Game`)
        console.log(enterName)
// -	Write a function called nextQuestion that enables player to click and proceed to next question
// -	Write a function called selectAnwser that allows player to click on answer of choice.
// -	Create an array of  5 – 10 questions with multiple choice answers and  Boolean. ( Randomize the array)
// -	Write a function called resetGame  that enables player to restart the game.
 

