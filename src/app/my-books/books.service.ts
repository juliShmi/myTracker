import { Injectable, Input } from "@angular/core";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getBooks() {
    return this.books;
  }

  addToInProgress(book: Book) {
    book.status = "inProgress";
    console.log(book);
    this.books.push(book);
  }
}
