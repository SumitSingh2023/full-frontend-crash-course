let minute = 0
let second = 0
let intervalId;
let timerRunning = false

function updateDisplay() {
    let minuteDisplay = String(minute).padStart(2, '0');
    let secondDisplay = String(second).padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `${minuteDisplay} : ${secondDisplay}`
}

function startTimer() {
    timerRunning = true
        intervalId = setInterval(() => {
            second++
            if (second == 60) {
                second = 0
                minute++
            }
            updateDisplay()
        }, 1000)
}

function stopTimer() {
    timerRunning = false
    clearInterval(intervalId)
}

function resetTimer(){
    stopTimer()
    second=0
    minute=0
    updateDisplay()
}