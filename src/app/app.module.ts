import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';
import { UpdateComponent } from './components/books/update/update.component';
import { MasterComponent } from './components/layout/master/master.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { DetaiComponent } from './components/books/detai/detai.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    MasterComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DetaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
