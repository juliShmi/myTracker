import { Component } from "@angular/core";
import { Book } from "../book.model";

@Component({
  selector: "app-in-progress-books",
  templateUrl: "./in-progress-books.component.html",
  styleUrls: ["./in-progress-books.component.css"],
})
export class InProgressBooksComponent {
  booksInProgress: Book[] = [new Book("Bernhard Schlink", "Der Vorleser")];
}
