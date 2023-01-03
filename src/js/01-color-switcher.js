function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  disableBtn(startBtn);
  enableBtn(stopBtn);
}

startBtn.addEventListener('click', () => {
  intervalId = setInterval(()=>{
body.style.backgroundColor = getRandomHexColor()

}, 1000, );
}) 

function onStopBtnClick() {
  disableBtn(stopBtn);
  enableBtn(startBtn);
  clearInterval(intervalId);
}

function disableBtn(btn) {
  btn.setAttribute('disabled', true);
}

function enableBtn(btn) {
  btn.removeAttribute('disabled');
}

