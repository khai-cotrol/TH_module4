import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: any

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    return this.bookService.getAll().subscribe(res => {
      this.books = res
      console.log(this.books)
    })
  }

  delete(id: any) {
    if (confirm("Are you sure about that? ")) {
      this.bookService.delete(id).subscribe(() => this.getAll())
    }
  }

}
