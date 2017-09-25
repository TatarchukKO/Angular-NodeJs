import { Component } from '@angular/core';

@Component({
  selector: 'left-bar',
  templateUrl: 'leftBar.component.html',
  // styleUrls: ['leftBar.component.css'],
})
export class LeftBarComponent {
  list = [
    {
      icon: 'Print',
      text: 'Print',
    },
    {
      icon: 'http',
      text: 'http',
    },
    {
      icon: 'receipt',
      text: 'receipt',
    },
    {
      icon: 'settings',
      text: 'settings',
    },
    {
      icon: 'shop',
      text: 'shop',
    },
    {
      icon: 'today',
      text: 'today',
    },
    {
      icon: 'theaters',
      text: 'theaters',
    },
    {
      icon: 'error',
      text: 'error',
    }
  ];
}
