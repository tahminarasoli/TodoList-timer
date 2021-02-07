
import {pomo} from '../timer/data.js'
import {
     logger
  } from '../../lib/logger.js'
export default class Display{


    displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const adjustedHour = hour > 12 ? hour - 12 : hour;
        const minutes = end.getMinutes();
        pomo.endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
      }

      displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
        document.title = display;
        pomo.timerDisplay.textContent = display;
      }
}

logger.push({
    class: 'Display'
});