const inputTag = document.getElementById('time-game');
const btnTag = document.getElementById('start-game');
const pTag = document.getElementById('game-over');
const countdown = document.getElementById('countdown');
const pCounterS = document.getElementById('s-counter');
const pCounterL = document.getElementById('l-counter');
const hVinnerS = document.getElementById('s-vinner');
const hVinnerL = document.getElementById('l-vinner');
const pSpeedS = document.getElementById('s-speed');
const pSpeedL = document.getElementById('l-speed');
let counterS = 0;
let counterL = 0;
let finished = true;
const confettiSettingsS = { target: 's-canvas' };
const confettiS = new ConfettiGenerator(confettiSettingsS);
const confettiSettingsL = { target: 'l-canvas' };
const confettiL = new ConfettiGenerator(confettiSettingsL);


const startGame = () => {
    finished = false;
    counterS = 0;
    pCounterS.textContent = counterS;
    hVinnerS.textContent = 'Press S';
    confettiS.clear();
    counterL = 0;
    pCounterL.textContent = counterL;
    hVinnerL.textContent = 'Press L';
    confettiL.clear();
}

const keypressCounter = () => {
    if (finished) {
        return;
    }
    if (inputTag.value) {
        if (event.code === 'KeyS') {
            counterS++;
            pCounterS.textContent = counterS;
        } else if (event.code === 'KeyL') {
            counterL++;
            pCounterL.textContent = counterL;
        } else {
            console.log(event.key);
        }
    }
};
window.addEventListener('keypress', keypressCounter);

const countdownTimer = (timeLimit) => {
    if (timeLimit) {
        let timerInterval = setInterval(() => {
            timeLimit--;
            countdown.textContent = `Seconds left: ${timeLimit}`;
            if (timeLimit === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
}

const onclickHandler = () => {
    startGame();
    countdownTimer(inputTag.value);
    setTimeout(() => {
        if (!inputTag.value) {
            pTag.textContent = 'Error: first set seconds';
        }
        else {
            pTag.textContent = 'Time has run out';
            finished = true;
            const sPlayerSpeed = counterS / inputTag.value;
            const lPlayerSpeed = counterL / inputTag.value;
            if (counterS > counterL) {
                hVinnerS.textContent = 'Vinner!';
                pSpeedS.textContent = `Your speed var ${sPlayerSpeed.toFixed(1)} clicks in sec`;
                pSpeedL.textContent = `Your speed var ${lPlayerSpeed.toFixed(1)} clicks in sec`;
                confettiS.render();
            } else if (counterS < counterL) {
                hVinnerL.textContent = 'Vinner!';
                pSpeedL.textContent = `Your speed var ${lPlayerSpeed.toFixed(1)} clicks in sec`;
                pSpeedS.textContent = `Your speed var ${sPlayerSpeed.toFixed(1)} clicks in sec`;
                confettiL.render();
            } else if (counterL === 0 && counterS === 0) {
                hVinnerL.textContent = "No One Won!";
                hVinnerS.textContent = "No One Won!";
            }
            else {
                hVinnerS.textContent = 'Dead heat!';
                hVinnerL.textContent = 'Dead heat!';
                pSpeedS.textContent = `Your speed var ${sPlayerSpeed.toFixed(1)} clicks in sec`;
                pSpeedL.textContent = `Your speed var ${lPlayerSpeed.toFixed(1)} clicks in sec`;
            }
        }
    }, inputTag.value * 1000);
}

btnTag.addEventListener('click', onclickHandler);

// Custom feature. Players speed.
