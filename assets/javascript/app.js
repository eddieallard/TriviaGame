$(document).ready(function() {

// VARIABLES DECLARED
var timer = 25;
var countdown;
var wins = 0;
var losses = 0;
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// QUESTIONS & ANSWERS FOR GAME

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

// TIMER FUNCTION 


var timer = setTimeout(function() {
    $("#countdown-timer").html("Time Left: " + timer);
  }, 25000);


// GAME LOGIC



});
