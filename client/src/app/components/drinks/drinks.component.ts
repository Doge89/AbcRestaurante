import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks/drinks.service';
import { DrinkMenu } from 'src/app/typescript/interfaces/menu';

import { DefinitionTypes } from 'src/app/typescript/classes/generic';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.sass']
})
export class DrinksComponent implements OnInit {

  private Drinks: DrinkMenu[] = [];
  set setDrinks(v:DrinkMenu[]){
    this.Drinks.push(...v);

  }
  get getDrinks(): DrinkMenu[]{ return this.Drinks; }

  constructor(
    private DrinkService: DrinksService
  ) { }

  ngOnInit(): void {
    this.DrinkService.GetDrinks().subscribe(response => { this.setDrinks = response; })
  }

}
