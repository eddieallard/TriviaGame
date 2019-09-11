// VARIABLES DECLARED
var timer;
var timerDown = 10;
var wins = 0;
var losses = 0;
var activeQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// RUN'S THE GAME
function run() {
    clearInterval(timer);
    timer = setInterval(countDown, 1000);
    // HIDE START BUTTON
    $("#start-button").hide();
  }
  

 // COUNTDOWN FUNCTION
function countDown() {
     // DECREMENT COUNTER
     timerDown--;
    // DISPLAY COUNTER ON THE PAGE
    $("#countdown-timer").html("<h1>" + "Timer: " + timerDown + "</h1>");
    if (timerDown === 0) {
        //  RUN THE STOP FUNCTION
        stop();
      }
}
// countDown(); // run timer function

// loadQuestion: function
function loadQuestions() {
    var quizForm = $(".trivia")
    // for loop to go through questions
    for (var i = 0; i < daQuiz.length; i++){
        console.log();
        var question = $("<h2>").text(daQuiz[i].triviaQuestion).appendTo(quizForm);   
        
    }
};



// QUESTIONS & ANSWERS

var daQuiz = [
    
{
    triviaQuestion: "In the movie Cast Away, what is the name of the Volleyball?",
    choices: ["That Ball", "Wilson", "Alex", "Tom"],
    answer: "Wilson",
    userAnswer: ""
},
{
    triviaQuestion: "In the Sopranoes, what's the name of Tony's phychiaratrist?",
    choices: ["Dr.FeelGood", "Dr.Sanjay Gupta", "Dr.Atkins", "Dr.Melfi"],
    answer: "Dr.Melfi",
    userAnswer: ""
},
{
    triviaQuestion: "In The Terminator, Sarah Conner was played by who?",
    choices: ["Angella Bassett", "Rosie O'Donnel", "Linda Hamilton", "Cardi B"],
    answer: "Linda Hamilton",
    userAnswer: ""
},


];


// GAME LOGIC


        
        // loadQuestion();
            
        // nextQuestion: function
        // function nextQuestion() {
        //     // set countdown
        //     timerDown--;
        //     // display counter
        //     $("#countdown-timer").html("<h1>" + "Timer: " + timerDown + "</h1>");
        //     // increment currentQuestion
        //     activeQuestion++;
        //     //run loadQuestion function
        // }
        // nextQuestion();
        

            
        // timeUp: function
        function stop() {
            // clearInterval
            clearInterval(timer);
            // display on page
            // conditional - if your in current question or next question
        }
            
        // results: function
        function results() {
            // clear interval
            // display results
        }

        //clicked: function ()
        function clicked () {

        }
    
        // answerInCorrectly: function
        function answerInCorrectly () {
            // increment incorrect
            // display the right answer
            // condition to either go to results or go to next question
        }
            
        // answeredCorrect: function
        function answerCorrect() {
            // increment correct
            // display that they are correct
        }
            
        // reset: function
        function reset () {
            
        }

        // Click events
            //$(document).on("click") that calls the game function
            //$(document).on("click") that calls the clicked function
            //$(document).on("click") that calls the loadQuestion function

    


        $("#start-button").on("click", run());
        loadQuestions();