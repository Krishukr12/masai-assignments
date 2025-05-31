// Fixing Array and Object Operations

const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    isValidBook(book) {
      if (
        !book ||
        typeof book !== "object" ||
        typeof book.title !== "string" ||
        book.title.trim() === "" ||
        typeof book.author !== "string" ||
        book.author.trim() === "" ||
        typeof book.year !== "number" ||
        isNaN(book.year) ||
        book.year < 0
      ) {
        return false;
      }
      return true;
    },
  
    addBook(book) {
      if (!this.isValidBook(book)) {
        console.error("Invalid book object");
        return;
      }
  
      const existing = this.findBookByTitle(book.title);
      if (existing) {
        console.warn(`Book with title "${book.title}" already exists.`);
        return;
      }
  
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    },
  
    findBookByTitle(title) {
      return this.books.find((book) => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex((book) => book.title === title);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book "${title}" removed.`);
      } else {
        console.warn("Book not found.");
      }
    },
  };
  