import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-searchbar',
  template: ` 
  
  <div class="box">
  <form #userForm="ngForm">
    <div class="field has-addons has-addons-centered">
      <div class="control">
        <input class="input is-large" type="text" #input placeholder="Search 2M+ recipes" [(ngModel)]="searchTerm" name="searchTerm">
      </div>
      <div class="control is-large">
        <a class="button is-info is-large" routerLink="reciperesults" (click)="setSearchTerm(searchTerm)">
          Search
        </a>
      </div>
      
    </div>
  </form>
</div>

`,
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  searchTerm: string = '';
  constructor(private recipesService: RecipesService) { }

  setSearchTerm(searchTerm: string) {
    this.recipesService.getRecipeResults(searchTerm);

  }

}
