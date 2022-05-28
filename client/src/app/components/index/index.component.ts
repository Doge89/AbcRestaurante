//*Angular imports
import { Component, OnInit } from '@angular/core';

//*Service imports
import { ReceptionService } from 'src/app/services/restaurant/reception.service';
import { MenuMeal } from 'src/app/typescript/interfaces/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  private Meals: MenuMeal[] = [];
  get getMeals(){ return this.Meals; }
  set setMeals(v:MenuMeal[]){ 
    this.Meals.push(...v);
  }

  constructor(
    private Reception: ReceptionService
  ) { }

  ngOnInit(): void {
    this.Reception.GetMenu().subscribe(response =>{
      this.setMeals = response.meals;
      return console.info(response);
    })
  }

}
