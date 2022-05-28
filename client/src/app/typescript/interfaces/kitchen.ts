//*Contains all the templates for the response

export interface Ingredient{
    _id: string;
    ingredient_name: string;
    bought_price: number;
}


export interface CardConfig{
    view: "ingredients" | "drinks" | "meals"
}