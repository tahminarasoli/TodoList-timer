'use strict';

import Todo from '../classes/Todo.js';
import {
  logger
} from '../../lib/logger.js';

/**
 * 
 *  It checks if there are any items in the localStorage
 *  and creates UI elements (todo's elements) from them.
 *  Then it adds them to the DOM.
 */
export function loadStorage() {

  //localStore's pairs are not sorted
  function SortLocalStorage() {
    if (localStorage.length > 0) {
      var localStorageArray = new Array();
      for (let i = 0; i < localStorage.length; i++) {
        localStorageArray[i] = localStorage.key(i) + localStorage.getItem(localStorage.key(i));
      }
    }
    //create an array of strings from localStorage
    //and sort it
    var sortedArray = localStorageArray.sort();
    return sortedArray;
  }

  const sorted = SortLocalStorage();

  for (let i = 0; i < localStorage.length; i++) {

    //get the index from the sorted array element
    const sep = sorted[i].indexOf("{");
    const index = sorted[i].substring(0, sep);
    //get the item using the index
    var value = localStorage.getItem(index);
    //deserialization 
    const des = JSON.parse(value);
    const id = des.id;
    const title = des.title;
    const message = des.description;
    const container = document.querySelector('#todo-list');
    const todo = new Todo(id, title, message);
    container.appendChild(todo.render());

    logger.push({
      object: 'todo'
    });

  }
}

logger.push({
  handler: 'loadStorage'
});