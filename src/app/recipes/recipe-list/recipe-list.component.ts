import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Thai Curry',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zAL8IRGrpu86P5K8CpLpVDYv9rRiuO6--Kt2CyLjNQ&s',
      'This is the recipe for Thai curry. Yummy!'
    ),
  ];
}
