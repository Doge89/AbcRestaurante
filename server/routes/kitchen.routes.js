//*NodeJS imports
const express = require("express");

//*Class imports
const { Kitchen } = require("../classes/restaurant");

//*Errors
const {
    WrongHttpMethod,
    InvalidRequest,
    ServerError
} = require("../errors/response.errors");

//*Router
const DrinkRouter = require("./drinks.routes");
const KitchenRouter = express.Router();

//*Variables
const RestaurantKitchen = new Kitchen();

//*Routes Use
KitchenRouter.use("/drink", DrinkRouter);

//*GET REQUESTS
/**
 * Obtains all the ingredients of the kitchen
 */
KitchenRouter.get("/", async(req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Ingredients = await RestaurantKitchen.GetIngredients();
    return res.status(200).json([...Ingredients]).end();
});

KitchenRouter.get("/get/:item", async(req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    if(!req.params.item.match(/./)) return res.status(InvalidRequest.code).json({ ...WrongHttpMethod }).end();
    const Ingredient = await RestaurantKitchen.GetIngredientByName(req.params.item);
    console.log(Ingredient);
    return res.status(200).json({ ...Ingredient._doc }).end();
})

/**
 * Obtains all the drinks of the menu drinks
 */
KitchenRouter.get("/drinks");

//*POST REQUESTS
KitchenRouter.post("/newIngredient", async(req, res, next) => {
    if(req.method !== "POST") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Data = { ingredient_name: req.body.ingredient_name, bought_price: req.body.bought_price };
    console.log(Data)
    if(!Data) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const newIngredient = await RestaurantKitchen.AddNewIngredient(Data);
    return res.status(201).json({ ...newIngredient._doc }).end();
});

//*PUT REQUESTS
KitchenRouter.put("/editIngredient", async(req, res, next) => {
    if(req.method !== "PUT") return res.status(WrongHttpMethod.code).json({...WrongHttpMethod}).end();
    const data = {...req.body};
    if(!data) return res.status(InvalidRequest.code).json({...InvalidRequest}).end();
    console.log(data);
    const updatedIngredient = await RestaurantKitchen.UpdateIngredient(data._id, data);
    return res.status(200).json({ ...updatedIngredient }).end();
});

//*DELETE REQUESTS
KitchenRouter.delete("/deleteIngredient/:id", async(req, res, next) => {
    if(req.method !== "DELETE") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    if(!req.params.id) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const deletedIngredient = await RestaurantKitchen.DeleteIngredient(req.params.id);
    return res.status(200).json({ ...deletedIngredient }).end();
});

module.exports = KitchenRouter;