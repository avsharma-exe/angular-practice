import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shared/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {

  constructor(private shoppingService: ShoppingListService) {}

  @Input() selectedRecipeDetails:Recipe;

  updateShoppingList(ingredientList:Ingredient[]) {
    this.shoppingService.addIngredients(ingredientList);
  }

}
