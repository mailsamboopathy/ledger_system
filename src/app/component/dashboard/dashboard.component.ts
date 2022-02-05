import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/app.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: Array<Person>;
  public userSarvana: Person;
  public title: string;
  public uniqueNames: Set<string>; 
  
  constructor() {
    this.title = "User Detail";
    this.uniqueNames = new Set<string>();
    this.users = [
      new Person("Sriram",34,"male"),   
      new Person("Siva",35,"male"),
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
    this.userSarvana = new Person("Somu", 36, "male");
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
