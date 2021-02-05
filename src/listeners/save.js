'use strict';

import { save } from '../handlers/saveLocal.js';

let btnSave = document.querySelector('#save');

btnSave.addEventListener('click', save);