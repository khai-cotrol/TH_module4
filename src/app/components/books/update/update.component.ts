import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formEditBook: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private activated: ActivatedRoute,
              private router: Router,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id')
    this.bookService.getById(id).subscribe(res => {
      this.formEditBook = this.fb.group({
        title: [res.title],
        author: [res.author],
        description: [res.description],
      })
    })
  }

  submit() {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id')
    let data = this.formEditBook?.value;
    this.bookService.update(id, data).subscribe(() => {
      this.router.navigate(['books'])
    })
  }


}
