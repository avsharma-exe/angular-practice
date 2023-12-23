import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shared/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  constructor(
    private shoppingService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  selectedRecipeDetails: Recipe;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedRecipeDetails = this.recipeService.filterRecipeByName(
        params.get('id')
      );
    });
  }
  updateShoppingList(ingredientList: Ingredient[]) {
    this.shoppingService.addIngredients(ingredientList);
  }
}
function params(value: ParamMap): void {
  throw new Error('Function not implemented.');
}
