import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// const input = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start]');
// const timer = document.querySelector('.timer');

// const dataDays = document.querySelector('[data-days]');
// const dataHours = document.querySelector('[data-hours]');
// const dataMinutes = document.querySelector('[data-minutes]');
// const dataSeconds = document.querySelector('[data-seconds]');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// const flpCalendar = flatpickr(input, options,);

// let pickedTime;
// let currentTime;
// let intervalId = null;

// disableBtn(startBtn);
// flpCalendar.config.onChange.push(dataChange);
// startBtn.addEventListener('click', onStartBtnClick);

// function dataChange(){
//   pickedTime = flpCalendar.selectedDates[0];
// const differenceData = pickedTime - new Date();

// if (differenceData <= 0) {
//   disableBtn(startBtn);
//   flpCalendar.close();
//   Notiflix.Notify.failure('Please choose a date in the future');
// } else {
//   enableBtn(startBtn);
// }
// }


// function onStartBtnClick() {
//   intervalId = setInterval(() => {
//   currentTime = new Date();
//     let differenceTime = pickedTime - currentTime;

//     if (differenceTime < 0) {
//       clearInterval(intervalId);
//       return;
//     }
//     changeTime(convertMs(differenceTime));
//   }, 1000);
// }

// function changeTime({ days, hours, minutes, seconds }) {
//   dataDays.textContent = addLeadingZero(days);
//   dataHours.textContent = addLeadingZero(hours);
//   dataMinutes.textContent = addLeadingZero(minutes);
//   dataSeconds.textContent = addLeadingZero(seconds);
// }

// function disableBtn(btn) {
//   btn.setAttribute('disabled', true);
// }

// function enableBtn(btn) {
//   btn.removeAttribute('disabled');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return value.toString().padStart(2, 0);
// }




const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const calendar = flatpickr(inputEl, options);

let pickedTime;
let currentTime;
let intervalId = null;

disableBtn(startBtn);
calendar.config.onChange.push(onDataChange);
startBtn.addEventListener('click', onStartBtnClick);

function onDataChange() {
  pickedTime = calendar.selectedDates[0];
  const dateDifference = pickedTime - new Date();

  if (dateDifference <= 0) {
    disableBtn(startBtn);
    calendar.close();
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    enableBtn(startBtn);
  }
}

function onStartBtnClick() {
  intervalId = setInterval(() => {
    currentTime = new Date();

    let timeDifference = pickedTime - currentTime;

    if (timeDifference < 0) {
      clearInterval(intervalId);
      return;
    }
    changeTimeInterface(convertMs(timeDifference));
  }, 1000);
}

function changeTimeInterface({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function disableBtn(btn) {
  btn.setAttribute('disabled', true);
}

function enableBtn(btn) {
  btn.removeAttribute('disabled');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}