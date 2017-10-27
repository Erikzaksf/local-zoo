import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class= "jumbotron" style="text-align: center;">
  <h1>Seattle Zoo Caretaker Manager App</h1>
  <h3>{{month}}/{{day}}/{{year}}</h3>
  <hr>
  <h2>{{statement}}</h2>
  </div>
  <div class= "container">
  <h2> This utility is available to to the Seattle Zoo in an effort to maximize Caretaker efficiency and staffing.</h2>

  <div class="well">
    <ul>
      <li *ngFor="let currentAnimal of animals" style="font-size: 30px;">  {{currentAnimal.species}}  </li>
      <li *ngFor="let currentAnimal of animals"> Name: {{currentAnimal.name}}  </li>
      <li *ngFor="let currentAnimal of animals"> Age: {{currentAnimal.age}}  </li>
      <li *ngFor="let currentAnimal of animals"> Diet: {{currentAnimal.diet}}  </li>
      <li *ngFor="let currentAnimal of animals"> location:  {{currentAnimal.location}}  </li>
      <li *ngFor="let currentAnimal of animals"> location:  {{currentAnimal.location}}  </li>
      <li *ngFor="let currentAnimal of animals"> Caretakers: {{currentAnimal.caretakers}}  </li>
      <li *ngFor="let currentAnimal of animals"> Sex:  {{currentAnimal.sex}}  </li>
      <li *ngFor="let currentAnimal of animals"> Likes:  {{currentAnimal.likes}}  </li>
      <li *ngFor="let currentAnimal of animals"> Dislikes:  {{currentAnimal.dislikes}}  <button (click)="editAnimal()">Edit!</button> </li>
    </ul>
  </div>

  </div>


  `
})


export class AppComponent {

  statement: string = 'Leadership is our mission statement.';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  animals: Animal[] = [
    new Animal("Cheetah", "Fast", 7, "Carnivore", "North Savanah Exhibit", 2, "Male", "Playing with toys", "Loud Noises"),
  ];

  editAnimal() {
   alert("You just requested to edit a Animal!");
 }

}

export class Animal {
  constructor( public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string ) { }

}
