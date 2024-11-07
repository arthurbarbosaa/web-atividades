let secretCode = generateSecretCode();
let attempts = [];

document.getElementById('guessBtn').addEventListener('click', function() {
    const guess = document.getElementById('guessInput').value;
    const result = checkGuess(guess, secretCode);
    attempts.unshift(`${guess} - ${result}`);
    updateAttemptsList();
    document.getElementById('guessInput').value = '';
});

document.getElementById('showAnswerBtn').addEventListener('click', function() {
    alert(`A combinação secreta é: ${secretCode}`);
});

function generateSecretCode() {
    const digits = [];
    while (digits.length < 4) {
        const digit = Math.floor(Math.random() * 10);
        if (!digits.includes(digit)) {
            digits.push(digit);
        }
    }
    return digits.join('');
}

function checkGuess(guess, secret) {
    let bulls = 0;
    let cows = 0;
    const guessArray = guess.split('');
    const secretArray = secret.split('');

    guessArray.forEach((digit, index) => {
        if (digit === secretArray[index]) {
            bulls++;
        } else if (secretArray.includes(digit)) {
            cows++;
        }
    });

    return `${bulls} Bulls, ${cows} Cows`;
}

function updateAttemptsList() {
    const attemptsList = document.getElementById('attemptsList');
    attemptsList.innerHTML = '';
    attempts.forEach(attempt => {
        const li = document.createElement('li');
        li.textContent = attempt;
        attemptsList.appendChild(li);
    });
}
