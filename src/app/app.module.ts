import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { PlusLoinComponent } from './plus-loin/plus-loin.component';
import { CreateMembreComponent } from './create-membre/create-membre.component';
import { ContactComponent } from './contact/contact.component';
import { TemplatecontactComponent } from './templatecontact/templatecontact.component';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlusLoinComponent,
    CreateMembreComponent,
    ContactComponent,
    TemplatecontactComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
