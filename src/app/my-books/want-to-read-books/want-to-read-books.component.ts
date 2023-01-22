import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { BookStatus } from "../book-status";
import { Book } from "../book.model";
import { BooksService } from "../books.service";
import { InProgressBooksComponent } from "../in-progress-books/in-progress-books.component";

@Component({
  selector: "app-want-to-read-books",
  templateUrl: "./want-to-read-books.component.html",
  styleUrls: ["./want-to-read-books.component.css"],
})
export class WantToReadBooksComponent {
  @ViewChild("newAuthor") newAuthorInputRef: ElementRef;
  @ViewChild("newTitle") newTitleInputRef: ElementRef;

  books: Book[];

  constructor(private booksService: BooksService) {
    this.books = booksService
      .getBooks()
      .filter((Book) => Book.status === BookStatus.wantToRead);
  }

  onAddNewBook() {
    const authorAdded = this.newAuthorInputRef.nativeElement.value;
    const titleAdded = this.newTitleInputRef.nativeElement.value;
    const newBook = new Book(authorAdded, titleAdded);
    this.books.push(newBook);
  }

  onAddToInProgress(book: Book) {
    this.booksService.addToInProgress(book);
  }

  // onDeleteBook() {
  //   const index = this.books.indexOf(this.book);
  //   this.booksService.deleteBook(index);
  // }
}
