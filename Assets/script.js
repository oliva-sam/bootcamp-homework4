var highScores = document.getElementById("highscores");
var startButton = document.getElementById("startbutton");
var quizArea = document.getElementById("quizArea");
var questionsArea = document.getElementById("questionsArea");
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var showAnswer = document.getElementById("showAnswer");
var userScoreArea = document.getElementById("userScoreArea");
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");
var saveUserInitials = document.getElementById("saveUserInitials");
var highScoreArea = document.getElementById("highScoreArea");
var highScoreList = document.getElementById("highScoreList");
var resetQuizButton = document.getElementById("resetQuizButton");
var clearScoresButton = document.getElementById("clearScoresButton");

var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

questionsArea.style.display = "none";
userScoreArea.style.display = "none";
highScoreArea.style.display = "none";

var questions = [
{q: "Commonly used data types DO NOT include:",
choices: ["strings","booleans","alerts","numbers"],
answer:2
},
{q: "The condition in an if / else statement is enclosed within",
choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
answer: 2
},
{q: "Arrays in JS can be used to store ___________.",
choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
answer: 3
},
{q: "String values must be enclosed within _________, when being assigned to variables.",
choices: ["commas", "curly brackets", "quotes", "paranthesis"],
answer: 2
},
{q: "A very useful tool used during development and debugging for printing content to the debugger is:",
choices: ["JavaScript", "terminal/git bash", "for loops", "console log"],
answer: 3
}]

function startQuiz() {
    quizArea.style.display = "none"
    userScoreArea.style.display = "none"
    highScoreArea.style.display = "none"
    questionsArea.style.display = "block"
    renderQuestion()
}

function renderQuestion() {
    question.textContent = questions[currentQuestion].q;
    option1.textContent = questions[currentQuestion].choices[0]
    option2.textContent = questions[currentQuestion].choices[1]
    option3.textContent = questions[currentQuestion].choices[2]
    option4.textContent = questions[currentQuestion].choices[3]
}

function checkAnswer(){
    var userChoice = this.getAttribute("data-value")
    if (userChoice == questions[currentQuestion].answer){
        correctAnswer++
        showAnswer.textContent = "✨Correct!✨"
    }
    else {
        incorrectAnswer++
        showAnswer.textContent = "Incorrect"
    }
    if (currentQuestion < questions.length -1) {
        currentQuestion++
        renderQuestion()
    }
    else {
        questionsArea.style.display = "none"
        userScoreArea.style.display = "block"
        finalScore.textContent = "Your final score is: " + correctAnswer + " out of 5"
    }
}

function savingInitials(){
    userScoreArea.style.display = "none"
    highScoreArea.style.display = "block"
    var highScoreInitialsEl = document.createElement("li")
    highScoreInitialsEl.appendChild(userInitials)
    highScoreList.appendChild(highScoreInitialsEl)
}

function viewHighScores() {
    quizArea.style.display = "none"
    userScoreArea.style.display = "none"
    questionsArea.style.display = "none"
    highScoreArea.style.display = "block"
}


highScores.addEventListener("click", viewHighScores)
startButton.addEventListener("click", startQuiz)
option1.addEventListener("click", checkAnswer)
option2.addEventListener("click", checkAnswer)
option3.addEventListener("click", checkAnswer)
option4.addEventListener("click", checkAnswer)
saveUserInitials.addEventListener("click", savingInitials)
//resetQuizButton.addEventListener("click", startQuiz)