import { HttpHeaders } from "@angular/common/http";
import { DrinkMenu, MenuMeal } from "../interfaces/menu";

/**
 * Contains a set of generic functions to perform general tasks
 */
export class GeneralFunctions{
    constructor(){}

    /**
     * Create a header file for requests
     * @returns
     *  An object with headers
     */
    public CreateHeaders(): HttpHeaders{
        let Headers = new HttpHeaders();
        Headers.append("Access-Control-Allow-Credentials", "true");
        Headers.append("Content-Type", "application/json");
        Headers.append("Access-Control-Allow-Headers", "Content-Type");
        return Headers;
    }

}

export class DefinitionTypes{
    /**
     * Define the definition of the object given
     * @param obj An object
     */
    public static ObjectIsDrink(obj: unknown): obj is DrinkMenu{
        return Object.prototype.hasOwnProperty.call(obj, "_id") &&
            Object.prototype.hasOwnProperty.call(obj, "drink_name") &&
            Object.prototype.hasOwnProperty.call(obj, "ingredients") &&
            Object.prototype.hasOwnProperty.call(obj, "price")
        ;
    }

    /**
     * Define if the object is from menu meal definition
     * @param obj An object
     */
    public static ObjectIsMenuMeal(obj: unknown): obj is MenuMeal{
        return Object.prototype.hasOwnProperty.call(obj, "menu_detail");
    }

}
