import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  activeUsers: User[] = [];

  constructor( private userService: UserServiceService ) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.getActiveUsers();
  }

  ngDoCheck(): void {
    this.activeUsers = this.userService.getActiveUsers();
  }

  onSetToInactive(name: string): void {
    this.userService.updateUserStatus(name);
  }
}
