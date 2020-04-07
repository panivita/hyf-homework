const inputTag = document.getElementById('time-game');
const btnTag = document.getElementById('start-game');
const pTag = document.getElementById('game-over');
const pCounterS = document.getElementById('s-counter');
const pCounterL = document.getElementById('l-counter');
const pVinnerS = document.getElementById('s-vinner');
const pVinnerL = document.getElementById('l-vinner');
let counterS = 0;
let counterL = 0;

const keypressCounter = () => {
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

const onclickHandler = () => setTimeout(() => {
    pTag.textContent = 'Time has run out';
    if (counterS > counterL) {
        pVinnerS.textContent = 'Vinner!';
    } else if (counterS < counterL) {
        pVinnerL.textContent = 'Vinner!';
    }
    else {
        pVinnerS.textContent = 'Dead heat!';
        pVinnerL.textContent = 'Dead heat!';
    }
}, inputTag.value * 1000);

btnTag.addEventListener('click', onclickHandler);


