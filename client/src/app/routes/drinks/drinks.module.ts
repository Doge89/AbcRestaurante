import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from 'src/app/components/drinks/drinks.component';
import { ItemPresentationComponent } from 'src/app/components/common/item-presentation/item-presentation.component';

const DrinkRouter: Routes = [
  { path: "", component: DrinksComponent },
  { path: "edit", component: ItemPresentationComponent },
  { path: "create", component: ItemPresentationComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(DrinkRouter) ],
  exports: [ RouterModule ]
})
export class DrinksModule { }
