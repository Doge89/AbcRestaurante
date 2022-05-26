//*NodeJS imports
const express = require("express");

//*Classes imports
const { Restaurant } = require("../classes/restaurant");

//*Router imports
const KitchenRouter = require("./kitchen.routes");

//*Errors
const {
    WrongHttpMethod,
    InvalidRequest,
    ServerError
} = require("../errors/response.errors");

//*Variables
const IndexRouter = express.Router();
const FoodRestaurant = new Restaurant();

//*Router uses
IndexRouter.use("/kitchen", KitchenRouter);

//*GET REQUESTS

/**
 * Obtains the all the menu of the restaurant
 */
IndexRouter.get("/", async (req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Menu = await FoodRestaurant.GetMenu();
    return res.status(200).json([...Menu]).end()
});

//*POST REQUESTS
/**
 * Create a meal type
 */
IndexRouter.post("/createMealType", async(req, res, next) => {
    if(req.method !== "POST") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const data = { ...req.body };
    if(!data) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const mealType = FoodRestaurant.CreateMealType(data);
    return res.status(201).json({...mealType._doc}).end(); 
});

/**
 * Create a new meal for the restaurant
 */
IndexRouter.post("/createMeal", async(req, res, next) => {
    if(req.method !== "POST") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const data = { ...req.body };
    if(!data) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    // const 
});

module.exports = IndexRouter;