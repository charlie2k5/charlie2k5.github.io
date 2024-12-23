const riddles = [
    { question: "If you are justice, please do not lie. What is the price for your blind eye?", answer: "bribe" },
    { question: "When you lie, I strike. Death’s gentle friend is I. Who am I?", answer: "sleep" },
    { question: "I cannot be bought, but I can be stolen in a glance. I am useless to one, but priceless to two. What am I?", answer: "love" },
    { question: "I run faster in colder temperatures and freeze when I get too hot. What am I?", answer: "computer" },
    // Add more riddles here
];

let currentRiddle = 0;

const riddleDisplay = document.getElementById("riddle-display");
const userInput = document.getElementById("user-input");

// Function to display the question letter by letter
function typeQuestion(question, callback) {
    let index = 0;
    riddleDisplay.textContent = ""; // Clear previous riddle
    const interval = setInterval(() => {
        riddleDisplay.textContent += question[index];
        index++;
        if (index === question.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50); // Typing speed (50ms per letter)
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = userInput.textContent.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddle].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        currentRiddle++;
        if (currentRiddle < riddles.length) {
            userInput.textContent = ""; // Clear input
            typeQuestion(riddles[currentRiddle].question);
        } else {
            riddleDisplay.textContent = "Congratulations! You've solved all the riddles!";
            userInput.removeEventListener("input", checkAnswer);
            userInput.removeAttribute("contenteditable");
        }
    }
}

// Start the first riddle
typeQuestion(riddles[currentRiddle].question);

// Listen for user input and check the answer
userInput.addEventListener("input", () => {
    const userAnswer = userInput.textContent.trim();
    if (userAnswer.includes("\n")) {
        checkAnswer();
    }
});
