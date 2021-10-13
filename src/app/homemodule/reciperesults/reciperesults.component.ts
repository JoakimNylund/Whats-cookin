import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeGlobal } from '../../shared/recipe-global';
import { Ingredients } from '../../shared/ingredients';
import { Router } from '@angular/router';
@Component({
  //Recipe results is responsible for displaying the results of the searchterm and sending
  //detailed info to recipedetailed.
  selector: 'app-reciperesults',
  templateUrl: './reciperesults.component.html',
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
