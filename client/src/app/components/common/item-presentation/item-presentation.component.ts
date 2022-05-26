//*Core imports
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { Ingredient } from 'src/app/typescript/interfaces/kitchen';
import { DrinkMenu } from 'src/app/typescript/interfaces/menu';

import { CardConfig } from "src/app/typescript/interfaces/kitchen"
import { DrinksService } from 'src/app/services/drinks/drinks.service';

@Component({
  selector: 'app-item-presentation',
  templateUrl: './item-presentation.component.html',
  styleUrls: ['./item-presentation.component.sass']
})
export class ItemPresentationComponent implements OnInit {

  @ViewChild("ingredientDrink") public IngredientDrink!: ElementRef<HTMLInputElement>;

  private ViewMode!: CardConfig;
  set setViewMode(v: CardConfig){ this.ViewMode = { ...v }; };
  get getViewMode(){ return this.ViewMode; };

  private Ingredient: Ingredient = { _id: "", bought_price: NaN, ingredient_name: "" };
  set setIngredient(v: Ingredient){ this.Ingredient = { ...v }; }
  get getIngredient(): Ingredient{ return this.Ingredient }

  private Drink: DrinkMenu = { _id: "", drink_name: "", price: NaN, ingredients: [] };
  set setDrink(v: DrinkMenu){ this.Drink = { ...v }; };
  get getDrink(): DrinkMenu { return this.Drink; };

  private CodeName: string = "";
  set setCodeName(v: string){
    if(!v) throw new Error("The value can't be null")
    this.CodeName = v;
  }
  get getCodeName(): string{ return this.CodeName; }

  private Ingredients: Ingredient[] = [];
  get getIngredients(): Ingredient[]{ return this.Ingredients; }

  private IngredientsToDrink: Ingredient[] = [];
  set setIngredientsToDrink(v: Ingredient){ this.IngredientsToDrink.push(v); }
  get getIngredientsToDrink(): Ingredient[]{ return this.IngredientsToDrink; }

  constructor(
    private Route: ActivatedRoute,
    private IngredientService: IngredientsService,
    private DrinkService: DrinksService
  ) { }

  ngOnInit(): void {
    const params = this.Route.queryParams
    const subParam = params.subscribe(queryParam => {
      //if(!queryParam['view']) location.replace("/ingredient");
      this.setViewMode = { view: queryParam['view'] === "ingredients" ? "ingredients" : "drinks" };
      const idItem: string | undefined = queryParam['item'];
      if(idItem !== undefined) this.setCodeName = idItem
    });
    subParam.unsubscribe();
    console.info(this.ViewMode)
    if(this.ViewMode.view === "drinks") this.IngredientService.GetDrinks().subscribe(response => { this.Ingredients = [...response] });
    if(!this.CodeName) return;
    if(this.ViewMode.view === "drinks"){
      this.DrinkService.GetOneDrink(this.CodeName).subscribe(response => { this.setDrink = response });
      return;
    }
    this.IngredientService.GetOneIngredient(this.CodeName).subscribe(Ingredient => { console.info(Ingredient); this.Ingredient = { ...Ingredient } })
    return console.log(this.Ingredient);
  }

  public HandleSumbitIngredient(e: SubmitEvent): void{
    console.info(this.Ingredient);
    e.preventDefault();
    if(!this.getCodeName)
      this.IngredientService.CreateIngredient(this.Ingredient).subscribe(response => {
        console.log(response)
        if(!response.ok) return console.error("No se pudo crear el ingrediente");
        return location.replace("/ingredients")
      });
    this.IngredientService.UpdateIngredient(this.Ingredient).subscribe(response => {
      if(!response.ok) return console.error(`Status Error${response.status}\n Status Message: ${response.statusText}`);
      return location.replace("/ingredients");
    });
    //return location.replace("/ingredients")
  }

  public HandleDeleteItem($event: MouseEvent): void {
    $event.preventDefault();
    if(!confirm("¿Esta seguro de borrar este ingrediente?")) return;
    this.IngredientService.DeleteIngredient(this.Ingredient._id).subscribe(response => {
      if(!response.ok) throw new Error(`Code: ${response.status}, message: ${response.statusText}`);
      return location.replace("/ingredients");
    });
  }

  public HandleInput($event: KeyboardEvent): void{
    console.log($event.key);
    if($event.key !== "Enter") return;
    const itemFounded = this.getIngredients.find(ingredient => { 
      return ingredient._id === this.IngredientDrink.nativeElement.value 
    });
    console.info(itemFounded)
    if(!itemFounded) return;
    this.setIngredientsToDrink = itemFounded;
    console.log(this.IngredientsToDrink);
    this.IngredientDrink.nativeElement.value = "";
  }

}
