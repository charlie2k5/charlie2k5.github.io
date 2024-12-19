const answers = {
    1: 'bribe',
    2: 'Sleep',
    3: 'Love',
    4: 'computer',
    5: 'library',
    6: 'newspaper',
    7: 'Friends',
    8: 'hole',
    9: 'Footsteps',
    10: 'crowbar',
    11: 'Vowels',
    12: 'R',
    13: 'clock',
    14: 'map',
    15: 'clock',
    16: 'E',
    17: 'Justice',
    18: 'He lies still',
    19: 'human brain',
    20: 'knot',
    21: 'Tomorrow',
    22: 'maize',
    23: 'Ha'
};

function checkAnswer(riddleIndex) {
    const answerBox = document.querySelector(`#answer-${riddleIndex}`);
    const resultBox = document.querySelector(`#result-${riddleIndex}`);
    const userAnswer = answerBox.value.trim().toLowerCase();

    if (userAnswer === answers[riddleIndex].toLowerCase()) {
        resultBox.textContent = "Correct!";
        resultBox.style.color = "lime";
        resultBox.style.display = "block";
        resultBox.dataset.solved = "true";
    } else {
        resultBox.textContent = "Incorrect! Try again.";
        resultBox.style.color = "red";
        resultBox.style.display = "block";
        resultBox.dataset.solved = "false";
    }
}
