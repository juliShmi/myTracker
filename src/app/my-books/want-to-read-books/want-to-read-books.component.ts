import { Component, ElementRef, ViewChild } from "@angular/core";
import { Book } from "../book.model";

@Component({
  selector: "app-want-to-read-books",
  templateUrl: "./want-to-read-books.component.html",
  styleUrls: ["./want-to-read-books.component.css"],
})
export class WantToReadBooksComponent {
  @ViewChild("newAuthor") newAuthorInputRef: ElementRef;
  @ViewChild("newTitle") newTitleInputRef: ElementRef;

  books: Book[] = [
    new Book("Харуки Мураками", "О чем я говорю, когда говорю о беге"),
    new Book("Эдгар По", "Золотой жук"),
  ];

  onAddNewBook() {
    const authorAdded = this.newAuthorInputRef.nativeElement.value;
    const titleAdded = this.newTitleInputRef.nativeElement.value;
    const newBook = new Book(authorAdded, titleAdded);
    this.books.push(newBook);
  }
}
