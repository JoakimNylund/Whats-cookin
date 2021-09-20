import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemoduleComponent } from './homemodule.component';
import { RecipedetailedComponent } from './recipedetailed/recipedetailed.component';
import { ReciperesultsComponent } from './reciperesults/reciperesults.component';

const routes: Routes = [
  { path: '', component: HomemoduleComponent },
  { path: 'recipeshome', component: HomemoduleComponent },
  { path: 'recipes', loadChildren: () => import('../recipesmodule/recipesmodule.module').then(m => m.RecipesmoduleModule) },
  { path: 'reciperesults', component: ReciperesultsComponent },
  { path: 'recipedetailed', component: RecipedetailedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
