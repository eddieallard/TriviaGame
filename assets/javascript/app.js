$(document).ready(function() {

// VARIABLES DECLARED
var timer;
var timerDown = 10;
var wins = 0;
var losses = 0;
var activeQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// QUESTIONS & ANSWERS

var daQuiz = [
    
    {
        triviaQuestion: "In the movie Cast Away, what is the name of the Volleyball?",
        choices: ["That Ball", "Wilson", "Alex", "Tom"],
        answer: "Wilson",
    },
    {
        triviaQuestion: "In the Sopranos, what's the name of Tony's phychiaratrist?",
        choices: ["Dr.FeelGood", "Dr.Sanjay Gupta", "Dr.Atkins", "Dr.Melfi"],
        answer: "Dr.Melfi",
    },
    {
        triviaQuestion: "In The Terminator, Sarah Conner was played by who?",
        choices: ["Angella Bassett", "Rosie O'Donnel", "Linda Hamilton", "Cardi B"],
        answer: "Linda Hamilton",
    },
    {
        triviaQuestion: "Which war movie won the Academy Award for Best Picture in 2009?",
        choices: ["Saving Private Ryan", "Platoon", "Thin Red Line", "The Hurt Locker"],
        answer: "The Hurt Locker",
    },
    {
        triviaQuestion: "What was the name of the second Indiana Jones movie, released in 1984?",
        choices: ["Transformers", "Black Snake Moan", "Indiana Jones and the Temple of Doom", "Get Out"],
        answer: "Indiana Jones and the Temple of Doom",
    },
    {
        triviaQuestion: "Which English director was responsible for the epic movie Gladiator in 2000?",
        choices: ["Bill Cosby", "Ridley Scott", "Charles Barkely", "Bob Newhart"],
        answer: "Ridley Scott",
    },
    {
        triviaQuestion: "Who was the first African American actor to win the Academy Award for Best Actor?",
        choices: ["Larry Bird", "Sidney Poitier", "Joe Montana", "Donald Trump"],
        answer: "Sidney Poitier",
    },
    {
        triviaQuestion: "In which year were the Academy Awards, or Oscars, first presented?",
        choices: ["1812", "1929", "2000", "2020"],
        answer: "1929",
    },
    {
        triviaQuestion: "What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?",
        choices: ["Kevin O'Leary", "Anderson Cooper", "Frodo Baggins", "Foxy Brown"],
        answer: "Frodo Baggins",
    },
    {
        triviaQuestion: "Which actress plays Katniss Everdeen in the Hunger Games movies?",
        choices: ["Jennifer Lawrence", "Rosie O'Donnel", "Linda Hamilton", "Cardi B"],
        answer: "Jennifer Lawrence",
    },
    ];
    
// RUNS THE GAME
function run() {
    // set's the 1 second countdown
    // hide the start button
    clearInterval(timer);
    timer = setInterval(countDown, 1000);
    $("#start-button").hide();
}

 // COUNTDOWN FUNCTION
function countDown() {
    // display the counter on the page
    // run the stop function
     timerDown--;
    $("#countdown-timer").html("<h1>" + "Timer: " + timerDown + "</h1>");
    if (timerDown === 0) {
    stop();
    }
}
countDown();

// LOAD QUESTIONS TO BE DISPLAYED
function loadQuestions() {
    // set timer variable
    // add question dynamically
    // for loop to go through questions
    const triviaQuestion =  daQuiz[activeQuestion].triviaQuestion;
    const choices =  daQuiz[activeQuestion].choices;

    $(".trivia").html("<h2>" + triviaQuestion + "</h2>");
    }
    loadQuestions();

// LOADS THE CHOICES TO BE DISPLAYED UNDER QUESTIONS
    // display result
    // for loop to go display choices
    var result = "";
    for (var i = 0; i < choices.length; i++)


// LOADS THE NEXT QUESTIONS TO BE DISPLAYED
function nextQuestion() {
    // set countdown
    // display counter
    // increment currentQuestion
    //run loadQuestion function
    timerDown--;
    $("#countdown-timer").html("<h1>" + "Timer: " + timerDown + "</h1>");
    activeQuestion++;
}       
            
// THIS IS THE TIME'S UP FUNCTION
function stop() {
    // clearInterval
    // display on page
    // conditional - if your in current question or next question
    clearInterval(timer); 
}

// THIS IS THE RESULTS FUNCTION
function results () {
    // clear interval
    // display results
}

// THIS IS THE CLICKED FUNCTION
function clicked() {

}

// THIS IS THE ANSWERED INCORRECTLY FUNCTION
function answerInCorrectly () {
    // increment incorrect
    // display the right answer
    // condition to either go to results or go to next question
}

// THIS IS THE ANSWERED CORRECTLY FUNCTION
 function answerCorrect() {
    // increment correct
    // display that they are correct
}

// THIS FUNCTION RESETS THE GAME
function reset () {
            
}

// CLICK EVENTS FOR THE PAGE
            //$(document).on("click") that calls the game function
            //$(document).on("click") that calls the clicked function
            //$(document).on("click") that calls the loadQuestion function
       

    


        });