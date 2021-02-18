import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books!: Observable<any>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }

  delete(id) {
    this.bookService.delete(id);
  }

}
