import Books from './Books.js';
import Component from './Component.js';

const Form = document.getElementById('booksform');
let myBooks = null;

Form.onsubmit = () => {
  myBooks.add(Form);
};

window.addEventListener('DOMContentLoaded', () => {
  myBooks = new Books();
  Component.loadFromStorage(myBooks);
});