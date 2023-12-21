import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('IngredientNameInput') nameInput: ElementRef;
  @ViewChild('IngredientQuantityInput') quantityInput: ElementRef;
  @ViewChild('IngredientUnitInput') unitInput: ElementRef;

  @Output() updateShoppingList: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  onUpdate() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.quantityInput.nativeElement.value,
      this.unitInput.nativeElement.value
    )
    this.updateShoppingList.emit(newIngredient);
  }

}
