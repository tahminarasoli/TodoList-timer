'use strict';

import { logger } from '../../lib/logger.js';

//todo class
/**
 *  The class Todo will create a todo object
 *  with an id(number), a title(string) and a description(text).
 * 
 *  A todo element is a reminder describing something to be done
 *  once is done it can be removed.
 * 
 * @param  {string} id -unique id of the todo object
 * @param  {string} title - the title of the todo object
 * @param  {string} description -the description of the todo object
 */
export default class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    /**
     * Renders a view containing a piece of the UI;
     * returns the UI element.
     *
     */
    render() {
        //build the UI
        const tr = document.createElement('TR');
        tr.style.border = "1px solid #cfc9c9";
        tr.id = this.id;
        const tdTitle = document.createElement('TD');
        const txtInput = document.createElement("INPUT");
        txtInput.setAttribute("type", "text");
        txtInput.setAttribute("maxlength", 60);
        txtInput.classList.add('text-field');
        txtInput.value = this.title;
        tdTitle.appendChild(txtInput);
        tr.appendChild(tdTitle);
        const tdDescription = document.createElement('TD');
        const txtDes = document.createElement("INPUT");
        txtDes.setAttribute("type", "text");
        txtDes.setAttribute("maxlength", 60);
        txtDes.classList.add('text-field');
        txtDes.value = this.description;
        tdDescription.appendChild(txtDes);
        tr.appendChild(tdDescription);
        const closeBtn = document.createElement('a');
        closeBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'delete', 'end');
        //remove the UI element
        const toRemove = 'this.parentNode.parentNode.removeChild(this.parentNode)';
        closeBtn.setAttribute('onclick', toRemove);
        closeBtn.innerHTML = 'X';
        tr.appendChild(closeBtn);
        //the text field is editable
        tr.setAttribute('contenteditable', true);
        return tr;     
    }
}

logger.push({
    class: 'Todo'
});