import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  saveBookForm!: FormGroup;
  id!: string;

  constructor(private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.getOneById(this.id)
      .subscribe((book: any) => {
        this.saveBookForm = this.fb.group({
          title: [book.title],
          author: [book.author],
          cover: [book.cover],
        })
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.saveBookForm.value;
    formData.id = this.id;
    this.bookService.update(formData);
  }

}
