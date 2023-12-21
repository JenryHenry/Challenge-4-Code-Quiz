//landing page
// function firstQuestion() {
//   let question1 = document.createElement("h1");
//   question1.textContent = "Insert real question here.";
//   document.body.appendChild(question1);
// }
let landingPage = document.getElementById("landing");
let questionPage = document.getElementById("questions");
let scorePage = document.getElementById("score");
questionPage.style.display = "none";
scorePage.style.display = "none";
let answerClick = document.getElementById("questions");
let score = 0;
let initials = document.querySelector("#initialsInput");
let submitEl = document.querySelector("#submit");
var secondsLeft = 60;
let timer = document.getElementById("timeRemaining");
var timerInterval;
let questions = [
  {
    question: "What symbol indicates a class selector in CSS?",
    answers: ["#", ".", "$", "*"],
    correctA: 1,
  },
  {
    question: "What symbol indicates an id selector in CSS",
    answers: ["#", ".", "stinky", "5"],
    correctA: 0,
  },
  {
    question: "What kind of data type is 54 ?",
    answers: ["number", "boolean", "array", "string"],
    correctA: 0,
  },
  {
    question: "What does 'boolean' mean?",
    answers: ["yes/no", "loop", "skinny ghost", "true/false"],
    correctA: 3,
  },
];

let qIndex = -1;
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      renderScorePage();
    }
  }, 1000);
}
answerClick.addEventListener("click", function (event) {
  let element = event.target;
  if (element.matches("li")) {
    //use loose equality
    if (element.dataset.index == questions[qIndex].correctA) {
      score++;
    } else {
      secondsLeft -= 5;
    }
    if (qIndex < questions.length - 1) {
      RenderNextQuestion();
    } else {
      clearInterval(timerInterval);
      renderScorePage();
    }
  }
});

function RenderNextQuestion() {
  // Need parameter for previous question right/wrong to display
  landingPage.style.display = "none";
  questionPage.style.display = "block";
  qIndex++;
  document.getElementById("qText").textContent = questions[qIndex].question;
  document.getElementById("ans1").textContent = questions[qIndex].answers[0];
  document.getElementById("ans2").textContent = questions[qIndex].answers[1];
  document.getElementById("ans3").textContent = questions[qIndex].answers[2];
  document.getElementById("ans4").textContent = questions[qIndex].answers[3];
}
function renderScorePage() {
  questionPage.style.display = "none";
  scorePage.style.display = "block";
  document.getElementById("realScore").textContent = score;
  document.getElementById("qTotal").textContent = questions.length;
  console.log(score);
}
function startQuiz() {
  //create document elements
  let startButton = document.getElementById("start");
  score = 0;
  startButton.addEventListener("click", RenderNextQuestion);
  setTime();
}

function handleFormSubmit(event) {
  event.preventDefault();
  let initialsEntered = initials.value;
  let lastScore = {
    user: initialsEntered,
    userScore: score + "/" + questions.length,
  };
  localStorage.setItem("lastScore", JSON.stringify(lastScore));
  scorePage.style.display = "none";
  landingPage.style.display = "block";
  console.log(initialsEntered);
}

startQuiz();
submitEl.addEventListener("click", handleFormSubmit);
//Acceptance Criteria:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//PSEUDOCODE:
// First, I need to create a LANDING PAGE.
// The landing page will have a title that says "Coding Quiz Challenge."
// ((Create an h1 element by setting a var varName = document.createElement('h1') ))
// The landing page will have a description of the quiz and its rules, including time to complete, and wrong answer penalties.
// The landing page will have a "View High Scores" tab in the top left of the page.
// The landing page will have a time remaining label at the top right of the page which states the total time allotted.
// The landing page will have a "Start Quiz" button that immediately takes the user to the first question and starts the timer countdown.
// The landing page will have color styling on both the "View High Scores" tab and the "Start Quiz" button.
// ((To style objects in the dom, use `elementName.style.color = "color"`, `.style.fontSize = "#px", etc.))
// ((OR STYLE using elementName.setAttribute("style", "color:white; background: #666666; padding: 5px; margin-left: 35px;")))

// THE QUIZ:
// When the questions appear, they will appear with a list of 4 choices. Each choice will be a button with color styling and text.
// ((create an ordered list using `var listName = document.createElement('ol')` and append it, likely to the body, using-))
// ((**** `body.appendChild(listName)' and then append the li variables to the ordered list. ****))
// ((Put text into created tags by using `varName.textContent = "whatever you want here". ))
// When the user clicks on one of the buttons with their mouse, the quiz will advance to the next question.
// Each answer button will either have a "true" or "false" value, depending on if it is correct.
// ((use buttonName.addEventListener("click", function(){}) to make the buttons clickable.))
// When each new question appears, the page will also show a "correct" or "incorrect" message under the answer choices,
//-depending on if the user answered the previous question correctly.
// If a question is answered correctly, no time will be deducted from the time remaining.
// If a question is answered incorrectly, an amount of time will be deducted from the time remaining.
// If the timer reaches 0, then the quiz will stop short and immediately calculate the results, bringing up the "Quiz Results" page.

// var secondsLeft = 10;
// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// When the last question has been answered, the page will show a "Quiz Results" message, with a fraction value equal to
//-correct answers out of total answers.
// On the "Quiz Results" page, a form for entering the user's initials will appear under the user's quiz results.
// The form will have a "submit" button next to it which, when clicked by the user, saves their initials and score to local storage.
// ((to store a score in local storage, use `localStorage.setItem("score", score) OR ))
// ((- store in an object: `localStorage.setItem("objectName", JSON.stringify(objectName)`
// `var objectName = {
//   initials: initials.value,
//   score: score.value
// };
// ))

// Any form submission or button click may need an `event.preventDefault()` to prevent the browser from reloading the page.

// HIGH SCORES PAGE:
// When the user clicks on the "View High Scores" tab, they will be shown the last 5 highest scores and the user's initials.
// ((To retrieve local storage data, use `localStorage.getItem("name") OR))
// ((- var lastScore = JSON.parse(localStorage.getItem())

// ((use .setAttr("data-whatever", index ))
