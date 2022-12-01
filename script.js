import Book from './Book.js';
import Books from './Books.js';
import Component from './Component.js';

const Form = document.getElementById('booksform');
let myBooks = null;

Form.onsubmit = (e) => {
  e.preventDefault();
  myBooks.add(new Book(myBooks.count, Form.title.value, Form.name.value), myBooks);
  Form.title.value = '';
  Form.name.value = '';
};

window.addEventListener('DOMContentLoaded', () => {
  myBooks = new Books();
  const objects = localStorage.getItem('books').split('|');

  if (objects[0] === '') { return; }

  myBooks.array = objects.map((object) => JSON.parse(object));

  myBooks.array.forEach((book, index) => {
    const node = Component.createBooksElements(book, myBooks);
    book.node = node;
    Component.makeGrey(book, index);
  });
});