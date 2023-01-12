import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyBooksComponent } from "./my-books/my-books.component";
import { MyToDoComponent } from "./my-to-do/my-to-do.component";

const routes: Routes = [
  { path: "books", component: MyBooksComponent },
  { path: "todo", component: MyToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
