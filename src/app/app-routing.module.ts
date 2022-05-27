import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {PlusLoinComponent} from "./plus-loin/plus-loin.component";
import {CreateMembreComponent} from "./create-membre/create-membre.component";
import {ContactComponent} from "./contact/contact.component";
import {TemplatecontactComponent} from "./templatecontact/templatecontact.component";
import {TodoComponent} from "./todo/todo.component";

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'basic', component: HomeComponent },
  {path:'plusloin', component: PlusLoinComponent},
  {path:'membre', component : CreateMembreComponent},
  {path:'contact',component: ContactComponent},
  {path:'welcome', component:TemplatecontactComponent},
  {path:'todo', component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
