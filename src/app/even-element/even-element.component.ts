import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-element',
  templateUrl: './even-element.component.html',
  styleUrl: './even-element.component.css'
})
export class EvenElementComponent {

  @Input() currVal = 0;
}
