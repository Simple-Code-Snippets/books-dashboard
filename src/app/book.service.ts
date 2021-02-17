import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  add(book) {
    this.http.post(this.apiUrl + 'save', book, {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}).subscribe()
  }
}
