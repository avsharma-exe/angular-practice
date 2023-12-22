import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  constructor(
    public name: string,
    public imageUrl: string,
    public description: string,
    public miniDescription: string,
    public ingredients:Ingredient[]
  ) { }
}
