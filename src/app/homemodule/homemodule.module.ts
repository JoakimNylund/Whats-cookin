import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { HomemoduleComponent } from './homemodule.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RecipesuggestionsComponent } from './recipesuggestions/recipesuggestions.component';


@NgModule({
  declarations: [
    HomemoduleComponent,
    SearchbarComponent,
    RecipesuggestionsComponent
  ],
  imports: [
    CommonModule,
    HomemoduleRoutingModule
  ]
})
export class HomemoduleModule { }
