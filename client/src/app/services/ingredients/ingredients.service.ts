import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_HOST } from 'src/app/typescript/project.config';

import { Ingredient } from 'src/app/typescript/interfaces/kitchen';
import { GeneralFunctions } from 'src/app/typescript/classes/generic';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private _kitchen: string = 'kitchen'

  private FnGeneric: GeneralFunctions = new GeneralFunctions;

  constructor(
    private Http: HttpClient
  ) { }
  
  /**
   * Get all the ingredients
   */
  public GetDrinks(): Observable<Ingredient[]>{
    let Headers = this.FnGeneric.CreateHeaders();
    return this.Http.get<Ingredient[]>(`${SERVER_HOST}${this._kitchen}/ingredients`, { headers: Headers, withCredentials: true, observe: "body" });
  }

  /**
   * Request the item given
   * @param name Can be the id or name of the Ingredient
   * @returns
   *  The item 
   */
  public GetOneIngredient(name: string): Observable<Ingredient>{
    if(!name) throw new Error("Invalid value of argument");
    let Headers = this.FnGeneric.CreateHeaders();
    return this.Http.get<Ingredient>(`${SERVER_HOST}${this._kitchen}/get/${name}`, { headers: Headers, withCredentials: true, observe: "body" });
  }

  public CreateIngredient(newIngredient: Ingredient): Observable<HttpResponse<Ingredient>>{
    let Headers = this.FnGeneric.CreateHeaders();
    return this.Http.post<Ingredient>(`${SERVER_HOST}${this._kitchen}/newIngredient`, {...newIngredient}, { headers: Headers, withCredentials: true, observe: "response" })
  }

  public UpdateIngredient(toUpdate: Ingredient): Observable<HttpResponse<Ingredient>>{
    let Headers = this.FnGeneric.CreateHeaders();
    return this.Http.put<Ingredient>(`${SERVER_HOST}${this._kitchen}/editIngredient`, { ...toUpdate }, { headers: Headers, withCredentials: true, observe: "response" });
  }

  public DeleteIngredient(ingredient_id: string): Observable<HttpResponse<Ingredient>>{
    let Headers = this.FnGeneric.CreateHeaders();
    return this.Http.delete<Ingredient>(`${SERVER_HOST}${this._kitchen}/deleteIngredient/${ingredient_id}`, { headers: Headers, withCredentials: true, observe: "response" })
  }

}
