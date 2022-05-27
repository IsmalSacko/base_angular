import { Component, OnInit } from '@angular/core';
import {BiduleService} from "../services/bidule.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name = 'Ismaila SACKO';
info :any;

debut : any;

  constructor(private  service:BiduleService) { }

  ngOnInit(): void {
    this.service.test ='Serice pour le service basicService'
    this.debut = this.service.test;
  }
changeName(){
  this.name= 'Aicha Niafo';
}

recupInfo( val : any){
  this.info = val;
}


}
