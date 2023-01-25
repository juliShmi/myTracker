import { Component, Input } from "@angular/core";
import { Book } from "../../book.model";
import { BooksService } from "../../books.service";

@Component({
  selector: "app-book-item-buttons",
  templateUrl: "./book-item-buttons.component.html",
  styleUrls: ["./book-item-buttons.component.css"],
})
export class BookItemButtonsComponent {
  @Input() book: Book;

  constructor(private bookService: BooksService) {}

  onAddToInProgress(book: Book) {
    this.bookService.addToInProgress(book);
  }

  onDelete(book: Book) {
    this.bookService.delete(book);
  }
}
