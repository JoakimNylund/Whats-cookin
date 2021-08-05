import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesmoduleComponent } from './recipesmodule.component';

const routes: Routes = [{ path: '', component: RecipesmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesmoduleRoutingModule { }
