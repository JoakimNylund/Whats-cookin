import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemoduleComponent } from './homemodule.component';

const routes: Routes = [
  { path: '', component: HomemoduleComponent },
  { path: 'recipes', loadChildren: () => import('../recipesmodule/recipesmodule.module').then(m => m.RecipesmoduleModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
