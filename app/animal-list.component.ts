import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template:`

  <div class="well">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">>All Animals</option>
      <option value="ageOld">Animals 5 years old</option>
      <option value="ageYoung">Animals under 5 years old</option>
    </select>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
        <p style="color:#6640c4; font-size:35px;">{{currentAnimal.species}}</p><br>
        Name: {{currentAnimal.name}}  <br>
        Age: {{currentAnimal.age}}  <br>
        Diet: {{currentAnimal.diet}}  <br>
        Location:  {{currentAnimal.location}} <br>
        Caretakers: {{currentAnimal.caretakers}} <br>
        Sex:  {{currentAnimal.sex}} <br>
        Likes:  {{currentAnimal.likes}} <br>
        Dislikes:  {{currentAnimal.dislikes}} <br>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button> <br>
      </li>
      <hr>
    </ul>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }


}
