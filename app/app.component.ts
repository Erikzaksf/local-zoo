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
      <li *ngFor="let currentAnimal of animals">
        <p style="color:#6640c4; font-size:35px;">{{currentAnimal.species}}</p><br>
        Name: {{currentAnimal.name}}  <br>
        Age: {{currentAnimal.age}}  <br>
        Diet: {{currentAnimal.diet}}  <br>
        Location:  {{currentAnimal.location}} <br>
        Caretakers: {{currentAnimal.caretakers}} <br>
        Sex:  {{currentAnimal.sex}} <br>
        Likes:  {{currentAnimal.likes}} <br>
        Dislikes:  {{currentAnimal.dislikes}} <br>
        <button (click)="editAnimal(currentAnimal)">Edit!</button> <br>
      </li>
      <hr>
      <div>
        <h3>{{selectedAnimal.species}}</h3>
        <h3>Edit Animal</h3>
        <label>Enter Animal Description:</label>
        <input [(ngModel)]="selectedAnimal.species">
        <br>
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="selectedAnimal.name">
        <br>
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="selectedAnimal.age">
        <br>
        <label>Enter Animal Diet:</label>
        <input [(ngModel)]="selectedAnimal.diet">
        <br>
        <label>Enter Animal Location:</label>
        <input [(ngModel)]="selectedAnimal.location">
        <br>
        <label>Enter Animal Caretakers:</label>
        <input [(ngModel)]="selectedAnimal.caretakers">
        <br>
        <label>Enter Animal Sex:</label>
        <input [(ngModel)]="selectedAnimal.sex">
        <br>
        <label>Enter Animal Likes:</label>
        <input [(ngModel)]="selectedAnimal.likes">
        <br>
        <label>Enter Animal Dislikes:</label>
        <input [(ngModel)]="selectedAnimal.dislikes">
        <br>
      </div>
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
    new Animal("Zeebra", "Stipes", 10, "Herbivore", "North Savanah Exhibit", 3, "Female", "Brushings", "Loud Noises, fast movement")
  ];
  selectedAnimal: Animal = this.animals[0];

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }

}

export class Animal {
  constructor( public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string ) { }

}
