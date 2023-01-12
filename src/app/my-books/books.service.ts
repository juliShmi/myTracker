import { Injectable } from "@angular/core";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
  private books: Book[] = [
    new Book("Харуки Мураками", "О чем я говорю, когда говорю о беге"),
    new Book("Эдгар По", "Золотой жук"),
  ];

  getBooks() {
    return this.books.slice();
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
  }
}
