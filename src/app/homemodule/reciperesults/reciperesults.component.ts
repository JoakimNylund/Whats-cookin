import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeGlobal } from '../../shared/recipe-global';
import { Ingredients } from '../../shared/ingredients';
import { Router } from '@angular/router';
@Component({
  //Recipe results is responsible for displaying the results of the searchterm.
  selector: 'app-reciperesults',
  template: `
  <app-recipeheader></app-recipeheader>
  <div class="box">
  <form #userForm="ngForm">
    <div class="field has-addons has-addons-centered">
      <div class="control">
        <input class="input is-large" type="text" #input placeholder="Search 2M+ recipes" [(ngModel)]="searchTerm" name="searchTerm">
      </div>
      <div class="control is-large">
        <a class="button is-info is-large" (click)="setSearchTerm(searchTerm)">
          Search
        </a>
      </div>
      
    </div>
  </form>
</div>
//The code for loading the recipe and displaying them.
  <div *ngIf="recipes$ | async as recipes; else loading">
  <div class="rcontainer">
  <ul *ngFor="let hits of recipes.hits">
  <article class="tile is-child box">
  <div class="box">
  <p class="title">{{hits.recipe.label}}</p>
  <a class="button is-info is-large" (click)="showDetailedRecipe(hits.recipe.label, hits.recipe.ingredients, 
    hits.recipe.url, hits.recipe.source, hits.recipe.calories, hits.recipe.image)">Details</a>
  <img src="{{hits.recipe.image}}" id="image">
  </div>
  </article>
      </ul>
      </div>
  </div>
  <ng-template #loading>Loading...</ng-template>
  //Details about the recipe is sent to the class recipedetailed
    <app-recipedetailed *ngIf="visible" [recipetitle]="this.recipetitle" [ingredients]="ingredients" 
    [url]="this.recipeurl" [source]="this.recipesource" [calories]="this.calories" [image]="this.img">
    </app-recipedetailed>
`,
  styleUrls: ['./reciperesults.component.scss']
})

export class ReciperesultsComponent {
  currentItem = 'Television';
  visible: boolean = false;
  ingredients: Ingredients[];
  recipetitle: string;
  recipeurl: string;
  recipesource: string;
  img: string;
  calories: number;
  public recipes$: Observable<RecipeGlobal>;
  searchTerm: string = '';
  constructor(private readonly recipesService: RecipesService, private router: Router,) {
    this.recipes$ = this.recipesService.recipeResults$;

  }

  setSearchTerm(searchTerm: string) {
    //calls the API server.
    this.recipesService.getRecipeResults(searchTerm);
    //workaround to be able to display this component several times.
    const that = this;
    const path = `/reciperesults`;
    that.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      that.router.navigate([path])
    );
  }

  showDetailedRecipe(title: string, ingredients: Ingredients[], url: string, source: string, calories: number, img: string) {
    this.visible = !this.visible;
    this.recipetitle = title;
    this.ingredients = ingredients;
    this.img = img;
    this.recipeurl = url;
    this.recipesource = source;
    this.calories = Math.round(calories);
  }

}
