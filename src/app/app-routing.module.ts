import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinishedBooksComponent } from "./my-books/finished-books/finished-books.component";
import { InProgressBooksComponent } from "./my-books/in-progress-books/in-progress-books.component";
import { MyBooksComponent } from "./my-books/my-books.component";
import { WantToReadBooksComponent } from "./my-books/want-to-read-books/want-to-read-books.component";
import { MyToDoComponent } from "./my-to-do/my-to-do.component";

const routes: Routes = [
  { path: "books", component: MyBooksComponent },
  { path: "todo", component: MyToDoComponent },
  { path: "books/in-progress", component: InProgressBooksComponent },
  { path: "books/want-to-read", component: WantToReadBooksComponent },
  { path: "books/finished-books", component: FinishedBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
