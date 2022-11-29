const Form = document.getElementById('booksform');
const Bookscontainer = document.querySelector('.books');
const bookname = Form.title;
const writer = Form.name;

let title = ''; let
  namey = '';

const books = [];

function Book(title, name, node = null) {
  this.id = books.length;
  this.title = title;
  this.name = name;
  this.node = node;
}

const updateStorage = () => {
  let string = '';
  books.forEach((book, index) => {
    book.id = index;
    string = `${string}${JSON.stringify(book)}|`;
  });
  string = string.substring(0, string.length - 1);
  localStorage.setItem('books', string);
};

const createBooksElements = (book) => {
  const Booksdiv = document.createElement('div');
  const BookTitle = document.createElement('p');
  const BookWritter = document.createElement('p');
  const remove = document.createElement('button');
  remove.innerHTML = 'Remove';
  remove.addEventListener('click', () => {
    books.forEach((b) => {
      if (b.id === book.id) {
        const i = Bookscontainer.removeChild(books[books.indexOf(b)].node);
        books.splice(i, 1);
      }
    });

    updateStorage();
  });
  const line = document.createElement('hr');

  BookTitle.innerText = ` Title: ${book.title}`;
  BookWritter.innerText = ` Writer: ${book.name}`;

  Booksdiv.append(BookTitle, BookWritter);
  Bookscontainer.appendChild(Booksdiv);
  Booksdiv.appendChild(remove);
  Booksdiv.appendChild(line);

  return Booksdiv;
};

const addBook = (book) => {
  const node = createBooksElements(book);
  book.node = node;
  books.push(book);
};

bookname.addEventListener('input', () => {
  title = bookname.value;
});

writer.addEventListener('input', () => {
  namey = writer.value;
});

Form.onsubmit = (e) => {
  e.preventDefault();
  addBook(new Book(title, namey));
  updateStorage();
};

window.addEventListener('DOMContentLoaded', () => {
  const objects = localStorage.getItem('books').split('|');
  objects.forEach((object) => {
    books.push(JSON.parse(object));
  });

  books.forEach((book) => {
    const node = createBooksElements(book);
    book.node = node;
  });
});
