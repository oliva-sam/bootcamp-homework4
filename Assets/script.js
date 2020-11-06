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
// var userInitials = document.getElementById("userInitials").value;
var saveUserInitials = document.getElementById("saveUserInitials");
var highScoreArea = document.getElementById("highScoreArea");
var highScoreList = document.getElementById("highScoreList");
var goBackButton = document.getElementById("goBackButton");
var clearScoresButton = document.getElementById("clearScoresButton");

var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

questionsArea.style.display = "none";
userScoreArea.style.display = "none";
highScoreArea.style.display = "none";

var questions = [
{q: "Commonly used data types DO NOT include:",
choices: ["1. strings","2. booleans","3. alerts","4. numbers"],
answer:2
},
{q: "The condition in an if / else statement is enclosed within",
choices: ["1. quotes", "2. curly brackets", "3. paranthesis", "4. square brackets"],
answer: 2
},
{q: "Arrays in JS can be used to store ___________.",
choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
answer: 3
},
{q: "String values must be enclosed within _________, when being assigned to variables.",
choices: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
answer: 2
},
{q: "A very useful tool used during development and debugging for printing content to the debugger is:",
choices: ["1. JavaScript", "2. terminal/git bash", "3. for loops", "4. console log"],
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
    var li = document.createElement("li")
    var userInitials = document.getElementById("userInitials").value;
    var userI = document.createTextNode(userInitials)
    console.log(userI)
    li.appendChild(userI)
 //  li.textContent = userI + " - " + correctAnswer 
    
    if (userInitials === '') {
        alert("You must write something!");
    } else {
        highScoreList.appendChild(li);
    }
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
//goBackButton.addEventListener("click", function here)