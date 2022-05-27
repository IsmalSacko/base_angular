import { Component, OnInit } from '@angular/core';
import {BiduleService} from "../services/bidule.service";

@Component({
  selector: 'app-plus-loin',
  templateUrl: './plus-loin.component.html',
  styleUrls: ['./plus-loin.component.css']
})
export class PlusLoinComponent implements OnInit {
  visible = true;
  toDay: any;
  constructor(private service:BiduleService) { }

  ngOnInit(): void {
    this.toDay = new Date();
    this.service.test='Bonjour '
  }
  membres = [
    {name: 'Ismaila SACKO',age: 32 },
    {name: 'Ibrahima SACKO' ,age: 5},
    {name: 'Djego ROZARIO' ,age: 55},
    {name: 'Amara BATHILY' ,age: 45},
    {name: 'Tidiane BATE ' ,age: 38},
    {name: 'Sékou BATE' ,age: 38},
    {name: 'Issa SACKO' ,age: 45},

  ]

  showOrHide(){
    if (this.visible == true){
      this.visible = false;
    }else {
      this.visible = true;
    }
  }

}
