let myLibrary = [];
const table = document.getElementById("book_table");
console.log(table);

function Book(title, author, pages, is_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.is_read = is_read;
  this.info = function () {
    var str = title + " by " + author + ", " + pages + ", " + is_read;
    return str;
  };
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function submitBook() {
  book_name = document.getElementById("name").value;
  author_name = document.getElementById("author").value;
  page_count = document.getElementById("pages").value;

  book = new Book(book_name, author_name, page_count);
  addBookToLibrary(book);
  closeForm();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  tableUpdate(book);
}

function tableUpdate(book) {
  row = document.createElement("tr");
  column1 = document.createElement("td");
  column2 = document.createElement("td");
  column3 = document.createElement("td");
  content1 = document.createTextNode(book.title);
  content2 = document.createTextNode(book.author);
  content3 = document.createTextNode(book.pages);
  column1.appendChild(content1);
  column2.appendChild(content2);
  column3.appendChild(content3);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  table.appendChild(row);
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 pages",
  "fully read"
);

const LotR1 = new Book(
  "The Lord of the Rings - The fellowship of the ring",
  "J.R.R Tolkien",
  "865 pages",
  "read 3 times"
);

const LotR2 = new Book(
  "The Lord of the Rings - The two towers",
  "J.R.R Tolkien",
  "640 pages",
  "read 3 times"
);
const LotR3 = new Book(
  "The Lord of the Rings - The return of the king",
  "J.R.R Tolkien",
  "365 pages",
  "read 3 times"
);

console.log(theHobbit.info());
console.log(LotR1.info());
console.log(LotR2.info());
console.log(LotR3.info());
addBookToLibrary(theHobbit);
addBookToLibrary(LotR1);
addBookToLibrary(LotR2);
addBookToLibrary(LotR3);
console.log(myLibrary);
displayBooks(myLibrary);
