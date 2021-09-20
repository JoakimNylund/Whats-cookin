import { Ingredients } from "./ingredients";

export interface Recipe {
        title: string;
        uri: string;
        label: string;
        image: string;
        ingredients: Ingredients[];      
}
