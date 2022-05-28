import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPresentationComponent } from 'src/app/components/common/item-presentation/item-presentation.component';
import { IndexComponent } from 'src/app/components/index/index.component';

const MealsRouter: Routes = [
  { path: "", component: IndexComponent },
  { path: "create", component: ItemPresentationComponent },
  { path: "edit", component: ItemPresentationComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(MealsRouter) ],
  exports: [ RouterModule ]
})
export class MealsModule { }
