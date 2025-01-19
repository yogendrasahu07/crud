import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  userData:any={};


  getdat(data:NgForm)
  {
    console.log(this.userData)
    this.userData=data
  }
 
}
