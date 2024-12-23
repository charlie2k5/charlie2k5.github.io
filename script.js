const riddles = [
    { question: "If you are justice, please do not lie. What is the price for your blind eye?", answer: "bribe" },
    { question: "When you lie, I strike. Death’s gentle friend is I. Who am I?", answer: "sleep" },
    { question: "I cannot be bought, but I can be stolen in a glance. I am useless to one, but priceless to two. What am I?", answer: "love" },
    // Add more riddles here
];

let currentRiddleIndex = 0;
let typingIndex = 0;
let isTyping = false;

const riddleDisplay = document.getElementById("riddle-display");
const answerSpan = document.getElementById("answer");

function typeRiddle() {
    const riddle = riddles[currentRiddleIndex].question;
    if (typingIndex < riddle.length) {
        riddleDisplay.textContent += riddle[typingIndex];
        typingIndex++;
        setTimeout(typeRiddle, 50); // Adjust typing speed
    } else {
        isTyping = false;
    }
}

function handleInput(event) {
    const userAnswer = answerSpan.textContent.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

    if (event.key === "Enter" && !isTyping) {
        if (userAnswer === correctAnswer) {
            currentRiddleIndex++;
            if (currentRiddleIndex < riddles.length) {
                answerSpan.textContent = "";
                riddleDisplay.textContent = "";
                typingIndex = 0;
                isTyping = true;
                typeRiddle();
            } else {
                riddleDisplay.textContent = "Congratulations, you've solved all the riddles!";
                answerSpan.textContent = "";
            }
        } else {
            riddleDisplay.textContent = "Incorrect! Try again.\n>> ";
            answerSpan.textContent = "";
        }
    } else if (event.key === "Backspace") {
        answerSpan.textContent = answerSpan.textContent.slice(0, -1);
    } else if (/^[a-zA-Z0-9 ]$/.test(event.key)) {
        answerSpan.textContent += event.key.toUpperCase();
    }
}

document.addEventListener("keydown", handleInput);

window.onload = () => {
    typeRiddle();
};
