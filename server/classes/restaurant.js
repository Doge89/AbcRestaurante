//*NodeJS imports
const mongoose = require("mongoose");

//*Class imports
const { GeneralFunctions } = require("../classes/generic");

//*Models imports
const {
    MealTypeModel,
    MenuModel,
    DrinkMenuModel,
    IngredientModel
} = require("../models/restaurant")

/**
 * Manage all the basic works of the restaurant
 */
class Restaurant {
    constructor() {}

    /**
     * Obtains all the menu of the restaurant
     */
    async GetMenu(){
        const RestaurantMenu = await MenuModel.find({}).exec();
        return RestaurantMenu;
    }

    /**
     * Create a new meal type
     * @param {*} data The data for the document 
     */
    async CreateMealType(data){
        const newMealType = new MealTypeModel({...data});
        await newMealType.save();
        return newMealType;
    }

    /**
     * Create a new dish
     * @param {*} data The data to create 
     * @returns 
     *  The created meal
     */
    async CreateMeal(data){
        const newMeal = new MenuModel({ 
            meal_detail: {
                meal: data.meal_detail.meal,
                price: data.meal_detail.price
            }
         });
        await newMeal.save();
        return newMeal;
    }

    /**
     * Get one dish
     * @param {string} name The name of the dish 
     * @returns 
     *  The dish matched with the query
     */
    async GetOneMeal(name){
        const Meal = await MenuModel.findOne({ "meal_detail.meal": name }).exec();
        return Meal;
    }

    async UpateMeal(id, data){
        const updatedMeal = await MenuModel.findByIdAndUpdate(id, { ...data }).exec();
        return updatedMeal;
    }

    /**
     * Find and remove the document given an id
     * @param {string} id The id of the object
     * @returns
     *  The document deleted
     */
    async DeleteMeal(id){
        const deletedDocument = await MenuModel.findByIdAndRemove(id).exec();
        return deletedDocument;
    }

}

/**
 * Manage the kitchen todo in the day
 */
class Kitchen extends Restaurant{
    /**
     * Create a new instance to manage the kitchen of a restaurant
     */
    constructor(){
        super();
    }

    /**
     * Create a new Ingredient
     * @param {  } data The data for the new Object
     * @returns
     *  The new Ingredient created
     */
    async AddNewIngredient(data){
        const newIngredient = new IngredientModel({ ...data });
        await newIngredient.save();
        return newIngredient;
    }

    /**
     * Obtains all the ingredients available
     */
    async GetIngredients(){
        const Ingredients = await IngredientModel.find({}).exec();
        return Ingredients;
    }

    /**
     * Get an ingredient given a name
     */
    async GetIngredientByName(name){
        if(!GeneralFunctions.CheckData(name)) return null;
        const Ingredient = await IngredientModel.findOne({ ingredient_name: name }).exec();
        return Ingredient;
    }

    /**
     * Found and update a document
     * @param {string} id The id of the respective document 
     * @param {*} data The new values
     * @returns
     *  The new document updated
     */
    async UpdateIngredient(id, data){
        if(!GeneralFunctions.CheckData(id)) return null;
        const updatedDocument = await IngredientModel.findByIdAndUpdate(id, { ...data }).exec();
        return updatedDocument;
    }

    /**
     * Delete the ingredient given athe id of the document
     * @param {string} id The id to delete 
     * @returns
     *  The document deleted
     */
    async DeleteIngredient(id){
        const deletedDocument = await IngredientModel.findByIdAndDelete(id).exec();
        return deletedDocument;
    }

    /**
     * Obtains all the drinks of the restaurant
     * @returns
     *  All the drinks of the restaurant
     */
    async GetDrinks(){
        const Drinks = await DrinkMenuModel.find({}).exec();
        return Drinks;
    }

    /**
     * Search the drink given the name
     * @param { string } name The name of the ingredient 
     */
    async GetOneDrink(name){
        //const Drink = await DrinkMenuModel.findOne({ drink_name: name }).exec();
        const Drink = await DrinkMenuModel.aggregate([
            { $match: { drink_name: name } },
            {
                $lookup: {
                    from: "ingredients",
                    localField: "ingredients",
                    foreignField: "_id",
                    as: "ingredients"
                }
            }
        ]).exec();
        return Drink.pop();
    }

    /**
     * Create a new drink
     * @param {} data The data to use
     * @returns
     *  The new drink created
     */
    async CreateDrink(data){
        const newDrink = new DrinkMenuModel({ ...data });
        await newDrink.save();
        return newDrink;
    }

    /**
     * Get and update the drink
     * @param {string} id  The Id to modify
     * @param {*} data The new values to modify
     * @param {boolean} returnUpdated If the function return the new drink updated
     * @returns
     *  The updated drink or a boolean value 
     */
    async UpdateDrink(id, data, returnUpdated = true){
        const toUpdateDrink = await DrinkMenuModel.findOneAndUpdate({ drink_name: id }, { ...data }).exec();
        console.log(toUpdateDrink);
        if(!toUpdateDrink) return false;
        if(!returnUpdated) return true;
        const updatedDrink = await DrinkMenuModel.findOne({ drink_name: id }).exec();
        return updatedDrink;

    }

    /**
     * Delete the drink and return the removed element
     * @param { string } id The id of the drink to remove
     * @returns
     *  The popped element
     */
    async DeleteDrink(id){
        const deletedItem = await DrinkMenuModel.findOneAndRemove({ drink_name: id }).exec();
        return deletedItem;
    }

}

module.exports = {
    Restaurant, 
    Kitchen
}