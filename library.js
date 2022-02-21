const newBookBtn = document.querySelector(".newBookBtn");
const closeButton = document.querySelector(".closeButton");
const modal = document.querySelector("#modal");
const form = document.querySelector("form");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }
}

const library = new Library();

function addBooks() {
  const formTitle = document.querySelector("#title");
  const formAuthor = document.querySelector("#author");
  const formPages = document.querySelector("#pages");
  const libraryDiv = document.querySelector(".libraryDiv");
  
  //create userBook object and push into myLibrary array
  let userBook = new Book(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    "null"
  );
  library.myLibrary.push(userBook);

  //create userBook div container with data attribute == index number in myLibrary
  let bookIndex = library.myLibrary.indexOf(userBook).toString();
  let userBookDiv = document.createElement("div");
  userBookDiv.className = "userBookDiv";
  userBookDiv.setAttribute("data-index", bookIndex);
  libraryDiv.appendChild(userBookDiv);

  //create div rows
  let titleRow = document.createElement("div");
  titleRow.className = "titleRow";
  let authorRow = document.createElement("div");
  authorRow.className = "authorRow";
  let pagesRow = document.createElement("div");
  pagesRow.className = "pagesRow";
  let row4 = document.createElement("div");
  row4.className = "row4";
  userBookDiv.appendChild(titleRow);
  userBookDiv.appendChild(authorRow);
  userBookDiv.appendChild(pagesRow);
  userBookDiv.appendChild(row4);

  //create divs for property names
  let userBookDivTitle = document.createElement("div");
  userBookDivTitle.className = "userBookDivTitle";
  let userBookDivAuthor = document.createElement("div");
  userBookDivAuthor.className = "userBookDivAuthor";
  let userBookDivPages = document.createElement("div");
  userBookDivPages.className = "userBookDivPages";
  let checkboxDiv = document.createElement("div");
  checkboxDiv.className = "checkboxDiv";
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  checkbox.setAttribute("data-index", bookIndex);
  checkbox.className = "checkbox";
  let checkboxLabel = document.createElement("label");
  titleRow.appendChild(userBookDivTitle);
  authorRow.appendChild(userBookDivAuthor);
  pagesRow.appendChild(userBookDivPages);
  row4.appendChild(checkboxDiv);
  checkboxDiv.appendChild(checkbox);
  checkboxDiv.appendChild(checkboxLabel);

  //create divs for property values
  let userBookDivTitleValue = document.createElement("div");
  userBookDivTitleValue.className = "userBookDivTitleValue";
  let userBookDivAuthorValue = document.createElement("div");
  userBookDivAuthorValue.className = "userBookDivAuthorValue";
  let userBookDivPagesValue = document.createElement("div");
  userBookDivPagesValue.className = "userBookDivPagesValue";
  let removeButtonContainer = document.createElement("div");
  removeButtonContainer.className = "removeButtonContainer";
  let removeButton = document.createElement("button");
  removeButton.className = "removeButton";
  removeButton.setAttribute("data-index", bookIndex);

  titleRow.appendChild(userBookDivTitleValue);
  authorRow.appendChild(userBookDivAuthorValue);
  pagesRow.appendChild(userBookDivPagesValue);
  row4.appendChild(removeButtonContainer);
  removeButtonContainer.appendChild(removeButton);

  removeButton.addEventListener("click", function (e) {
    e.preventDefault();

    //removes the book from myLibrary
    let indexToRemove = parseInt(removeButton.dataset.index);
    library.myLibrary.splice(indexToRemove, 1);

    //removes the div from the page
    if (removeButton.dataset.index === userBookDiv.dataset.index) {
      userBookDiv.remove();
    }
  });

  //display book data in div
  userBookDivTitle.textContent = "Title:";
  userBookDivAuthor.textContent = "Author:";
  userBookDivPages.textContent = "Pages:";

  userBookDivTitleValue.textContent = userBook.title;
  userBookDivAuthorValue.textContent = userBook.author;
  userBookDivPagesValue.textContent = userBook.pages;
  removeButton.textContent = "Del";
  checkboxLabel.textContent = "Read";

  //checkbox changes div color
  checkbox.addEventListener("change", function () {
    if (checkbox.checked == true) {
      userBookDiv.style.backgroundColor = "#adf7b6";
      library.myLibrary[parseInt(this.dataset.index)].read = "true";
    } else {
      userBookDiv.style.backgroundColor = "#ffc09f";
      library.myLibrary[parseInt(this.dataset.index)].read = "false";
    }
  });
}

function toggleDiv() {
  modal.classList.toggle("toggle");
}

//eventlisteners
newBookBtn.addEventListener("click", function () {
  toggleDiv();
});

closeButton.addEventListener("click", function () {
  toggleDiv();
});

form.addEventListener("submit", function (e) {
  toggleDiv();
  e.preventDefault();
  addBooks();
  form.reset();
});
