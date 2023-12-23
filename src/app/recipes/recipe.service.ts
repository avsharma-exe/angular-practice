import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipesList: Array<Recipe> = [
    new Recipe(
      'Thai Curry',
      'https://as2.ftcdn.net/v2/jpg/01/27/20/11/1000_F_127201133_KuDeQPic79UhMl18Z2kuwpx9tsE9jfuu.jpg',
      'This delicious Thai Curry recipe is both vegetarian and vegan. If you want a healthy dinner packed full of bright flavors and hearty vegetables, this is the recipe for you. This Thai Red Curry is a family favorite. If you have a can of coconut milk at the ready, this recipe will come together very quickly and will deliver a ton of flavor.',
      'Thai Curry recipe here.',
      [
        new Ingredient('Milk', 1, 'lt'),
        new Ingredient('Coconut', 100, 'gm'),
        new Ingredient('Sugar', 100, 'gm'),
      ]
    ),
    new Recipe(
      'Veg Biryani',
      'https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=',
      'Whether it is a Sunday lunch with family or a weekend party with friends, you can rarely go wrong with a biryani! While the cooking process of a Vegetable Biryani can be slightly lengthy, the simplicity makes up for it. Serve it with raita or a salad, because you don’t really need a lot of things on the table when you have a big handi of aromatic, flavourful biryani! Just make sure you use a good mix of fresh vegetables for maximum colour, flavour and taste.',
      'Veg Biryani recipe here.',
      [
        new Ingredient('Water', 1, 'lt'),
        new Ingredient('masala', 10, 'gm'),
        new Ingredient('Rice', 100, 'gm'),
      ]
    ),
    new Recipe(
      'Pizzaa',
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.1.1262725954.1692990840&semt=sph',
      'Be it any occasion, we all love to eat pizza at home. But, what goes behind making this delicious dish? Well, learn all about making a delicious pizza at home with this easy recipe that will take you through detailed steps some tips that will guide you in preparing a Pizza at home.',
      'Pizza recipe here',
      [
        new Ingredient('Sauce', 1, 'lt'),
        new Ingredient('Cheese', 100, 'gm'),
        new Ingredient('Paneer', 100, 'gm'),
      ]
    ),
  ];

  constructor() {}

  getRecipesList() {
    return this.recipesList.slice();
  }

  filterRecipeByName(name: string) : Recipe {
    return this.recipesList.filter((recipe) => {
      return recipe.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    })[0]
  }

}
