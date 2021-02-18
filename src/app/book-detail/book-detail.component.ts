import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!: Observable<any>;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getOneById(id);
  }

  ngOnInit(): void {
  }

}
