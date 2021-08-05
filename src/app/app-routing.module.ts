import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'home', loadChildren: () => import('./homemodule/homemodule.module').then(m => m.HomemoduleModule) },
{ path: 'recipes', loadChildren: () => import('./recipesmodule/recipesmodule.module').then(m => m.RecipesmoduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
