import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detai',
  templateUrl: './detai.component.html',
  styleUrls: ['./detai.component.css']
})
export class DetaiComponent implements OnInit {

  book: any;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private activated: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id')
    this.bookService.getById(id).subscribe(res => {
      this.book = res;
    })
  }

}
