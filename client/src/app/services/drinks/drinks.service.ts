import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GeneralFunctions } from 'src/app/typescript/classes/generic';

import { DrinkMenu } from 'src/app/typescript/interfaces/menu';
import { Observable } from 'rxjs';
import { SERVER_HOST } from 'src/app/typescript/project.config';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private _root: string = 'kitchen/drink';

  private FnGeneral: GeneralFunctions = new GeneralFunctions;

  constructor(
    private Http: HttpClient
  ) { }
  
  /**
   * Request for all the drinks available
   * @returns
   *  An observable with the drinks
   */
  public GetDrinks(): Observable<DrinkMenu[]>{
    let Headers = this.FnGeneral.CreateHeaders();
    return this.Http.get<DrinkMenu[]>(`${SERVER_HOST}${this._root}/`, { headers: Headers, withCredentials: true, observe: "body" })
  }

  /**
   * Request for the specified drink
   * @param drinkName The name of the drink
   * @returns
   *  The drink
   */
  public GetOneDrink(drinkName: string): Observable<DrinkMenu>{
    let Headers: HttpHeaders = this.FnGeneral.CreateHeaders();
    return this.Http.get<DrinkMenu>(`${SERVER_HOST}${this._root}/${drinkName}`, { headers: Headers, withCredentials: true, observe: "body" })
  }

  /**
   * Request for the creation of a new drink in the menu
   * @param drink The new drink
   * @returns
   *  The created drink
   */
  public CreateDrink(drink: DrinkMenu): Observable<HttpResponse<DrinkMenu>>{
    let Headers: HttpHeaders = this.FnGeneral.CreateHeaders();
    return this.Http.post<DrinkMenu>(`${SERVER_HOST}${this._root}/createDrink`, { ...drink }, { headers: Headers, withCredentials: true, observe: "response" } )
  }

  /**
   * Request for the update values of the given item
   * @param drink_id A query for the search of that item
   * @param newValues The new values
   * @returns
   *  The updated item
   */
  public UpdateDrink(drink_id: string, newValues: DrinkMenu): Observable<HttpResponse<DrinkMenu>>{
    let Headers: HttpHeaders = this.FnGeneral.CreateHeaders();
    return this.Http.put<DrinkMenu>(`${SERVER_HOST}${this._root}/updateIngredient`, { id: drink_id, newValues }, { headers: Headers, withCredentials: true, observe: "response" })
  }

  /**
   * Request for a remove in the server
   * @param drink_id The id of the drink to be deleted
   * @returns
   *  An HttpResponse with the deleted item
   */
  public DeleteDrink(drink_id: string): Observable<HttpResponse<DrinkMenu>>{
    let Headers: HttpHeaders = this.FnGeneral.CreateHeaders();
    return this.Http.delete<DrinkMenu>(`${SERVER_HOST}${this._root}/deleteIngredient/${drink_id}`, { headers: Headers, withCredentials: true, observe: "response" })
  }

}
