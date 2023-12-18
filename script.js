//landing page
// function firstQuestion() {
//   let question1 = document.createElement("h1");
//   question1.textContent = "Insert real question here.";
//   document.body.appendChild(question1);
// }
let questions = [
  {
    question: "insert question here",
    answers: ["a1", "a2", "a3", "a4"],
    correctA: 2,
  },
  {
    question: "insert question here",
    answers: ["a1", "a2", "a3", "a4"],
    correctA: 2,
  },
  {
    question: "insert question here",
    answers: ["a1", "a2", "a3", "a4"],
    correctA: 2,
  },
  {
    question: "insert question here",
    answers: ["a1", "a2", "a3", "a4"],
    correctA: 2,
  },
];
let qIndex = 0;
function firstQuestion(event) {
  event.stopPropagation();
  let question1 = document.createElement("h1");
  let answers = document.createElement("ol");
  let answer1 = document.createElement("li");
  let answer2 = document.createElement("li");
  let answer3 = document.createElement("li");
  let answer4 = document.createElement("li");

  answer1.setAttribute("class", "button");
  answer2.setAttribute("class", "button");
  answer3.setAttribute("class", "button");
  answer4.setAttribute("class", "button");

  question1.textContent = "Insert real question here.";
  answer1.textContent = "Insert real answer here";
  answer2.textContent = "Insert real answer here";
  answer3.textContent = "Insert real answer here";
  answer4.textContent = "Insert real answer here";

  document.body.appendChild(question1);
  question1.appendChild(answers);
  answers.appendChild(answer1);
  answers.appendChild(answer2);
  answers.appendChild(answer3);
  answers.appendChild(answer4);
}

function landingPage() {
  //create document elements
  var quizTitle = document.createElement("h1");
  var description = document.createElement("p");
  var highScores = document.createElement("p");
  var startButton = document.createElement("button");

  // add element text content
  highScores.textContent = "High Scores";
  description.textContent = "blahblahblah";
  quizTitle.textContent = "Coding Quiz Challenge";
  startButton.textContent = "Start Quiz";

  // append elements to body
  document.body.appendChild(highScores);
  document.body.appendChild(quizTitle);
  quizTitle.appendChild(description);
  description.appendChild(startButton);

  // function firstQuestion(event) {
  //   // event.stopPropagation();
  //   let question1 = document.createElement("h1");
  //   let answers = document.createElement("ol");
  //   let answer1 = document.createElement("li");
  //   let answer2 = document.createElement("li");
  //   let answer3 = document.createElement("li");
  //   let answer4 = document.createElement("li");

  //   answer1.setAttribute("class", "button");
  //   answer2.setAttribute("class", "button");
  //   answer3.setAttribute("class", "button");
  //   answer4.setAttribute("class", "button");

  //   question1.textContent = "Insert real question here.";
  //   answer1.textContent = "Insert real answer here";
  //   answer2.textContent = "Insert real answer here";
  //   answer3.textContent = "Insert real answer here";
  //   answer4.textContent = "Insert real answer here";

  //   document.body.appendChild(question1);
  //   question1.appendChild(answers);
  //   answers.appendChild(answer1);
  //   answers.appendChild(answer2);
  //   answers.appendChild(answer3);
  //   answers.appendChild(answer4);
  // }
  //**????CAN YOU USE A JAVASCRIPT-CREATED BUTTON AS A CLICKABLE EVENT LISTENER????**
  startButton.addEventListener("click", firstQuestion);
}

landingPage();
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

//var secondsLeft = 10;
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
