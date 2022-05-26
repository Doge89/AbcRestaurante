//*Angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

//*Project Variables
import { SERVER_HOST } from 'src/app/typescript/project.config';
import { GeneralFunctions } from 'src/app/typescript/classes/generic';
import { RestaurantMenu } from 'src/app/typescript/interfaces/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  /**
   * A set of generic functions
   */
  private _functions: GeneralFunctions = new GeneralFunctions;

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
    return this.Http.get<RestaurantMenu>(SERVER_HOST, { headers: Headers, withCredentials: true, observe: "body" });
  }

}
