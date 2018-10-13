import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfobannerComponent } from './infobanner/infobanner.component';
import { EnemyfleetComponent } from './enemyfleet/enemyfleet.component';
import { PlayerfleetComponent } from './playerfleet/playerfleet.component';

@NgModule({
  declarations: [
    AppComponent,
    InfobannerComponent,
    EnemyfleetComponent,
    PlayerfleetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
