const myLibrary = [];
const newBookBtn = document.getElementById('new-book');
const newBookForm = document.querySelector('.form');
const submitBtn = document.getElementById('submit-btn');
const displayContainer = document.querySelector('.booksContainer');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead) {

  const newBook = new Book(newTitle, newAuthor, newPages, newRead);

  myLibrary.push(newBook);

  console.log(myLibrary);
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

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove Book";
        card.appendChild(removeBtn);

        removeBtn.addEventListener('click', function() {
            displayContainer.removeChild(card)

            for (i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].id == book.id) {
                    myLibrary.splice(i, 1);
                }
            }

            console.log(myLibrary);
        })  

        const toggleReadBtn = document.createElement('button');
        removeBtn.textContent = "Change Read Status";
        card.appendChild(toggleReadBtn);

        toggleReadBtn.addEventListener('click', function() {
            if (bookRead.textContent = "read") {
                bookRead.textContent = "Not read";
            }
            else {
                bookRead.textContent = "read"
            }
        })

        displayContainer.appendChild(card);
    });
}

newBookBtn.addEventListener('click', function() {
    newBookForm.removeAttribute('hidden');
})

submitBtn.addEventListener('click', function() {
    displayContainer.innerHTML = '';

    const inputTitleElement = document.getElementById('title');
    const inputAuthorElement = document.getElementById('author');
    const inputPagesElement = document.getElementById('pages');
    const inputReadElement = document.querySelector('input[name="choice"]:checked')

    const inputTitleValue = inputTitleElement.value;
    const inputAuthorValue = inputAuthorElement.value;
    const inputPagesValue = inputPagesElement.value;
    const inputReadValue = inputReadElement.value;

    addBookToLibrary(inputTitleValue, inputAuthorValue, inputPagesValue, inputReadValue);
    displayBooks();
})


displayBooks();