//*Node imports
const mongoose = require("mongoose");

//? SCHEMAS

/**
 * Contains the ingredients of the meal
 */
const IngredientSchema = new mongoose.Schema({
    ingredient_name: { type: String, required: true, index: { minlength: 1, maxlength: 255 } },
    bought_price: { type: Number, required: true, index: { min: 1, max: 99999.99 } },
});

/**
 * Contains the type of the meal of the resaturant
 */
const MealTypeSchema = new mongoose.Schema({
    meal_type: { type: String, required: true, index: { minlength: 1, maxlength: 50 } }
});

/**
 * Contains the schema of the menu
 */
const MenuMealSchema = new mongoose.Schema({
    meal_detail: {
        meal: { type: String, required: true, index: { minlength: 1, maxlength: 255 } },
        price: { type: Number, required: true, index: { min: 1, max: 99999.99 }  },
    }
});

/**
 * Contains the schema of the drinks
 */
const DrinkMenuSchema = new mongoose.Schema({
    drink_name: { type: String, required: true, index: { minlength: 1, maxlength: 255 } },
    ingredients: [ mongoose.Types.ObjectId ],
    price: { type: Number, required: true, index: { min: 1, max: 99999.99 } }
});

/**
 * Contains the request
 */
const MenuRequestSchema = new mongoose.Schema({
    meals_listed: [ mongoose.Types.ObjectId ],
    drinks_listed: [ mongoose.Types.ObjectId ],
    date_taken: { type: Date }
});

//*Models
const IngredientModel = mongoose.model("ingredients", IngredientSchema);
const MealTypeModel = mongoose.model("meal_type", MealTypeSchema);
const MenuModel = mongoose.model("restaurant_menu", MenuMealSchema);
const DrinkMenuModel = mongoose.model("drink_menus", DrinkMenuSchema);
const MenuRequestModel = mongoose.model("menu_request", MenuRequestSchema);

module.exports = {
    IngredientModel, 
    MealTypeModel,
    MenuModel,
    DrinkMenuModel,
    MenuRequestModel
};