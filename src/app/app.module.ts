import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './services/recipes.service';
import { HomemoduleModule } from './homemodule/homemodule.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent           
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomemoduleModule,
    NgbModule,
    FormsModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
