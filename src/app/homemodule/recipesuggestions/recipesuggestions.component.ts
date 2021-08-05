import { Component, OnInit} from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-recipesuggestions',
  templateUrl: './recipesuggestions.component.html',
  styleUrls: ['./recipesuggestions.component.scss']
})
export class RecipesuggestionsComponent implements OnInit {
  suggestedRecipes = [];
  
  constructor(private recipesService: RecipesService) {
   }

  ngOnInit() {
  // this.recipesService.getRecipes("bao").subscribe((data: R))
    console.log(this.recipesService.getRecipes("bao"));
    // // // // this.suggestedRecipes = this.recipesService.getRecipes("bao");
  
  }

 



}
