import { Component } from '@angular/core';

@Component({
  selector: 'right-bar',
  templateUrl: 'rightBar.component.html',
  styleUrls: ['rightBar.component.css'],
})
export class RightBarComponent {
  list = [
    {
      text: 'GameOfThrones',
    },
    {
      text: 'Irma',
    },
    {
      text: 'DNA',
    },
    {
      text: 'WHITEPOWER',
    },
    {
      text: 'BOYZINDAHOOD',
    }
  ];
}
