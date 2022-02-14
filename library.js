const main = document.querySelector('.main');
const newBookBtn = document.querySelector('.newBookBtn');
const closeButton = document.querySelector('.closeButton');
const overlay = document.getElementById('overlay');
const modal = document.querySelector('#modal');

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet" );
let asdf = new Book("The asdf", "1234", "69 pages", "read" );
let qwer = new Book("The qwer", "5678", "420 pages", "not read yet" );
let myLibrary = [theHobbit, asdf, qwer];

function addBooks() {
  myLibrary.forEach(function(e) {
    let bookNew = document.createElement('div');
    let bookIndex = myLibrary.indexOf(e).toString();
    bookNew.setAttribute('data-index', bookIndex)
    main.appendChild(bookNew);

  });
}

addBooks(theHobbit, asdf, qwer);

newBookBtn.addEventListener("click", function() {
  modal.classList.toggle("show-modal");
});
closeButton.addEventListener("click", function() {
  modal.classList.toggle("show-modal");
});
