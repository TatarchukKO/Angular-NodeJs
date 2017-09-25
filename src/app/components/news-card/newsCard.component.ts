import { Component, Input } from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'news-card',
  templateUrl: 'newsCard.component.html',
  styleUrls: ['newsCard.component.css'],
})

export class NewsCardComponent {
  article: any;
}

