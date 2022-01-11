function Book(title, author, pages, is_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.is_read = is_read;
  this.info = function () {
    return title + "by" + author + ", " + pages + ", " + is_read;
  };
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "fully read");
console.log(theHobbit.info);
