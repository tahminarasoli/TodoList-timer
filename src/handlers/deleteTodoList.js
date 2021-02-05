'use strict';

import { logger } from '../../lib/logger.js';
/**
 * 
 *  deletes all the todo's UI elements from the DOM
 *  and empties the localStorage.
 */
export function deleteAll() {
    const tbody = document.querySelector('#todo-list');
    var tableRows = tbody.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    //erase elements
    for (var x = rowCount - 1; x >= 0; x--) {
        tbody.removeChild(tableRows[x]);
    }
    //empty localStorage
    localStorage.clear();
}

logger.push({
    handler: 'deleteAll'
});