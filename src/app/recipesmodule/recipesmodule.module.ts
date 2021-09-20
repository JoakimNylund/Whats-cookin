import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesmoduleRoutingModule } from './recipesmodule-routing.module';
import { RecipesmoduleComponent } from './recipesmodule.component';


@NgModule({
  declarations: [
    RecipesmoduleComponent
  ],
  imports: [
    CommonModule,
    RecipesmoduleRoutingModule,
    FormsModule

  ],
  exports: [
    RecipesmoduleComponent
  ]
})
export class RecipesmoduleModule { }
