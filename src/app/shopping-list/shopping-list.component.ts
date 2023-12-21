import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients : Array<Ingredient> = [
    new Ingredient("Orange",12,"units"),
    new Ingredient("Rice",2,"Kg")
  ];

}
