// All my variables that were grabbed from the HTML
var highScores = document.getElementById("highscores");
var timer = document.getElementById("timer")
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
var saveUserInitials = document.getElementById("saveUserInitials");
var highScoreArea = document.getElementById("highScoreArea");
var highScoreList = document.getElementById("highScoreList");
var goBackButton = document.getElementById("goBackButton");
var clearScoresButton = document.getElementById("clearScoresButton");

// Variables for the Timer
var secondsRemaining = 75;
var timerInterval = "";

// Variables to keep track of the questions and the users score
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

// needed to hide the areas we don't need yet until the appropriate functions are called
questionsArea.style.display = "none";
userScoreArea.style.display = "none";
highScoreArea.style.display = "none";

// Object containing all of the Questions
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

// Listeners for all of the buttons
highScores.addEventListener("click", viewHighScores);
startButton.addEventListener("click", startQuiz);
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);
saveUserInitials.addEventListener("click", savingInitials);
goBackButton.addEventListener("click", function () {
    location.reload();
});
clearScoresButton.addEventListener("click", clearHighScores)

// Functions for everything!
function startQuiz() {
    quizArea.style.display = "none"
    userScoreArea.style.display = "none"
    highScoreArea.style.display = "none"
    questionsArea.style.display = "block"
    showAnswer.textContent = ""

// Tricky Timer that I made faster, so the quiz is more difficult
    timerInterval = setInterval(function() {
        timer.textContent = "Time: " + secondsRemaining;
        secondsRemaining--;

        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time: 0"
            savingInitials()
        }
    }, 500) 

    renderQuestion()
}

// goes hand-in-hand with the CheckAnswer function, so I didn't need to create a loop
function renderQuestion() {
    question.textContent = questions[currentQuestion].q;
    option1.textContent = questions[currentQuestion].choices[0]
    option2.textContent = questions[currentQuestion].choices[1]
    option3.textContent = questions[currentQuestion].choices[2]
    option4.textContent = questions[currentQuestion].choices[3]
}

function checkAnswer(){
    var userChoice = this.getAttribute("data-value")
  //  var hr = document.createElement("HR") <-- attempt to do the HR line :(

    
    if (userChoice == questions[currentQuestion].answer){
        correctAnswer++
        secondsRemaining +=5
       // showAnswer.appendChild(hr) <-- attempt to do the HR line
        showAnswer.textContent = "✨Correct!✨"
    }
    else {
        incorrectAnswer++
        secondsRemaining -=10
        showAnswer.textContent = "Incorrect"
    }
    if (currentQuestion < questions.length -1) {
        currentQuestion++
        renderQuestion()
    }
    else {
        questionsArea.style.display = "none"
        userScoreArea.style.display = "block"
        clearInterval(timerInterval);
        timer.textContent = "Time: 0";
        finalScore.textContent = "Your final score is: " + correctAnswer + " out of 5"
    }
}

function savingInitials(){
    userScoreArea.style.display = "none"
    questionsArea.style.display = "none"
    highScoreArea.style.display = "block"
    var userInitials = document.getElementById("userInitials").value;
    
// to stop the timer. I don't want the timer to keep going while the final score is displayed
    clearInterval(timerInterval);
    timer.textContent = "Time: 0";
  
    if (userInitials === '') {
        alert("You must write something!");
        userScoreArea.style.display = "block"
        highScoreArea.style.display = "none"
    } else {
 //       highScoreList.appendChild(li);
  //      li.innerHTML = userInitials + " - " + correctAnswer + " out of 5"
       // highScoreList.innerHTML = localStorage.getItem("userInitials") + " - " + localStorage.getItem("correctAnswer") <-- attempt to do local storage :'(
        var userInfo = JSON.parse(localStorage.getItem("userInfo")) || []
        userInfo.push( {
            "user" : userInitials,
            "score" : correctAnswer
        })
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        viewHighScores ()
    }

}

function viewHighScores() {
    quizArea.style.display = "none"
    userScoreArea.style.display = "none"
    questionsArea.style.display = "none"
    highScoreArea.style.display = "block"
    clearInterval(timerInterval);
    timer.textContent = "Time: 0";
    var userInfo = JSON.parse(localStorage.getItem("userInfo")) || []
    for (let i = 0; i < userInfo.length; i++) {
        var li = document.createElement("li")
        highScoreList.appendChild(li);
        li.innerHTML = userInfo[i].user + " - " + userInfo[i].score + " out of 5"
      }
}

function clearHighScores() {
    localStorage.clear()
    highScoreList.textContent = ""
}