var startButton = document.getElementById("startbutton")
var questionsArea = document.getElementById("questionsArea")
var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var currentQuestion = 0
questionsArea.style.display = "none"

var questions = [
{ q: "Commonly used data types DO NOT include:",
choices: ["strings","booleans","alerts","numbers"],
answer:2
},
{q: "The condition in an if / else statement is enclosed within?",
choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
answer: 2
},
{q: "Arrays in JS can be used to store _______.",
choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
answer: 3
},
{q: "String values must be enclosed within _____, when being assigned to variables",
choices: ["commas", "curly brackets", "quotes", "paranthesis"],
answer: 2
},
{q: "A very useful tool used during development and debugging for printing content to the debugger is:",
choices: ["JavaScript", "terminal/git bash", "for loops", "console log"],
answer: 3
}]

function startQuiz() {
    startButton.style.display = "none"
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

startButton.addEventListener("click", startQuiz)