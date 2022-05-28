import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { Ingredient } from 'src/app/typescript/interfaces/kitchen';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.sass']
})
export class IngredientsComponent implements OnInit {

  private Ingredients: Ingredient[] = [];
  set setIngredient(v: Ingredient[]){
    this.Ingredients.push(...v);
  }
  get getIngredients(): Ingredient[]{
    return this.Ingredients;
  }

  constructor(
    private IngredientService: IngredientsService
  ) { }

  ngOnInit(): void {
    this.IngredientService.GetDrinks().subscribe(response => {
      console.info(response)
      this.setIngredient = response
    });
    console.log(this.getIngredients)
  }

}
