import { Component } from '@angular/core';
//import { Car } from 'src/classes/car';
//import { Employee } from 'src/classes/Employee';
//import { Gender } from 'src/classes/gender';
import { Monkey, Pigeon, Zoo } from 'src/classes/zoo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proiect';


constructor() {
  /*let opel = new Car("Opel");
  let vw = new Car("vw");
  let employee = new Employee ("furst_name" , "last_name" , "gender"); 

  console.log(opel);
  console.log(vw);
  console.log(employee);
  console.log(gender) */

  var zoo = new Zoo();

  var monkey1 = new Monkey();
  var monkey2 = new Monkey();
  var bird1 = new Pigeon();

  zoo.addAnimal(monkey1);
  zoo.addAnimal(monkey2);
  zoo.addAnimal(bird1);

  zoo.triggerAlarm();
  }
}