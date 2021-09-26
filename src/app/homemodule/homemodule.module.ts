import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { HomemoduleComponent } from './homemodule.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RecipesuggestionsComponent } from './recipesuggestions/recipesuggestions.component';
import { ReciperesultsComponent } from './reciperesults/reciperesults.component';
import { RecipedetailedComponent } from './recipedetailed/recipedetailed.component';
import { RecipeheaderComponent } from './recipeheader/recipeheader.component';

@NgModule({
  declarations: [
    HomemoduleComponent,
    SearchbarComponent,
    ReciperesultsComponent,
    RecipesuggestionsComponent,
    RecipedetailedComponent,
    RecipeheaderComponent
  ],
  imports: [
    CommonModule,
    HomemoduleRoutingModule,
    FormsModule
  ],
  exports: [SearchbarComponent, RecipedetailedComponent]
})
export class HomemoduleModule { }
