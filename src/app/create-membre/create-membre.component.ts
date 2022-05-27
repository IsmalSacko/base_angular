import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-membre',
  templateUrl: './create-membre.component.html',
  styleUrls: ['./create-membre.component.css']
})
export class CreateMembreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  member:any;
createMembre(val : any){
  this.member = val;
console.log(this.member)
}
user = {name: 'Ismaila SACKO', ville:'Paris',age: 32 };
prerempliform(){

}
}
