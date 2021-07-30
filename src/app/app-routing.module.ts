import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
{ path: 'app-component', component: AppComponent },
{ path: 'recipes-component', component: RecipesComponent },
{ path: 'home-component', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
