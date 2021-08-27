import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formAddBook: FormGroup | undefined

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router
              ) {
  }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })
  }

  submit() {
    let data = this.formAddBook?.value;
    this.bookService.creat(data).subscribe(()=>{
      this.router.navigate(['books'])
    });
  }

}
