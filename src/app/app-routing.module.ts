import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'save', component: BookAddComponent },
  { path: ':id', component: BookDetailComponent },
  { path: 'edit/:id', component: BookEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
