import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
  public userdata;
  public submitButtonState: boolean;
  public screens: Array<string>;
  constructor() {    
    this.userdata = {
      "loginid": 'sample',
      "password": '', 
      "fruits": ''
    }
    this.submitButtonState = false;  
    this.screens = ["dashboard","setting","overview"];
  }

  ngOnInit(): void {
  }
   
  public submitForm() {

    console.log("Submit Form Called");
    console.log(this.userdata);

  }

}
