import { BookStatus } from "./book-status";

export class Book {
  public author: string;
  public title: string;
  public image: string;
  public status: string;

  constructor(author: string, title: string) {
    this.author = author;
    this.title = title;
    this.image = "https://pngimg.com/uploads/book/book_PNG51092.png";
    this.status = BookStatus.wantToRead;
  }
}
