import { Injectable } from '@angular/core';
import { User } from './user.model';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  Users: Array<User> = [
    new User('Ayush', 24, true),
    new User('Richard', 24, true),
    new User('Anmol', 25, false),
    new User('John', 28, false),
  ];
  constructor(private counterService: CounterService) {}
  getUsers(): Array<User> {
    return this.Users;
  }
  getActiveUsers(): Array<User> {
    return this.Users.filter((user) => user.status);
  }
  getInactiveUsers(): Array<User> {
    return this.Users.filter((user) =>!user.status);
  }
  updateUserStatus(userName: string) {
    this.Users = this.Users.map((user:User) => {
      if (user.name === userName) {
        if(user.status) this.counterService.activeToinactiveCounter++;
        else this.counterService.inactiveToactiveCounter++;
        user.status =!user.status;
      }
      return user;
    });
  }
  getActivetoInactiveCounter(): number {
    return this.counterService.activeToinactiveCounter;
  }

  getInactivetoActiveCounter(): number {
    return this.counterService.inactiveToactiveCounter;
  }
}
