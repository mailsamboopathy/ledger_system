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
  public totalPrasad: number = 10;
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
    // this.screens.forEach(
    //   (screen: string, i: number) => {
    //     console.log(" Line 32 ",screen, i);

    //   }
    // )
    
    // for(let i=0; i<this.screens.length; i++) {
    //   let screen = this.screens[i];
    //   if (i != 1) {
    //     console.log(" Line 40 ",screen, i);
    //   }     
    // } 
    let isPrasadOver: boolean = false;
    while(!isPrasadOver) {
      console.log("take prasad", this.totalPrasad);
      if (this.totalPrasad == 0) {
        isPrasadOver = true;
      }
      this.totalPrasad = this.totalPrasad - 1;
    }

  }

}

