const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = true;

let timerId = null;

btnStart.addEventListener('click', () => {
  disabledStart();

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  disabledStop();
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disabledStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function disabledStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;
}
