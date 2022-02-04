import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: Array<any>;
  public userSarvana: any;
  public title: string;

  constructor() {
    this.title = "User Detail";
    this.users = [
      {
        "name": "Siva",
        "age": 35,
        "gender": "male"
      },
      {
        "name": "Nithyan",
        "age": 60,
        "gender": "male"
      }
    ];
    this.userSarvana = {
      "name": "Sarvana",
      "age": 30,
      "gender": "male"
    }
    this.userDisplay();
  }

  ngOnInit(): void {
    // this.users = []
  }

  public userDisplay() {
    console.log("Finish all pending tasks");
    console.log("Length of users object  ", this.users.length);
    for (let i=0; i< this.users.length; i++){
      console.log("User Number ",i);
    }

  }




}
