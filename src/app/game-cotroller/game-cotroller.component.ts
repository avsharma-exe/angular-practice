import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-cotroller',
  templateUrl: './game-cotroller.component.html',
  styleUrl: './game-cotroller.component.css'
})
export class GameCotrollerComponent {
  @Output('gameValue') valueEvent = new EventEmitter<{value:number,isStarted:boolean}>();
  startValue = 1;
  intervalId:any;

  startGame(){
    this.intervalId = setInterval(()=>{
      this.valueEvent.emit({value:this.startValue++,isStarted:true})
    },1000)
  }

  stopGame(){
    this.valueEvent.emit({value:this.startValue,isStarted:false})
    this.startValue = 0;
    if (this.intervalId) clearInterval(this.intervalId);
  }

}
