import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class CounterService {

  activeToinactiveCounter = 0;
  inactiveToactiveCounter = 0;

  constructor() {}
}
