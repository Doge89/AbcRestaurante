//*NodeJS imports
const express = require("express");

//*Class imports
const { Kitchen } = require("../classes/restaurant");

//*Router
const DrinkRouter = express.Router();

//*Error Imports
const {
    WrongHttpMethod, InvalidRequest, ServerError
} = require("../errors/response.errors");

//*Variables
const KitchenRestaurant = new Kitchen();

//*GET ROUTES

/**
 * Get all the Drinks
 */
DrinkRouter.get("/", async(req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Drinks = await KitchenRestaurant.GetDrinks();
    return res.status(200).json([...Drinks]).end();
});

/**
 * Get one drink
 */
DrinkRouter.get("/:name", async(req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Drink = await KitchenRestaurant.GetOneDrink(req.params.name);
    console.info(Drink);
    return res.status(200).json({ ...Drink }).end();
})

//* POST ROUTES

/**
 * Create a new drink
 */
DrinkRouter.post("/createDrink", async(req, res, next) => {
    if(req.method !== "POST") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const data = { ...req.body };
    if(!data) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const validIngredients = data.ingredientIds.every(item => {
        return typeof item === "string" && item.length === 24;
    });
    if(!validIngredients) return res.status(ServerError.code).json({ ...ServerError }).end();
    console.info(data);
    data.ingredients = [...data.ingredientIds];
    delete data.ingredientIds;
    delete data._id;
    const newDrink = await KitchenRestaurant.CreateDrink(data);
    return res.status(201).json({ ...newDrink._doc }).end();
});

//*PUT ROUTES
/**
 * Update the drink
 */
DrinkRouter.put("/updateDrink", async(req, res, next) => {
    if(req.method !== "PUT") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const data = { ...req.body };
    if(!data) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const isIngredientValid = data.ingredientIds.every(item => {
        return typeof item === "string" && item.length === 24;
    });
    if(!isIngredientValid) return res.status(ServerError.code).json({ ...ServerError }).end();
    data.newValues.ingredients = [ ...data.ingredientIds ];
    delete data._id;
    delete data.ingredientIds;
    const response = await KitchenRestaurant.UpdateDrink(data.id, data.newValues);
    return res.status(200).json(typeof response === "boolean" ? { msg: "The value has been updated" } : { ...response }).end();
});

//*DELETE ROUTES

/**
 * Delete a drink from the menu
 */
DrinkRouter.delete("/deleteDrink/:item", async(req, res, next) => {
    if(req.method !== "DELETE") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    if(!req.params.item) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const deletedDrink = await KitchenRestaurant.DeleteDrink(req.params.item);
    return res.status(200).json({ ...deletedDrink }).end();
})

module.exports = DrinkRouter;
