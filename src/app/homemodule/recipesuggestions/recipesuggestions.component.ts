import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipesuggestions',
  templateUrl: `/recipesuggestions.component.html`,
  styleUrls: ['./recipesuggestions.component.scss'],

})
export class RecipesuggestionsComponent {

  constructor(private readonly recipesService: RecipesService) {
  }
  searchTerm: string = '';
  blueberry: string = "blueberry"
  pizza: string = "pizza"
  pasta: string = "pasta limon"
  setSearchTerm(searchTerm: string) {
    this.recipesService.getRecipeResults(searchTerm);
  }
}







