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
      <li style="font-size: 30px;">         {{animalInfo.species}}</li>
      <li>Name:     {{animalInfo.name}}</li>
      <li>Age:      {{animalInfo.age}}</li>
      <li>Diet:     {{animalInfo.diet}}</li>
      <li>location:    {{animalInfo.location}}</li>
      <li>Caretakers: {{animalInfo.caretakers}}</li>
      <li>Sex:       {{animalInfo.sex}}</li>
      <li>Likes:       {{animalInfo.likes}}</li>
      <li>Dislikes:         {{animalInfo.dislikes}}</li>
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
  animalInfo = {
    species: "Arctic Fox",
    name: "Moon",
    age: 2,
    diet: "Carnivore",
    location: "Northern Trail",
    caretakers: 5,
    sex: "Female",
    likes: "Cool shade",
    dislikes: "Loud noises",
  }
}
