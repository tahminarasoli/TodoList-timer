
import {pomo} from '../timer/data.js'
import {startTimer} from '../handlers/timer.js'

pomo.buttons.forEach(button => button.addEventListener('click', startTimer));