import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipe:Recipe;

  selectedRecipeObserver;

  constructor(private recipeService: RecipeService) {}



  ngOnInit(): void {
    this.selectedRecipeObserver = this.recipeService.selectedRecipe.subscribe(recipe => {
      this.recipe = recipe;
    })
  }

  ngOnDestroy(): void {
      this.selectedRecipeObserver.unsubscribe();
  }

}
