import { Component, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients';
@Component({
  selector: 'app-recipedetailed',
  templateUrl: './recipedetailed.component.html',
  styleUrls: ['./recipedetailed.component.scss']
})
export class RecipedetailedComponent {
  //Recipe detailed is responsible for displaying detailed information about the recipe when it is clicked.
  @Input() recipetitle = '';
  @Input() url = '';
  @Input() source = '';
  @Input() image = '';
  @Input() calories: number;
  @Input() ingredients: Ingredients[];
  isModalActive: boolean = true;
  constructor() { }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }



}
