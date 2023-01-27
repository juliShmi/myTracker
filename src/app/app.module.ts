import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyBooksComponent } from "./my-books/my-books.component";
import { MyToDoComponent } from "./my-to-do/my-to-do.component";
import { HeadersComponent } from "./headers/headers.component";
import { WantToReadBooksComponent } from "./my-books/want-to-read-books/want-to-read-books.component";
import { InProgressBooksComponent } from "./my-books/in-progress-books/in-progress-books.component";
import { FinishedBooksComponent } from "./my-books/finished-books/finished-books.component";
import { BooksService } from "./my-books/books.service";
import { BookItemComponent } from "./my-books/book-item/book-item.component";
import { BookItemButtonsComponent } from "./my-books/book-item/book-item-buttons/book-item-buttons.component";
import { Dropdown } from "./my-books/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    MyBooksComponent,
    MyToDoComponent,
    HeadersComponent,
    WantToReadBooksComponent,
    InProgressBooksComponent,
    FinishedBooksComponent,
    BookItemComponent,
    BookItemButtonsComponent,
    Dropdown,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
