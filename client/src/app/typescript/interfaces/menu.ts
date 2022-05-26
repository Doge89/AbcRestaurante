//*Contains the menus of the restaurant
//*Interface imports
import { Ingredient } from "./kitchen";

/**
 * Contanis the meals type
 */
export interface MealType{
    meal_type: string;
}

/**
 * Contains the drink menu
 */
export interface DrinkMenu{
    _id: string;
    /**
     * The name of the drink
     */
    drink_name: string;
    /**
     * A list of ingredients
     */
    ingredients: string[] | Ingredient[]
    /**
     * The price
     */
    price: number;
}

/**
 * Contains the menu of dishes in the restaurant
 */
export interface MenuMeal{
    /**
     * The details of the dish
     */
    meal_detail: {
        /**
         * The name
         */
        meal: string
        /**
         * The type
         */
        meal_type: string;
        /**
         * The price
         */
        price: number;
        /**
         * A list of the ingredients
         */
        ingredients: string[] | Ingredient[]
    };
};

/**
 * Contains the menu
 */
export interface RestaurantMenu{
    /**
     * The drinks
     */
    drink_menu: DrinkMenu[];
    /**
     * The dishes
     */
    meals: MenuMeal[];
}

/**
 * Contains the request of the order
 */
export interface MenuRequest{
    /**
     * A list of dishes
     */
    meals_listed: MenuMeal[];
    /**
     * A list of drinks
     */
    drinks_listed: DrinkMenu[];
    /**
     * The date of the Request
     */
    date_taken: Date;
};
