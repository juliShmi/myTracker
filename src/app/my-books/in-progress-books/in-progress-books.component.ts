import { Component, Input, Output } from "@angular/core";
import { BookStatus } from "../book-status";
import { Book } from "../book.model";
import { BooksService } from "../books.service";

@Component({
  selector: "app-in-progress-books",
  templateUrl: "./in-progress-books.component.html",
  styleUrls: ["./in-progress-books.component.css"],
})
export class InProgressBooksComponent {
  books: Book[];

  constructor(private booksService: BooksService) {
    this.books = booksService
      .getBooks()
      .filter((Book) => Book.status === BookStatus.inProgress);
  }
}
