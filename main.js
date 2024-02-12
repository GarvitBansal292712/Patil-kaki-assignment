const timerDisplay = document.getElementById('timer');

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  const tenMinutes = 60 * 10;
  startTimer(tenMinutes, timerDisplay);
};



// Slide-in Form
setTimeout(function() {
  document.getElementById('slide-in-form').style.bottom = '0';
}, 15000);



// Close button functionality
document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('slide-in-form').style.bottom = '-400px';
});
