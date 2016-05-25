import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

var app = document.querySelector('#app');
var input = document.querySelector('#todoInput');
var todosEl = document.querySelector('#todos');
var addButton = document.querySelector('#addButton');
var clickInput = Observable.fromEvent(addButton, 'click');
var inputKeyup = Observable.fromEvent(input, 'keyup');
var removeTodoStream = Observable.fromEvent(document, 'remove-todo');

class Todo {
  constructor(text) {
    this.text = text;
    this.done = false;
    this.timestamp = new Date().getTime();
  }
};

var enterKeyup = inputKeyup.filter(e => e.keyCode === 13)
var submitStream = Observable.merge(clickInput, enterKeyup);

submitStream
  .filter(_ => !input.value)
  .forEach(_ => input.invalid = true);

submitStream
  .filter(_ => !!input.value)
  .map(_ => input.value)
  .forEach(val => {
    input.invalid = false;
    input.value = '';
    todosEl.ref.push(new Todo(val));
  });

removeTodoStream
  .map(e => e.detail)
  .forEach(todo => todosEl.ref.child(todo.$key).remove());

app.removeTodo = function(e) {
  var index = (target => {
    var rawIndex = parseInt(target.getAttribute('data-todo-index'));
    if (isNaN(rawIndex)) return -1;
    return rawIndex;
  })(Polymer.dom(e).localTarget);

  if (~index) {
    app.fire('remove-todo', todosEl.data[index]);
  }
};