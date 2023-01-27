import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinishedBooksComponent } from "./my-books/finished-books/finished-books.component";
import { InProgressBooksComponent } from "./my-books/in-progress-books/in-progress-books.component";
import { MyBooksComponent } from "./my-books/my-books.component";
import { WantToReadBooksComponent } from "./my-books/want-to-read-books/want-to-read-books.component";
import { MyToDoComponent } from "./my-to-do/my-to-do.component";

const routes: Routes = [
  { path: "", redirectTo: "/to-do", pathMatch: "full" },
  { path: "books", component: MyBooksComponent },
  { path: "want-to-read", component: WantToReadBooksComponent },
  { path: "in-progress", component: InProgressBooksComponent },
  { path: "finished", component: FinishedBooksComponent },
  { path: "to-do", component: MyToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
