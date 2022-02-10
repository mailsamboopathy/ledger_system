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
      "loginid": '',
      "password": '', 
      "fruits": ''
    }
    this.submitButtonState = false;  
    this.screens = ["dashboard","setting","overview"];
  }

  ngOnInit(): void {
  }

  public submitForm(data: NgForm) {

    console.log("Submit Form Called");
    console.log(data.value);
    console.log(this.userdata);

  }

}
