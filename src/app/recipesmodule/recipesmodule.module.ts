import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesmoduleRoutingModule } from './recipesmodule-routing.module';
import { RecipesmoduleComponent } from './recipesmodule.component';


@NgModule({
  declarations: [
    RecipesmoduleComponent
  ],
  imports: [
    CommonModule,
    RecipesmoduleRoutingModule
  ],
  exports: [
   RecipesmoduleComponent
    ]
})
export class RecipesmoduleModule { }
