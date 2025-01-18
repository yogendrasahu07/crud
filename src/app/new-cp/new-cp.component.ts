import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-cp',
  templateUrl: './new-cp.component.html',
  styleUrls: ['./new-cp.component.css']
})
export class NewCpComponent  {

  name:any;
  email:any
  mobile:any
  address:any
  submittedData:any[]=[]

  ngOninit(){

  }

  submit(){
    const payload={
      'name':this.name,
      'email':this.email,
      'mobile':this.mobile,
      'address':this.address,
    }
    this.submittedData.push(payload);
    this.name=''
    this.email=''
    this.mobile=''
    this.address=''

  }

 editDetails(data:any){
  

  }

  deleteDetails(id:any){
this.submittedData.splice(id,1)
  }
 }
