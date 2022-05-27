import { Component, OnInit } from '@angular/core';
import {BiduleService} from "../services/bidule.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name: any;
  constructor(public biservice:BiduleService) { }

  ngOnInit(): void {
  }
  message : any;
  createContact(val:any){
    this.message =val;
    this.biservice.welcome = val;

  }

  welcomeMessage() {
    this.biservice.welcome;
  }
}
