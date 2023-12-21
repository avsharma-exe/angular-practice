import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameCotrollerComponent } from './game-cotroller/game-cotroller.component';
import { OddElementComponent } from './odd-element/odd-element.component';
import { EvenElementComponent } from './even-element/even-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCotrollerComponent,
    OddElementComponent,
    EvenElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
