import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.recupToDo();
  }
  recupToDo(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next:(data)=>{ this.todos=data; console.log(this.todos) },
      error: (err)=>{console.log(err)}
    })
  }
}
