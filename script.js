// List of riddles and their answers
const riddles = [
  { question: ">> I speak without a mouth and hear without ears. I have no body, but I come alive with the wind.", answer: "echo" },
  { question: ">> I’m found in the sky but not in the ground. I’m lighter than air, yet cannot be lifted.", answer: "cloud" },
  { question: ">> The more you take, the more you leave behind. What am I?", answer: "footsteps" },
];

let currentIndex = 0; // Current riddle index

// DOM elements
const riddleContainer = document.getElementById("riddle-container");
const userInput = document.getElementById("user-input");
const welcomeText = document.getElementById("welcome-text");
const riddleText = document.getElementById("riddle-text");
const feedbackText = document.getElementById("feedback");

// Show the welcome message and wait for user input (Y/N)
welcomeText.textContent = ">>  THERE YOU ARE. LET'S PLAY A GAME, JUST ME AND YOU. ARE YOU READY? PROCEED. [Y/N]";

// Listen for Enter key to submit the answer
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent new line on Enter
    const userAnswer = userInput.textContent.trim().toLowerCase();

    // If we are still at the welcome stage
    if (welcomeText.textContent.includes("PROCEED. [Y/N]")) {
      if (userAnswer === "y" || userAnswer === "yes") {
        startRiddle();
      } else if (userAnswer === "n" || userAnswer === "no") {
        welcomeText.textContent = "";
        riddleText.textContent = ">> HA. SCAREDY CAT.";
        userInput.style.display = "none"; // Hide input field
      } else {
        feedbackText.textContent = ">> TYPE Y or N.";
        feedbackText.style.color = "#ff0000"; // Red feedback
      }
    } else {
      // For answering riddles
      checkAnswer(userAnswer);
    }
  }
});

// Function to check the answer and give feedback
function checkAnswer(userAnswer) {
  const correctAnswer = riddles[currentIndex].answer;

  if (userAnswer === correctAnswer) {
    feedbackText.textContent = ">> CORRECT.";
    feedbackText.style.color = "#00ff00"; // Green feedback
    userInput.textContent = ""; // Clear input field
    setTimeout(nextRiddle, 500); // Move to the next riddle after 0.5 seconds
  } else {
    feedbackText.textContent = ">> WRONG. AGAIN."; // Red feedback
    feedbackText.style.color = "#ff0000";
    userInput.textContent = ""; // Clear input to allow retry
  }
}

// Function to load the next riddle
function nextRiddle() {
  currentIndex++;
  if (currentIndex < riddles.length) {
    riddleText.textContent = riddles[currentIndex].question;
    feedbackText.textContent = " ";
    userInput.textContent = ""; // Clear input field
  } else {
    feedbackText.textContent = ">> I BELIEVE CONGRATULATIONS ARE IN ORDER.";
    feedbackText.style.color = "#00ff00";
    userInput.style.display = "none"; // Hide input field
  }
}

// Function to start the riddle challenge
function startRiddle() {
  welcomeText.textContent = ""; // Remove the welcome message
  riddleText.textContent = riddles[currentIndex].question;
  feedbackText.textContent = "";
  userInput.textContent = ""; // Clear input field
  userInput.style.display = "inline"; // Ensure input is visible
}

// Prevent the user from accidentally adding extra spaces or characters
userInput.addEventListener("input", (e) => {
  // Allow only valid alphanumeric characters (this can be customized further)
  const regex = /^[a-zA-Z0-9 ]*$/;
  if (!regex.test(userInput.textContent)) {
    userInput.textContent = userInput.textContent.slice(0, -1); // Remove invalid characters
  }
});
