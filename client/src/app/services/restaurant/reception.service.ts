//*Angular imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

//*Project Variables
import { SERVER_HOST } from 'src/app/typescript/project.config';
import { GeneralFunctions } from 'src/app/typescript/classes/generic';
import { MenuMeal, RestaurantMenu } from 'src/app/typescript/interfaces/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  /**
   * A set of generic functions
   */
  private _functions: GeneralFunctions = new GeneralFunctions;

  private _root: string = "kitchen"

  constructor(
    private Http: HttpClient	
  ) { }

  /**
   * Request the server for the menu of meals
   * @returns
   *  The menu of the restaurant
   */
  public GetMenu(): Observable<RestaurantMenu>{
    let Headers = this._functions.CreateHeaders();
    return this.Http.get<RestaurantMenu>(`${SERVER_HOST}${this._root}`, { headers: Headers, withCredentials: true, observe: "body" });
  }

  public CreateMeal(meal: MenuMeal): Observable<HttpResponse<MenuMeal>>{
    let Headers = this._functions.CreateHeaders();
    return this.Http.post<MenuMeal>(`${SERVER_HOST}${this._root}/createMeal`, { ...meal }, { headers: Headers, withCredentials: true, observe: "response" });
  }

  public GetOneMeal(codeName: string): Observable<MenuMeal>{
    let Headers = this._functions.CreateHeaders();
    return this.Http.get<MenuMeal>(`${SERVER_HOST}${codeName}`, { headers: Headers, withCredentials: true, observe: "body" })
  }

  public UpdateMeal(newValues: MenuMeal, id: string): Observable<HttpResponse<MenuMeal>>{
    let Headers = this._functions.CreateHeaders();
    return this.Http.put<MenuMeal>(`${SERVER_HOST}edit`, { _id: id, menu_detail: newValues }, { headers: Headers, withCredentials: true, observe: "response" })
  } 

  public DeleteMeal(id: string): Observable<HttpResponse<MenuMeal>>{
    let Headers = this._functions.CreateHeaders();
    return this.Http.delete<MenuMeal>(`${SERVER_HOST}delete/${id}`, { headers: Headers, withCredentials: true, observe: "response" })
  }

}
