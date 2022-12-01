class Component {
    static bookscontainer = document.querySelector('.books');

    static makeGrey(book, index) {
      const isGrey = book.node.classList.contains('grey');
      if (index % 2 === 0 && !isGrey) {
        book.node.classList.add('grey');
      } else if (isGrey && index % 2 !== 0) {
        book.node.classList.remove('grey');
      }
    }

    static createBooksElements = (book, myBooks) => {
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
      this.bookscontainer.appendChild(div);

      return div;
    };
}

export default Component;