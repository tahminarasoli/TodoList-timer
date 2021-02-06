
import {displayTimeLeft} from '../handlers/displayTimeLeft.js'
import {displayEndTime} from '../handlers/displayEndTime.js'

let countdown;
export function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}



export function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}


