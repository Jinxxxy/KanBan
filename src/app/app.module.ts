import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { ViewItemScreenComponent } from './components/view-item-screen/view-item-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    ViewItemScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
