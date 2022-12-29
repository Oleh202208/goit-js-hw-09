function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
console.log(bodyEl);
let chenchColor = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
chenchColor = setInterval(()=>{
bodyEl.style.backgroundColor = getRandomHexColor()
  startBtn.disabled = true;
  stopBtn.disabled = false;

}, 1000, );
}) 

stopBtn.addEventListener('click', ()=>{
  clearInterval(chenchColor);
  startBtn.disabled = false;
  stopBtn.disabled = true;
})

