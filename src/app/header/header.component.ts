import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() navSelection : EventEmitter<string> = new EventEmitter<string>();

  onNav(selectedNav:string ){
    this.navSelection.emit(selectedNav)
  }

}
