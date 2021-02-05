'use strict';

import { logger } from '../../lib/logger.js';

/**
 *  The class Validator containing a piece of UI
 *  with id(number), title(string) and description(text).
 * 
 *  It has a static method (ShowAlert) that returns an alert message.
 */
export default class Validator {
  /**
   * showAlert method will show an alert message when called
   * 
   * @param  {string} message - a text message
   * @param  {string} className - a CSS class
   * 
   */
  showAlert(message, className){
          const div = document.createElement('div');
          div.className = `alert alert-${className}`;
          div.appendChild(document.createTextNode(message));
          const container = document.querySelector('.form-parent');
          const form = document.querySelector('#todo-form');
          container.insertBefore(div, form);
          setTimeout(() => document.querySelector('.alert').remove(), 3000)
      }
}

logger.push({
  class: 'Validator'
});