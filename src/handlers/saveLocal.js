'use strict';

import { logger } from '../../lib/logger.js';

/**
 * 
 *  It checks if there are any todo's UI elements in the DOM
 *  and save them in the localStorage.
 * 
 */
export function save(){
    //empty localStorage
    localStorage.clear();
    const obj = {};
    const tbody = document.querySelector('#todo-list');
    const tableRows = tbody.getElementsByTagName('tr');
    const rowCount = tableRows.length;
    for (let x = 0; x < rowCount; x++) {
        //store id
        obj.id = tableRows[x].id;
        const td = tableRows[x].getElementsByTagName('td');
        //store the text of the 2 tds in the todo
        obj.title = td[0].childNodes[0].value;
        obj.description = td[1].childNodes[0].value;
        //serialization
        const todo = JSON.stringify(obj);
        localStorage.setItem(obj.id, todo);
    }
}

logger.push({
    handler: 'save'
});