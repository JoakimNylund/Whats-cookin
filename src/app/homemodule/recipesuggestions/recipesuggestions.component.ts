import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeGlobal } from '../../shared/recipe-global';

@Component({
  selector: 'app-recipesuggestions',
  templateUrl: `/recipesuggestions.component.html`,
  styleUrls: ['./recipesuggestions.component.scss'],

})
export class RecipesuggestionsComponent {
 // public readonly recipes$: Observable<RecipeGlobal>;

  constructor(private readonly recipesService: RecipesService) {
   // this.recipes$ = this.recipesService.suggestedRecipes$;
  }
  searchTerm: string = '';
  blueberry: string = "blueberry"
  pizza: string = "pizza"
  pasta: string = "pasta limon"
  setSearchTerm(searchTerm: string) {
    this.recipesService.getRecipeResults(searchTerm);
   }
}







