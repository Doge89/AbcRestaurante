//*Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MainModule } from './routes/main/main.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { CardDataComponent } from './components/common/card-data/card-data.component';
import { ItemPresentationComponent } from './components/common/item-presentation/item-presentation.component';
import { DrinksModule } from './routes/drinks/drinks.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientsComponent,
    DrinksComponent,
    CardDataComponent,
    ItemPresentationComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    DrinksModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
