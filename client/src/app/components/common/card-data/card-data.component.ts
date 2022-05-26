//*Core imports
import { Component, Input, OnInit } from '@angular/core';

import { CardConfig, Ingredient } from 'src/app/typescript/interfaces/kitchen';
import { DrinkMenu, MenuMeal } from 'src/app/typescript/interfaces/menu';

@Component({
  selector: 'common-carddata',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.sass']
})
export class CardDataComponent implements OnInit {

  /**
   * Ingredient Data
   */
  @Input("ingredientData") public IngredientData!: Ingredient;
  /**
   * Meal Data
   */
  @Input("mealData") public MealData!: MenuMeal;
  /**
   * A basic configurations for the card
   */
  @Input("cardConfig") public CardConfig!: CardConfig;
  /**
   * The drink
   */
  @Input("drinkData") public DrinkData!: DrinkMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
