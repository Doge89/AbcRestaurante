import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Template to create tooltips
 */
export interface ToolTip{
    orientation: "tool-right" | "tool-left" | "tool-up" | "tool-down";
    text?: string;
}

/**
 * Template to create Options for the menu
 */
export interface MenuOption{
    title: string;
    icon: IconDefinition;
    toolTip: ToolTip;
    link: string;
}