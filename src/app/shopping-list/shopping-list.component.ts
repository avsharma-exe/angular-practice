import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  constructor(private shoppingService: ShoppingListService) {}

  ingredientList: Ingredient[] ;
  listSubscriber;
  ngOnInit() {
    this.ingredientList = this.shoppingService.getIngredientsList()
    this.listSubscriber = this.shoppingService.ingredientListUpdater.subscribe((ingredients: Ingredient[]) =>{
      this.ingredientList = ingredients;
    })
  }

  updateShoppingListItems(updatedIngredient:Ingredient){
    this.ingredientList.push(updatedIngredient);
  }

  ngOnDestroy(): void {
      this.listSubscriber.unsubscribe();
  }

}
