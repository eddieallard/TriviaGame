$(document).ready(function() {

// VARIABLES DECLARED
var timer;
var timerDown = 25;
var wins = 0;
var losses = 0;
var ActiveQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// QUESTIONS & ANSWERS

var daQuiz = [
    
{
    triviaQuestion: "In the movie Cast Away, what is the name of the Volleyball?",
    choices: ["That Ball", "Wilson", "Alex", "Tom"],
    answer: "Wilson"
},
{
    triviaQuestion: "In the Sopranoes, what's the name of Tony's phychiaratrist?",
    choices: ["Dr.FeelGood", "Dr.Sanjay Gupta", "Dr.Atkins", "Dr.Melfi"],
    answer: "Dr.Melfi"
},
{
    triviaQuestion: "In The Terminator, Sarah Conner was played by who?",
    choices: ["Angella Bassett", "Rosie O'Donnel", "Linda Hamilton", "Cardi B"],
    answer: "Linda Hamilton"
},


];


// GAME LOGIC

        // set the object values
        // question: questions
        // count: countStartNumber
        // currentQuestion = 0;
        // correct = 0;
        // incorrect = 0;

        // Countdown function
        function run() {
            clearInterval(timer);
            timer = setInterval(countDown, 1000);
          }
          run();

        function countDown() {
             // decrement counter
             timerDown--;
            // display counter in on page
            $("#countdown-timer").html("<h2>" + "Timer: " + timerDown + "</h2>");

            if (timerDown === 0) {

                //  ...run the stop function.
                stop();
              }
            // run timer function

        }
        countDown();
        // loadQuestion: function
        function loadQuestion() {
            // set timer variable
            var question = daQuiz[ActiveQuestion].triviaQuestion;
            // add question dynamically
            $(".trivia").html("<h2>" + question + "</h2>");
            console.log(question);
            // for loop to go through questions
        }
        loadQuestion();
            
        // nextQuestion: function
        function nextQuestion() {
            // set countdown
            // display counter
            // increment currentQuestion
            //run loadQuestion function
        }

            
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

    

}

);

