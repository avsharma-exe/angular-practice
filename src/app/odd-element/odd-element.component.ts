import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-element',
  templateUrl: './odd-element.component.html',
  styleUrl: './odd-element.component.css'
})
export class OddElementComponent {

  @Input() currVal = 0;

}
