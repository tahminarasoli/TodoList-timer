'use strict';

import { deleteAll } from '../handlers/deleteTodoList.js';

let btnDelete = document.querySelector('#deleteAll');

btnDelete.addEventListener('click', deleteAll);