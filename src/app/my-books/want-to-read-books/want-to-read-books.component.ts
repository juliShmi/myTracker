import { Component } from "@angular/core";
import { Book } from "../book.model";

@Component({
  selector: "app-want-to-read-books",
  templateUrl: "./want-to-read-books.component.html",
  styleUrls: ["./want-to-read-books.component.css"],
})
export class WantToReadBooksComponent {
  books: Book[] = [
    new Book("Харуки Мураками", "О чем я говорю, когда говорю о беге"),
    new Book("Эдгар По", "Золотой жук"),
  ];
}
