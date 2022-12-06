import Component from './Component.js';
import Book from './Book.js';

class Books {
  constructor(array) {
    if (array) {
      this.array = array;
    } else {
      this.array = [];
    }
  }

  Bookscontainer = document.querySelector('.books')

  get count() {
    return this.array.length;
  }

  updateStorage = () => {
    let string = '';
    this.array.forEach((book, index) => {
      book.id = index;
      Component.makeGrey(book, index);
      string = `${string}${JSON.stringify(book)}|`;
    });
    string = string.substring(0, string.length - 1);
    localStorage.setItem('books', string);
  };

  add = (form) => {
    if (!form.title.value || !form.name.value) { return; }
    const book = new Book(this.count, form.title.value, form.name.value);
    form.title.value = '';
    form.name.value = '';
    const node = Component.createBooksElements(book, this);
    book.node = node;
    this.array.push(book);
    this.updateStorage();
  }

  remove = (i) => {
    this.Bookscontainer.removeChild(this.array[i].node);
    this.array.splice(i, 1);
    this.updateStorage();
  }
}

export default Books;