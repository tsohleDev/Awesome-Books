import Books from './Books.js';
import Component from './Component.js';
import { DateTime } from './luxon.js';

const Form = document.getElementById('booksform');
const time = document.getElementById('time');
let myBooks = null;

Form.onsubmit = () => {
  myBooks.add(Form);
};

window.addEventListener('DOMContentLoaded', () => {
  myBooks = new Books();
  time.innerHTML = DateTime.now().toFormat('MMMM dd, yyyy hh:mm');
  Component.loadFromStorage(myBooks);
});

// Single Page
const links = document.querySelectorAll('#link');
const h1 = document.querySelector('#heading');
const sections = {
  List: document.querySelector('#list'),
  'Add new': document.querySelector('#form'),
  Contact: document.querySelector('#contact'),
};

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const node = e.target.innerHTML;

    switch (node) {
      case 'List':
        h1.innerHTML = 'All awesome books';
        sections[node].style.display = 'block';
        sections['Add new'].style.display = 'none';
        sections.Contact.style.display = 'none';
        break;
      case 'Add new':
        h1.innerHTML = 'Add a new book';
        sections[node].style.display = 'block';
        sections.List.style.display = 'none';
        sections.Contact.style.display = 'none';
        break;
      case 'Contact':
        h1.innerHTML = 'Contact information';
        sections[node].style.display = 'flex';
        sections['Add new'].style.display = 'none';
        sections.LIST.style.display = 'none';
        break;
      default:
        break;
    }
  });
});
