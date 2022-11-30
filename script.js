const Form = document.getElementById('booksform');
const Bookscontainer = document.querySelector('.books');
let myBooks = null;

function makeGrey(book, index) {
  const isGrey = book.node.classList.contains('grey');
  if (index % 2 === 0 && !isGrey) {
    book.node.classList.add('grey');
  } else if (isGrey && index % 2 !== 0) {
    book.node.classList.remove('grey');
  }
}

const createBooksElements = (book) => {
  const div = document.createElement('div');

  const info = document.createElement('p');
  info.innerText = `"${book.title}"\tby\t${book.name}`;

  const remove = document.createElement('button');
  remove.classList.contains('grey');
  remove.innerHTML = 'Remove';
  remove.addEventListener('click', () => {
    myBooks.remove(book.id, div);
  });

  div.append(info, remove);
  Bookscontainer.appendChild(div);

  return div;
};

class Books {
  constructor(array) {
    if (array) {
      this.array = array;
    } else {
      this.array = [];
    }
  }

  get count() {
    return this.array.length;
  }

    updateStorage = () => {
      let string = '';
      this.array.forEach((book, index) => {
        book.id = index;
        makeGrey(book, index);
        string = `${string}${JSON.stringify(book)}|`;
      });
      string = string.substring(0, string.length - 1);
      localStorage.setItem('books', string);
    };

    add(book) {
      const node = createBooksElements(book);
      book.node = node;
      this.array.push(book);
      this.updateStorage();
    }

    remove(i) {
      Bookscontainer.removeChild(this.array[i].node);
      this.array.splice(i, 1);
      this.updateStorage();
    }
}

function Book(id, title, name) {
  this.id = id;
  this.title = title;
  this.name = name;
  this.node = null;
}

Form.onsubmit = (e) => {
  e.preventDefault();
  myBooks.add(new Book(myBooks.count, Form.title.value, Form.name.value));
  Form.title.value = '';
  Form.name.value = '';
};

window.addEventListener('DOMContentLoaded', () => {
  myBooks = new Books();
  const objects = localStorage.getItem('books').split('|');

  if (objects[0] === '') { return; }

  myBooks.array = objects.map((object) => JSON.parse(object));

  myBooks.array.forEach((book, index) => {
    const node = createBooksElements(book);
    book.node = node;
    makeGrey(book, index);
  });
});