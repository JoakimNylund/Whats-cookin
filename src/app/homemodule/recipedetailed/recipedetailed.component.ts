import { Component, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients';
@Component({
  selector: 'app-recipedetailed',
  templateUrl: './recipedetailed.component.html',
  styleUrls: ['./recipedetailed.component.scss']
})
export class RecipedetailedComponent {
  @Input() recipetitle = ''; // decorate the property with @Input()
  @Input() ingredients : Ingredients[];
  isModalActive: boolean = true;
  constructor() { }

   toggleModal() {
    this.isModalActive = !this.isModalActive;
  }


}
