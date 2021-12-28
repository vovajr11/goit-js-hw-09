import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('.value[data-days]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  secondsEl: document.querySelector('.value[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const deadline = new Date(selectedDates[0].toString());
    const currentDate = new Date();
    const totalMs = deadline - currentDate;

    if (totalMs < 0) {
      return alert('Please choose a date in the future');
    }

    convertMs(totalMs);
  },
};

flatpickr(refs.datetimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startTimer() {
  //   const { days, hours, minutes, seconds } = deadline;
  const res = convertMs(ms);

  console.log(res, 'res');
  //   refs.daysEl.innerHTML = days;
  //   refs.hoursEl.innerHTML = formatTime(hours);
  //   refs.minutesEl.innerHTML = formatTime(minutes);
  //   refs.secondsEl.innerHTML = formatTime(seconds);
}

startTimer();
setInterval(startTimer, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// refs.startBtn.addEventListener('click', startTimer);
