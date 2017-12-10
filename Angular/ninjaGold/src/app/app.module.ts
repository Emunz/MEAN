import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { GoldComponent } from './gold/gold.component';
import { ActionsComponent } from './actions/actions.component'


@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
