import Component from './Component.js';

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

    add(book, myBooks) {
      const node = Component.createBooksElements(book, myBooks);
      book.node = node;
      this.array.push(book);
      this.updateStorage();
    }

    remove(i) {
      this.Bookscontainer.removeChild(this.array[i].node);
      this.array.splice(i, 1);
      this.updateStorage();
    }
}

export default Books;