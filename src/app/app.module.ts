import { BrowserModule }                                              from '@angular/platform-browser';
import { NgModule }                                                   from '@angular/core';
import { MdButtonModule, MdListModule, MdIconModule, MdTabsModule, MdCardModule }   from '@angular/material';
import { BrowserAnimationsModule }                                    from '@angular/platform-browser/animations';

import { AppComponent }                   from './app.component';
import { HeaderComponent }                from './components/header/header.component';
import { HeadlinesTabComponent }          from './components/headlines-tab/headlinesTab.component';
import { LeftBarComponent }               from './components/left-bar/leftBar.component';
import { RightBarComponent }              from './components/right-bar/rightBar.component';
import { ListComponent }                  from './components/list/list.component';
import { NewsBarComponent }               from './components/news-bar/newsBar.component';
import { NewsCardComponent }              from './components/news-card/newsCard.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    RightBarComponent,
    HeaderComponent,
    ListComponent,
    HeadlinesTabComponent,
    NewsBarComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
