import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeGlobal } from '../../shared/recipe-global';
import { RecipedetailedComponent } from '../recipedetailed/recipedetailed.component';
import { Ingredients } from '../../shared/ingredients';
@Component({
  selector: 'app-reciperesults',
  template: `
  <div *ngIf="recipes$ | async as recipes; else loading">
  <div class="serv">
  <ul *ngFor="let hits of recipes.hits">
  <article class="tile is-child box">
  <div class="box">
  <p class="title">{{hits.recipe.label}}</p>
  <a class="button is-info is-large" (click)="showDetailedRecipe(hits.recipe.label, hits.recipe.ingredients)">Details</a>
  <img src="{{hits.recipe.image}}" id="image">
  </div>
  </article>
      </ul>
      </div>
  </div>
  <ng-template #loading>Loading...</ng-template>
    <app-recipedetailed *ngIf="visible" [recipetitle]="this.recipetitle" [ingredients]="ingredients"></app-recipedetailed>
`,
  styleUrls: ['./reciperesults.component.scss']
})
export class ReciperesultsComponent {
  currentItem = 'Television';
  visible:boolean = false;
  ingredients:Ingredients[];
  recipetitle:string;
  public recipes$: Observable<RecipeGlobal>;
  constructor(private readonly recipesService: RecipesService) {
    this.recipes$ = this.recipesService.recipeResults$;
  }
  
  showDetailedRecipe(title: string, ingredients:Ingredients[]) {
  this.visible = !this.visible;
  this.recipetitle = title;
  this.ingredients = ingredients;

  }

}
