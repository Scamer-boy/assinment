
// Counter functionality
let count = 0;

const counterDisplay = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

function updateCounter() {
    counterDisplay.textContent = count;
}

increaseButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseButton.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// Initialize display
updateCounter();

// Stopwatch functionality
let stopwatchInterval;
let elapsedTime = 0;

const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetStopwatchButton = document.getElementById('resetStopwatch');

function updateStopwatch() {
    elapsedTime++;
    const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedTime % 60).padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

resetStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    elapsedTime = 0;
    updateStopwatch();
});

// Initialize stopwatch display
updateStopwatch();
