//*Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from 'src/app/components/ingredients/ingredients.component';
import { ItemPresentationComponent } from 'src/app/components/common/item-presentation/item-presentation.component';

const IngredientRoutes: Routes = [
  { path: "/", redirectTo: "", pathMatch: "full" },
  { path: "", component: IngredientsComponent },
  { path: "edit", component: ItemPresentationComponent },
  { path: "create", component: ItemPresentationComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(IngredientRoutes) ],
  exports: [ RouterModule ]
})
export class IngredientsModule { }
