//*Contains a multiple variables of the project

//*Icons imports
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBellConcierge, faBowlFood, faCoffee } from "@fortawesome/free-solid-svg-icons";

import { MenuOption } from "./interfaces/project.config";

/**
 * Contains the menu 
 */
export const MenuNavBar: MenuOption[] = [
    { title: "Inicio", icon: faBellConcierge, toolTip: { orientation: "tool-right", text: "Inicio" }, link: "" },
    { title: "Ingredientes", icon: faBowlFood, toolTip: { orientation: "tool-right", text: "Ingredientes" }, link: "/ingredients" },
    { title: "Bebidas", icon: faCoffee, toolTip: { orientation: "tool-right", text: "Bebidas" }, link: "drinks" }
]

/**
 * The server root
 */
export const SERVER_HOST = "http://localhost:3000/";
