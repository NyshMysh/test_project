const timerDisplay = document.querySelector('.timer__display');
let startTime = parseInt(timerDisplay.dataset.startTime);
let timeLeft = startTime;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        location.reload();
    } else {
        timeLeft--;
    }
}

const btn = document.querySelector('.timer__button')

btn.addEventListener('click', () => {
    location.reload()
})

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);