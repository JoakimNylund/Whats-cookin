import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeGlobal } from '../shared/recipe-global';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  public readonly suggestedRecipes$: Observable<RecipeGlobal>;
  app_key: string = "877c5a5bb12382d82ae67ab3e0f0c91f";
  app_id: string = "0e7c0b16";
  userSearch: string = "bread";

  constructor(private readonly httpClient: HttpClient) {
    const url = `https://api.edamam.com/api/recipes/v2/?type=public&q=${this.userSearch}&app_id=${this.app_id}&app_key=${this.app_key}`;
    this.suggestedRecipes$ = this.httpClient.get<RecipeGlobal>(url);
  }

  getRecipeSuggestions() {
    //  const url = `https://api.edamam.com/api/recipes/v2/967973faa395d30832db99be7b01927b?type=public&app_id=0e7c0b16&app_key=877c5a5bb12382d82ae67ab3e0f0c91f`;
    return this.suggestedRecipes$;
  }
}

