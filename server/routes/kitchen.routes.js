//*NodeJS imports
const express = require("express");

//*Class imports
const { Kitchen, Restaurant } = require("../classes/restaurant");

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
const FoodRestaurant = new Restaurant();

//*Routes Use
KitchenRouter.use("/drink", DrinkRouter);

//*GET REQUESTS
/**
 * Obtains all the ingredients of the kitchen
 */
KitchenRouter.get("/", async(req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Menu = await RestaurantKitchen.GetMenu();
    const Drinks = await RestaurantKitchen.GetDrinks();
    return res.status(200).json({ drink_menu: [ ...Drinks ], meals: [ ...Menu ] }).end();
});

KitchenRouter.get("/ingredients", async(req, res, next) => {
    if(req.method !== "GET") return res.status(WrongHttpMethod).code.json({ ...WrongHttpMethod }).end();
    const Drinks = await RestaurantKitchen.GetDrinks();
    return res.status(200).json([...Drinks]).end();
})

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
KitchenRouter.post("/createMeal", async(req, res, next) => {
    if(req.method !== "POST") return res.status(WrongHttpMethod.code).json({ ...WrongHttpMethod }).end();
    const Data = { ...req.body };
    if(!Data) return res.status(InvalidRequest.code).json({ ...InvalidRequest }).end();
    const meal = {
        meal_detail: {
            meal: Data.meal_detail.meal,
            price: Data.meal_detail.price
        }
    }
    const newIngredient = await FoodRestaurant.CreateMeal(meal);
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