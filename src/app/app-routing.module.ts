import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: 'home', loadChildren: () => import('./homemodule/homemodule.module').then(m => m.HomemoduleModule) },
{ path: 'recipes', loadChildren: () => import('./recipesmodule/recipesmodule.module').then(m => m.RecipesmoduleModule) },
{ path: 'app-component', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
