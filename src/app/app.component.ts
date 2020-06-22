import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myStudents: Student[];

  constructor(){
    this.myStudents = [
      {sid:101,sname:"Satish",email:"satish@gmail.com",phone:111,city:"Blore"},
      {sid:102,sname:"Satish",email:"satish@gmail.com",phone:111,city:"Blore"},
      {sid:103,sname:"Satish",email:"satish@gmail.com",phone:111, city:"Blore"},
      {sid:104,sname:"Satish",email:"satish@gmail.com",phone:111, city:"Blore"},
      {sid:105,sname:"Satish",email:"satish@gmail.com",phone:111, city:"Blore"},
      {sid:106,sname:"Satish",email:"satish@gmail.com",phone:111, city:"Blore"},
    ]
  }
  ngOnInit(){}
}
