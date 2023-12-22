import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ShoppingListService {

  ingredientListUpdater = new EventEmitter<Ingredient[]>();

  private ingredientsList:Ingredient[] = [
    new Ingredient("Eggs", 1, "oz"),
    new Ingredient("Milk", 1, "oz"),
    new Ingredient("Bread", 1, "oz"),
    new Ingredient("Butter", 1, "oz"),
    new Ingredient("Sugar", 1, "oz"),
    new Ingredient("Salt", 1, "oz"),
  ];
  constructor(){}

  getIngredientsList():Ingredient[] {
    return this.ingredientsList.slice();
  }
  addIngredient(newIngredient:Ingredient) {
    this.ingredientsList.push(newIngredient);
    this.ingredientListUpdater.emit(this.ingredientsList.slice())
  }

  addIngredients(newIngredients:Ingredient[]) {
    this.ingredientsList.push(...newIngredients);
    this.ingredientListUpdater.emit(this.ingredientsList.slice())
  }
}
