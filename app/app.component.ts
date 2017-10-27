import { Component } from '@angular/core';
import { Animal } from './animal.model';


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
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <br>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>


  `
})


export class AppComponent {
  statement: string = 'Leadership is our mission statement.';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Cheetah", "Fast", 7, "Carnivore", "North Savanah Exhibit", 2, "Male", "Playing with toys", "Loud Noises"),
    new Animal("Zeebra", "Stipes", 10, "Herbivore", "North Savanah Exhibit", 3, "Female", "Brushings", "Loud Noises, fast movement")
  ];


  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }


}
