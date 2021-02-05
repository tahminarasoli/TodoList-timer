<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [classes](#classes)
  - [Todo.js](#srcclassesTodojs)
  - [Validator.js](#srcclassesValidatorjs)
- [handlers](#handlers)
  - [create-new-list.js](#srchandlerscreate-new-listjs)
  - [createUI.js](#srchandlerscreateUIjs)
  - [deleteTodoList.js](#srchandlersdeleteTodoListjs)
  - [loadTodos.js](#srchandlersloadTodosjs)
  - [saveLocal.js](#srchandlerssaveLocaljs)
- [listeners](#listeners)
  - [add.js](#srclistenersaddjs)
  - [delete.js](#srclistenersdeletejs)
  - [loadPage.js](#srclistenersloadPagejs)
  - [save.js](#srclistenerssavejs)
- [views](#views)
  - [a-view.js](#srcviewsa-viewjs)
- [init.js](#srcinitjs)
- [list-prototype.js](#srclist-prototypejs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# classes

---

### [./src/classes/Todo.js](./src/classes/Todo.js?study)

<a name="render"></a>

## render()

Renders a view containing a piece of the UI;
returns the UI element.

---

### [./src/classes/Validator.js](./src/classes/Validator.js?study)

<a name="showAlert"></a>

## showAlert(message, className)

showAlert method will show an alert message when called

| Param     | Type                | Description    |
| --------- | ------------------- | -------------- |
| message   | <code>string</code> | a text message |
| className | <code>string</code> | a CSS class    |

[TOP](#DOCS)

---

---

# handlers

---

### [./src/handlers/create-new-list.js](./src/handlers/create-new-list.js?study)

---

### [./src/handlers/createUI.js](./src/handlers/createUI.js?study)

<a name="createUI"></a>

## createUI(e)

creates a todo object and
creates a piece of UI calling the render function in the object
and appends it to the DOM.

| Param | Type               |
| ----- | ------------------ |
| e     | <code>event</code> |

---

### [./src/handlers/deleteTodoList.js](./src/handlers/deleteTodoList.js?study)

<a name="deleteAll"></a>

## deleteAll()

deletes all the todo's UI elements from the DOM
and empties the localStorage.

---

### [./src/handlers/loadTodos.js](./src/handlers/loadTodos.js?study)

<a name="loadStorage"></a>

## loadStorage()

It checks if there are any items in the localStorage
and creates UI elements (todo's elements) from them.
Then it adds them to the DOM.

---

### [./src/handlers/saveLocal.js](./src/handlers/saveLocal.js?study)

<a name="save"></a>

## save()

It checks if there are any todo's UI elements in the DOM
and save them in the localStorage.

[TOP](#DOCS)

---

---

# listeners

---

### [./src/listeners/add.js](./src/listeners/add.js?study)

---

### [./src/listeners/delete.js](./src/listeners/delete.js?study)

---

### [./src/listeners/loadPage.js](./src/listeners/loadPage.js?study)

---

### [./src/listeners/save.js](./src/listeners/save.js?study)

[TOP](#DOCS)

---

---

# views

---

### [./src/views/a-view.js](./src/views/a-view.js?study)

[TOP](#DOCS)

---

---

## [./src/init.js](./src/init.js?study)

---

## [./src/list-prototype.js](./src/list-prototype.js?study)

<!-- END DOCS -->
