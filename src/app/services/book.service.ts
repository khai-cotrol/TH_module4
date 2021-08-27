import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../components/book";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(environment.url + "/books");
  }

  getById(id: number):Observable<any> {
    return this.http.get(environment.url + "/books/" + id);
  }

  creat(book: Book):Observable<any> {
    return this.http.post(environment.url + "/books", book);
  }

  delete(id: number):Observable<any> {
    return this.http.delete(environment.url + "/books/" + id);
  }

  update(id: number, book: Book): Observable<any> {
    return this.http.put(environment.url + "/books/" + id, book );
  }
}
