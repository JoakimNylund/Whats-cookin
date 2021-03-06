import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeGlobal } from '../shared/recipe-global';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  public recipeResults$: Observable<RecipeGlobal>;
  app_key: string = "877c5a5bb12382d82ae67ab3e0f0c91f";
  app_id: string = "0e7c0b16";
  userSearch: string = "";
  url: string = "";
  constructor(private httpClient: HttpClient) {
    this.url = `https://api.edamam.com/api/recipes/v2/?type=public&q=${this.userSearch}&app_id=${this.app_id}&app_key=${this.app_key}`;
    this.recipeResults$ = this.httpClient.get<RecipeGlobal>(this.url);
  }

  getRecipeResults(userSearch: string) {
    console.log(userSearch);
    this.url = `https://api.edamam.com/api/recipes/v2/?type=public&q=${userSearch}&app_id=${this.app_id}&app_key=${this.app_key}`;
    this.recipeResults$ = this.httpClient.get<RecipeGlobal>(this.url);
  }

}

