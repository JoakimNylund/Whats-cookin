import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeGlobal } from '../../shared/recipe-global';

@Component({
  selector: 'app-recipesuggestions',
  template: `
<ol *ngIf="recipes$ | async as recipes; else loading">
<li *ngFor="let hits of recipes.hits">
{{hits.recipe.label}}

<img src="{{hits.recipe.image}}">
</li>
</ol>
<ng-template #loading>Loading...</ng-template>
`,
  styleUrls: ['./recipesuggestions.component.scss'],

})
export class RecipesuggestionsComponent {
  public readonly recipes$: Observable<RecipeGlobal>;

  constructor(private readonly recipesService: RecipesService) {
    this.recipes$ = this.recipesService.suggestedRecipes$;
  }
}






