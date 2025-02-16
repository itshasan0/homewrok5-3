let seconds = 0;
let timer;
const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', function() {
    timer = setInterval(function() {
        seconds++;
        timeDisplay.textContent = seconds;
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', function() {
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener('click', function() {
    clearInterval(timer);
    seconds = 0;
    timeDisplay.textContent = seconds;
    startButton.disabled = false;
    stopButton.disabled = true;
});
