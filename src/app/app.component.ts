import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app';
  gameValue = 0;
  isStarted:boolean;
  oddValue:Array<number> = [];
  evenValue:Array<number> = [];

  @Input() selectedNav:string = 'recipe-list';

  valueUpdater(data) {
    this.gameValue = data.value;
    this.isStarted = data.isStarted;
    if(data.value % 2 === 0 ){
      this.evenValue.push(data.value)
    }else{
      this.oddValue.push(data.value)
    }
  }

  navControl(selectedNav:string){
    this.selectedNav = selectedNav;
  }
}
