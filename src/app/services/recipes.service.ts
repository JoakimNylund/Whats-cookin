import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  app_key: string = "877c5a5bb12382d82ae67ab3e0f0c91f";
  app_id: string = "0e7c0b16";



  constructor(private httpClient: HttpClient) { }

  getRecipes(userSearch: string) { 
    const url = `https://api.edamam.com/search?q=${userSearch}&app_id=${this.app_id}&app_key=${this.app_key}`;
     return this.httpClient.get(url);
  }


returnBao() {
  const url = "https://api.edamam.com/search?q=&app_id=0e7c0b16&app_key=877c5a5bb12382d82ae67ab3e0f0c91f&diet=low-carb";
  return this.httpClient.get(url);
}
}

