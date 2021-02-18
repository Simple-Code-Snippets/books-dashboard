import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  saveBookForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.saveBookForm = this.fb.group({
      title: [null],
      author: [null],
      cover: [null],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.saveBookForm.value;
    this.bookService.save(formData);
  }

}
