import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/books/list/list.component";
import {CreateComponent} from "./components/books/create/create.component";
import {UpdateComponent} from "./components/books/update/update.component";
import {DetaiComponent} from "./components/books/detai/detai.component";

const routes: Routes = [
  {
    path: 'books',
    component: ListComponent
  },
  {
    path: 'books/add',
    component: CreateComponent
  },
  {
    path: 'books/:id/edit',
    component: UpdateComponent
  },
  {
    path: 'books/:id/detail',
    component: DetaiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
