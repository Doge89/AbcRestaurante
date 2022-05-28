//*Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const Routes: Routes = [
  { path: "", loadChildren: () => import("../meals/meals.module").then(e => e.MealsModule) },
  { path: "ingredients", loadChildren: () => import("../ingredients/ingredients.module").then(e => e.IngredientsModule ) },
  { path: "drinks", loadChildren: () => import("../drinks/drinks.module").then(e => e.DrinksModule) }
  
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ]
})
export class MainModule { }
