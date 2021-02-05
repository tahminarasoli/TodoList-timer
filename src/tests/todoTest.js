//check https://github.com/HackYourFutureBelgium/debugging/blob/master/isolate/z24-for-in/exercises/1-all-defined.test.js
//https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/

/* example of unit test */

import Todo from '../classes/Todo.js';
import Validator from '../classes/Validator.js';

//Unit test with Mocha and Chai
const assert = chai.assert;
const expect = chai.expect;

console.log('unit tests');

describe('Filed test for Todo class', function(){
    const myId = '1';
    const myTitle = 'food';
    const myDescription = 'Buy bread';

    it('check if myId is a string', function(){
        assert.isString(myId);
    });
    it('check if myTitle is a string', function(){
        assert.isString(myTitle);
    });
    it('check if myDescription is a string', function(){
        assert.isString(myDescription);
    });
    it('check if myTodo is an object new Todo(myId, myTitle, myDescription)', function(){
        const myTodo = new Todo(myId, myTitle, myDescription);
        assert.isObject(myTodo);
    });
    const msg = "check if myTodo2 is an istance of Todo (trivial) \n"+
    "const data = ['2','homework', 'do exercises from 1 to 5']"+
    " const myTodo2 = new Todo(data[0], data[1], data[2])";
    it(msg, function(){
        const data = ['2','homework', 'do exercises from 1 to 5']
        const myTodo2 = new Todo(data[0], data[1], data[2]);
        expect(myTodo2).to.be.an.instanceof(Todo);
    });
});

describe('other tests', function(){

    it('check if Validator is a function/object', function(){
        assert.isFunction(Validator);
    });
})

mocha.run();