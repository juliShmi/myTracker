import { Injectable, Input } from "@angular/core";
import { BookStatus } from "./book-status";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getBooks() {
    return this.books;
  }

  addToInProgress(book: Book) {
    book.status = BookStatus.inProgress;
    this.books.push(book);
  }

  delete(book: Book) {
    book.status = BookStatus.deleted;
    console.log(book);
    this.books.splice(this.books.indexOf(book), 1);
  }
}
