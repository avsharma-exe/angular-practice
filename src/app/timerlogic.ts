import {Component, Input, OnInit} from '@angular/core';
import { TimerService } from '../timer.service';


@Component({
  selector: 'countdown-timer',
  templateUrl: './countdownTimer.component.html',
  styleUrls: ['./countdownTimer.component.scss'],
})
export class CountdownTimer implements OnInit {
  @Input() initial: number;
  minutes = null;
  seconds = null;
  secondsHandler:number = 0 ;
  intervalCatcher;

  constructor(private timerService: TimerService) {}
  ngOnInit() {
    this.secondsHandler = +this.initial;
    this.minutes = Math.floor(this.secondsHandler / 60);
    this.seconds = this.secondsHandler % 60;
  }

  onResetTimer() {
    if(this.intervalCatcher)clearInterval(this.intervalCatcher);
    this.secondsHandler = +this.initial;
    this.minutes = Math.floor(this.secondsHandler / 60);
    this.seconds = this.secondsHandler % 60;
  }

  onStartTimer() {
    this.intervalCatcher = setInterval(()=>{
      if(this.secondsHandler <= 0) {
        this.onStopTimer();
        return
      } else {
        this.secondsHandler-=1;
        this.minutes = Math.floor(this.secondsHandler / 60);
        this.seconds = this.secondsHandler % 60;
      }}, 1000)
  }


  onStopTimer() {
    clearInterval(this.intervalCatcher);
  }

  addFive() {
    this.secondsHandler = +this.secondsHandler + 5;
    console.log(this.secondsHandler)
    this.minutes = Math.floor(this.secondsHandler / 60);
    this.seconds = this.secondsHandler % 60;
  }

  removeFive() {
    this.secondsHandler = +this.secondsHandler - 5;
    if(this.secondsHandler <= 0) {
      this.onStopTimer();
    }else{
      this.minutes = Math.floor(this.secondsHandler / 60);
      this.seconds = this.secondsHandler % 60;
    }

  }
}
