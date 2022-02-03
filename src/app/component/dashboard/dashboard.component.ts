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
    this.users = [];
    this.userSarvana = {
      "name": "Sarvana",
      "age": 30,
      "gender": "male"
    }
  }

  ngOnInit(): void {
    // this.users = []
  }

}
