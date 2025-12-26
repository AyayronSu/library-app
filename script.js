const myLibrary = [
    {
        title: "test title",
        author: "test author",
        pages: "test pages",
        read: "test read"
    }
];
const displayContainer = document.querySelector('.booksContainer');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead) {
  // take params, create a book then store it in the array
  const newBook = new Book(newTitle, newAuthor, newPages, newRead);

  myLibrary.push(newBook);
}

function displayBooks() {
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.style.border = '1px solid black';

        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);

        displayContainer.appendChild(card);
    });
}

displayBooks();