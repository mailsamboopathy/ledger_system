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
      new Person("Nila",35,"female"),
      {
        "name": "Shruthi",
        "age": 30,
        "gender": "male"
      },
      {
        "name": "Nithya",
        "age": 60,
        "gender": "female"
      }
    ];

    this.userSarvana = new Person("Somu", 36, "male");
    this.userDisplay();
    this.barber(this.userSarvana); 
    let tempFunc = this.barber;
    tempFunc(this.userSarvana);    
  }
  
  ngOnInit(): void {
    // this.users = []
  }

  public userDisplay() {
    console.log("Finish all pending tasks");
    console.log("Length of users object  ", this.users.length);
  
    for (let i=0; i< this.users.length; i++){
      let user = this.users[i];
      console.log("User Name", user.name);
    }
  
    console.log("User at Index 4",this.users[3]);
    
    this.users.forEach( (user: Person) => {
      console.log("User in Lamba Function", user.gender)
    }  );
    // this.users.forEach(this.barber);
  }

  public barber(user: Person) {
    console.log("Make the Hair shorter", user);
  }
}
