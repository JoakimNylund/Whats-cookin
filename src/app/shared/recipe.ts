import { Ingredients } from "./ingredients";

export interface Recipe {
        title: string;
        uri: string;
        url: string;
        source: string;
        label: string;
        image: string;
        calories: number;
        ingredients: Ingredients[];      
}
