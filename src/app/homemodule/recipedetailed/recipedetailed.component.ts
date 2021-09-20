import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipedetailed',
  templateUrl: './recipedetailed.component.html',
  styleUrls: ['./recipedetailed.component.scss']
})
export class RecipedetailedComponent {
  @Input() recipetitle = ''; // decorate the property with @Input()
  isModalActive: boolean = true;
  constructor() { }

   toggleModal() {
    this.isModalActive = !this.isModalActive;
  }


}
