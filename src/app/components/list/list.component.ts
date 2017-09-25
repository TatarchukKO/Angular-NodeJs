import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-component',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
})
export class ListComponent {
  @Input() list: any;
  @Input() isLeftBar: boolean = false;
  @Input() isRightBar: boolean = false;
  @Input() isNewsBar: boolean = false;

}
