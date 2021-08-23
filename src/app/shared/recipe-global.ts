import { Hit } from "./hit";
export interface RecipeGlobal {
    q:     string;
    from:  number;
    to:    number;
    more:  boolean;
    count: number;
    hits:  Hit[];
}
