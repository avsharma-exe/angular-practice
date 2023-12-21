import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../services/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  inactiveUsers: User[] = [];

  constructor( private userService: UserServiceService ) {}

  ngOnInit(): void {
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  ngDoCheck(): void {
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  onSetToActive(name: string): void {
    this.userService.updateUserStatus(name);
  }
}
