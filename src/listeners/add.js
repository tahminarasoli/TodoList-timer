'use strict';

import { createUI } from '../handlers/createUI.js';

let btnAdd = document.querySelector('button[type="submit"]');

btnAdd.addEventListener('click', createUI);



