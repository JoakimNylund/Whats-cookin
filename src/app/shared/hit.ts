import { Recipe } from "./recipe";
export interface Hit {
    recipe:     Recipe;
    bookmarked: boolean;
    bought:     boolean;
}
