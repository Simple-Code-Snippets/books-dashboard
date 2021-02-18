import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl + 'books');
  }

  getOneById(id) {
    return this.http.get(this.apiUrl + id)
  }

  save(book) {
    this.http.post(this.apiUrl + 'save', book, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .subscribe()
  }

  update(book) {
    this.http.post(this.apiUrl + 'update', book, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .subscribe()
  }

  delete(id) {
    this.http.post(this.apiUrl + 'delete', {id: id}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .subscribe()
  }
}
