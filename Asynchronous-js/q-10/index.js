let second = 0
let minute = 0
let intervalId;
let timerRunning = false

function updateDisplay() {
    const displayMinute = String(minute).padStart(2, '0');
    const displaySecond = String(second).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${displayMinute}:${displaySecond}`
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true
        intervalId = setInterval(() => {
            second++;
            if (second == 60) {
                second = 0;
                minute++
            }
            updateDisplay()
        }, 1000)
    }
}

function stopTimer() {
    timerRunning = false
    clearInterval(intervalId)
}

function resetTimer(){
    stopTimer()
    second=0;
    minute=0
    updateDisplay()
}