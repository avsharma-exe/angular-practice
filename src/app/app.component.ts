import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { User } from './services/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  activeToInactiveCount;
  inactiveToActiveCount;
  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.activeToInactiveCount = this.userService.getActivetoInactiveCounter();
    this.inactiveToActiveCount = this.userService.getInactivetoActiveCounter();
  }

  ngDoCheck() {
    this.activeToInactiveCount = this.userService.getActivetoInactiveCounter();
    this.inactiveToActiveCount = this.userService.getInactivetoActiveCounter();
  }



}
