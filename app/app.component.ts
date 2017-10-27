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
      <li style="font-size: 30px;">         {{firstAnimal.species}}</li>
      <li>Name:     {{firstAnimal.name}}</li>
      <li>Age:      {{firstAnimal.age}}</li>
      <li>Diet:     {{firstAnimal.diet}}</li>
      <li>location:    {{firstAnimal.location}}</li>
      <li>Caretakers: {{firstAnimal.caretakers}}</li>
      <li>Sex:       {{firstAnimal.sex}}</li>
      <li>Likes:       {{firstAnimal.likes}}</li>
      <li>Dislikes:         {{firstAnimal.dislikes}}</li>
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

  firstAnimal: Animal = new Animal("Cheetah", "Fast", 7, "Carnivore", "North Savanah Exhibit", 2, "Male", "Playing with toys", "Loud Noises")

}

export class Animal {
  constructor( public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string ) { }

}
