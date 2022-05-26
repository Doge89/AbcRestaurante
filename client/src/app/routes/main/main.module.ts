//*Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from 'src/app/components/drinks/drinks.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { IngredientsComponent } from 'src/app/components/ingredients/ingredients.component';

const Routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "ingredients", loadChildren: () => import("../ingredients/ingredients.module").then(e => e.IngredientsModule ) },
  { path: "drinks", loadChildren: () => import("../drinks/drinks.module").then(e => e.DrinksModule) }
  
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ]
})
export class MainModule { }
